'use client'
import { useState,useEffect } from 'react';

import PropetyCard from '@/components/PropetyCard'
import { fetchProperties } from "@/utils/requests";

import Hero from '@/components/Hero';




const PropertyPage = async () => {

  const [properties,setProperties] = useState([])
  const [loading,setLoading] = useState(true)

  const [page,setPage] = useState(1)
  const [pageSize,setPageSize] = useState(3)
  const [totalItems,setTotalItems] = useState(0) 


  useEffect(() =>{

    const fetchProperties  = async() =>{

      try{

        const res = await fetch(`/api/properties?page=${page}&pageSize=${pageSize}`)
        if(!res.ok){
          throw new Error('Failed to fetch data')
  
        }
  
        const data = await res.json()
        setProperties(data.properties)
        setTotalItems(data.total)
 
      }catch(error){
        console.log(error)
  
      } finally{
        setLoading(false)
      }

    }
     fetchProperties()
   




  },[])



  //const data = await fetchProperties();
  
  //const properties = data.properties.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))


  return (
    <section className="px-4 py-6">
    <div className="container-xl lg:container m-auto px-4 py-6">
      <Hero />
      {properties.lenght === 0 ? (

        <p> لا يوجد عقارات متاحة  </p>

      ): 

      (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
        {properties.map((property) =>(

          <PropetyCard key={property._id} property = {property} />

        ))}

        
        </div>

      )}
        </div>
        </section>
  )
}

export default PropertyPage
