

import { Outlet , useNavigation } from "react-router-dom"
import { Navbar } from "../components"
import Footer from "../components/Footer"
import Loading from "../components/Loading"

const LayoutPage = () => {

    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    
    return (
        <>
            <Navbar/>
            {
                isLoading ? <Loading/> : <Outlet/>
            }
            <Footer/>
        </>
    )
}

export default LayoutPage