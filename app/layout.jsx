import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'


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
    <ToastContainer />
    </body>

    </html>
    </AuthProvider>
  )

}


export default MainLayout
