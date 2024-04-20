//const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

async function fetchProperties(){

    try

    {
        //handle where the domain is not available yet
      
      const res = await fetch ('http://localhost:3000/api/properties',{cache:'no-store'});
      
      if (!res.ok) 
      {
        throw new Error('failed to fetch data')
      }
  
      return res.json()
  
    }
  
    catch(error){

      console.log(error)

    }
  
  }

  //Fetch single Property

  async function fetchProperty(id){

    try

    {
        //handle where the domain is not available yet
      
  
      const res = await fetch (`http://localhost:3000/api/properties/${id}`);
  
      if (!res.ok) 
      {
        throw new Error('failed to fetch data')
  
      }
  
      return res.json()
  
    }
  
    catch(error){
      console.log(error)
      return null
  
    }
  
  }


  
  export { fetchProperties,fetchProperty };