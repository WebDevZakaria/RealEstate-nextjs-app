import PropetyCard from "./PropetyCard"
import Link from "next/link"
import { fetchProperties } from "@/utils/requests";



const HomeProperties = async () => {

  const data = await fetchProperties();

  const recentProperties = data.sort(() => Math.random() - Math.random()).slice(0, 6);

  return (
     <>   

      <section className="px-4 py-6">

    <div className="container-xl lg:container m-auto">
      <h2 className="text-4xl font-bold text-purple-700 mb-16 mt-12 text-center">
      العقارات الحديثة
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {recentProperties === 0 ? (
            <p> لم يتم العثور على شيء</p>
        ):
            recentProperties.map((property) => (
                <PropetyCard key={property._id} property = {property} />

            ))}
      
        

        </div>

        </div>
        </section>

<section className="m-auto max-w-lg my-10 px-6">

<Link
  href="/properties"
  className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
  >عرض جميع العقارات</Link>

</section>

</>

)
}

export default HomeProperties
