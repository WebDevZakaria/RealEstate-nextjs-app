import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = 'force-dynamic'

export const POST = async(request) =>{

    try{
        await connectDB()

        const {PropertyId} = await request.json()

        const sessionUser = await getSessionUser()

        if(!sessionUser || !sessionUser.userId){
            return new Response ('User ID is required',{status:401})
        }

     const {userId} = sessionUser

     //nhawsou 3la user in the database

     const user = await User.findOne({_id:userId})

     //nchoufou ila dar is bookmarked already
     let isBookmarked = user.bookmarks.includes(PropertyId) 
     
     return new Response(JSON.stringify({isBookmarked}),{status:200})



    }

    catch(error){

        console.log(error)
        return new Response('Somthing went Wrong' ,{status:500})

    }
}