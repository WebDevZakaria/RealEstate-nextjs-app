'use client'
import { useEffect,useState } from "react"
import { useParams } from "next/navigation"
import { fetchProperty } from "@/utils/requests"
import PropertyHeaderImage from "@/components/PropertyHeaderImage"
import Link from "next/link"
import PropertyDetails from "@/components/PropertyDetails"
import PropertyImages from "@/components/PropertyImages"
import {FaArrowLeft} from 'react-icons/fa'
import BookmarkButton from "@/components/BookmarkButton"

import Spinner from "@/components/Spinner"
import ShareButtons from "@/components/ShareButtons"
import PropertyContactForm from "@/components/PropertyContactForm"


const ProperyPage = () => {

  const { id } = useParams()

  const [property,setProperty] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(() =>{

    const fetchPropertyData = async() => {
      if(!id) return;
      
      try{
        const property = await fetchProperty(id)
        setProperty(property)


      }catch(error){
        console.error('Error fetching property:',error)

      }finally {
        setLoading(false)

      }
    }

    if(property === null){

      fetchPropertyData()

    }

  },[id,property])

  if(!property && !loading) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property not Found
      </h1>
    )
  }


  return (

    <>
    {loading && <Spinner loading = {loading} />}
     {!loading && property && (
      <>

      <PropertyHeaderImage image = {property.images[0]} />

    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-purple-500 hover:text-purple-700 flex items-center"
        >
          <FaArrowLeft className=" mr-2" /> العودة إلى الرئيسية
        </Link>
      </div>
    </section>


    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <PropertyDetails property = {property} />
       

          {/* <!-- Sidebar --> */}
          <aside className="space-y-4">       
         


            <BookmarkButton property = {property} />

            <ShareButtons property = {property} />

            <PropertyContactForm property = {property} />
           
            
           
          </aside>
        </div>
      </div>
    </section>

    <PropertyImages images = {property.images} />



      </>
     )}
    </>

  )

}

export default ProperyPage
