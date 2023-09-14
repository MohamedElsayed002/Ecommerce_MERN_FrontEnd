
import { Outlet , Navigate , useNavigation } from "react-router-dom"
import { useAppContext } from "../context/context"
import Loading from "./Loading"


const ProtectedRoutes = () => {

    const {user} = useAppContext()
    if(user?.data?.message !== "login success") {
        return  <Navigate to="/login" />
    }else {
        return <Outlet/>
    }   
}

export default ProtectedRoutes