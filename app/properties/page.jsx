import PropetyCard from '@/components/PropetyCard'
import { fetchProperties } from "@/utils/requests";

import Hero from '@/components/Hero';




const PropertyPage = async () => {

  const properties = await fetchProperties();
  
  properties.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))

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
