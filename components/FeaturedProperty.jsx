import { fetchProperties } from "@/utils/requests"
import FeaturedSingleCard from "./FeaturedSingleCard"



const FeaturedProperty = async () => {

    const properties = await fetchProperties({
        showFeatured:true,
    })




  return properties.length > 0  && (
    <section className=" px-4 pt-6 pb-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">
        عقارات مميزة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{properties.map((property) =>(
      <FeaturedSingleCard key = {property._id} property = {property}  />
))}
    
     
       
      </div>
    </div>
  </section>
  )
}

export default FeaturedProperty
