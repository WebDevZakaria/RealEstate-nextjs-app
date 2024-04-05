import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers:[

                GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                  authorization: {
                    params: {
                      prompt: "consent",
                      access_type: "offline",
                      response_type: "code"
                    }
                  }
                })
              
    ],
    callbacks:{

        //invoked on sucessful sign in
        async signIn({profile}){



        },
        //modifies th session object
        async session({session}){
            
        }

    }

}
