'use client'

import { useState } from "react"


import { FaPaperPlane } from "react-icons/fa"
import { toast } from "react-toastify"
import { useSession } from "next-auth/react"


const PropertyContactForm = ({property}) => {

  const {data:session} = useSession()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [phone,setPhone] = useState('')
  const [wasSubmitted,setWasSubmitted] = useState(false)



  const handleSubmit = async (e) =>{
    e.preventDefault()
    const data = {
      name,
      email,
      phone,
      message,
      recipient:property.owner,
      property:property._id


    }

try{
  const res = await fetch('/api/messages',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'

    },
    body:JSON.stringify(data)

  })
  if(res.status ===200) {
    toast.success('Message sent successfully')
    setWasSubmitted(true)


    
  }
  else if(res.status ===400 || res.status ===401){
    const dataObj = await res.json()
    toast.error(dataObj.message)

  }else{

    toast.error('Error sending')
    
  }
  


}catch(error)  {
  console.log('error sendin form')
  toast.error('Error sending form')

} finally{
  setName('')
  setEmail('')
  setPhone('')
  setMessage('')

}

}




  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-6">اتصل بمالك المنزل</h3>
    {!session ? (<p className="text-red-500 mb-4 font-semibold text-[40px]">عليك تسجيل الدخول لكي ترسل رساله
</p>):(

wasSubmitted ?(
  <p className="text-green-500 mb-4 font-semibold text-[40px]">      
لقد تم إرسال رسالتك بنجاح
  </p>
):(

  <form onSubmit={handleSubmit}>
  <div className='mb-4'>
    <label
      className='block text-gray-700 text-sm font-bold mb-2'
      htmlFor='name'
    >
      الاسم:
    </label>
    <input
      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      id='name'
      type='text'
      placeholder='أدخل أسمك'             
      required
      value={name}
      onChange={(e) =>setName(e.target.value)}

    />
  </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
البريد الإلكتروني:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="أدخل بريدك الإلكتروني"
        required
        value={email}
        onChange={(e) =>setEmail(e.target.value)}
      />
    </div>
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor='phone'
      >
        رقم الهاتف:
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='phone'
        type='text'
        placeholder='أدخل رقم هاتفك'
        value={phone}
        onChange={(e) =>setPhone(e.target.value)}
      />
    </div>
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="message"
      >
        الرسالة:
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="أدخل رسالتك"

        value={message}
        onChange={(e) =>setMessage(e.target.value)}
      ></textarea>
    </div>
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
        type="submit"
      >
        <FaPaperPlane className="mr-2" /> أرسل الرسالة
      </button>
    </div>
  </form>

)

)}
   
   
  </div>
  )
}

export default PropertyContactForm
