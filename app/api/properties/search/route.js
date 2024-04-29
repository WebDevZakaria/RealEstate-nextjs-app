import connectDB from "@/config/database";
import Property from "@/models/Property";


//get /api/proerties/search



export const GET = async (request) =>{

    try{

        await connectDB()
        const {searchParams} = new URL(request.url)
        const location = searchParams.get('location')
        const propertyType = searchParams.get('propertyType')

        console.log(location,propertyType)

        const locationPattern = new RegExp(location,'i')

        let query = {

            $or:[

                {name:locationPattern},
                {description:locationPattern},
                {'location.street':locationPattern},
                {'location.city':locationPattern},
                {'location.state':locationPattern},
                {'location.zipcode':locationPattern},

            ]
        }

        //only check 3la property ila kant machi all

        

        if(propertyType && propertyType !=='All'){

            const typePattern = new RegExp(propertyType,'i')
            query.type = typePattern

        }


        const properties = await Property.find(query)


        return new Response(JSON.stringify(properties),{status:200})




    }catch(error){

        return new Response('Something went wrong',{status:500})


    }
}
