import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {

    title:'RealEstate | Find Your Perfect Property',
    description:'find your dream property',
    keywords:'realestate,find property,home'

}

const MainLayout = ({children}) => {

  return (
    <AuthProvider>

<html lang='en'>

    <body>
        <Navbar />
    <main>{children}</main>
    <Footer />
    </body>

    </html>
    </AuthProvider>
  )

}


export default MainLayout
