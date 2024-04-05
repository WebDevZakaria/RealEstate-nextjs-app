import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
export const metadata = {

    title:'RealEstate | Find Your Perfect Property',
    description:'find your dream property',
    keywords:'realestate,find property,home'

}

const MainLayout = ({children}) => {

  return (

<html lang='en'>

    <body>
        <Navbar />
    <main>{children}</main>
    <Footer />
    </body>

    </html>

  )

}


export default MainLayout
