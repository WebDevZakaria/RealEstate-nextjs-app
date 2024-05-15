'use client'
import { useState,useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import REAL from '../assets/images/real.jpg'
import Image from 'next/image'
import {FaGoogle} from 'react-icons/fa'


const TopHero = () => {

  const {data: session} = useSession()
  const [providers,setProviders] = useState(null)


  const pathname = usePathname()

  useEffect(() => {

    const setAuthProviders = async() =>{

      const res = await getProviders()
      setProviders(res)

    }

    setAuthProviders()

  },[])


  return (

<div className="relative h-screen">
<Image
src= {REAL}
alt=""
width={0}
height={0}
sizes="100vw"
className="absolute inset-0 object-cover w-full h-full"
/>

      <div className="relative bg-gray-900 h-screen bg-opacity-75">
      <div>
        <div className="px-4 py-80 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-72">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mx-[30px]">
           
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative"></span>
              </span>{' '}
              هل تواجه صعوبة في العثور على منزل أحلامك؟ اكتشف الإيجارات ذات الأسعار المعقولة اليوم!


            </h2>
            <p className="text-[20px] text-purple-500 md:text-[25px]">
            قل وداعًا لمتاعب البحث عن منزل - اعثر على مكان الإيجار المثالي بسهولة!            
            </p>
          </div>
          <div className="flex items-center sm:justify-center mx-[140px]">

          {!session && (

            <div>
            <div>

            {providers && 
              Object.values(providers).map((provider,index) => (

 <button onClick={() =>signIn(provider.id)} key={index}                className="inline-flex items-center justify-center h-14 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-600 focus:shadow-outline focus:outline-none">
 <span>ابدأ الأن</span>
</button>
              ))}
             
            </div>
          </div>
          )}
 
            <a
              href="/properties"
              aria-label=""
              className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              تصفح العقارات
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}


export default TopHero
