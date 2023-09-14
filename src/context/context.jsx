
import React , {useContext , useState} from 'react'
import { useMutation} from '@tanstack/react-query'
import axios from 'axios'
import { toast } from "react-toastify";




const AppContext = React.createContext()


const AppProvider  = ({children}) => {


    const [loggedIn,setLoggedIn] = useState(false)
    const [registered,setRegistered] = useState(false)
    const [user,setUser] = useState([])
    const [wishList,setWishList] = useState([])


    const {mutate : RegisterUser , isError : ErrorRegister , isLoading : LoadingRegister}  = useMutation({
        mutationFn : (data) => {
            return axios.post('api/v1/auth/register' , data)
        },
        onSuccess : () => {
            toast.success('registered successfully')
            setRegistered(true)
        },
        onError : (error) => {
            console.log(error)
            toast.error(error.response.data.msg)
        }
    })


    const {mutate : LoginUser , isError : ErrorLogin , isLoading : LoadingLogin} = useMutation({
        mutationFn : (data) => {
            return axios.post('api/v1/auth/login' , data)
        },
        onSuccess : (data) => {
            setLoggedIn(true)
            setUser(data)
            toast.success('logged in successfully')
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : LogoutUser} = useMutation({
        mutationFn : () => {
            return axios.get('api/v1/auth/signout')
        },
        onSuccess : () => {
            setLoggedIn(false)
            setUser([])
            toast.success('logged out successfully')
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    // const LogoutUser = async () => {
    //     await axios.get('/api/v1/auth/logout');
    //     toast.success('Logging out...');
    //   };


    const {mutate : AddToWishList} = useMutation({
        mutationFn : (id) => {
            return axios.patch('/api/v1/wishlist/add' , {product : id})
        },
        onSuccess : (data) => {
            setWishList(data.data.result.wishList)
            toast.success('wishlist updated successfully')
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : RemoveFromWishList} = useMutation({
        mutationFn : (id) => {
            return axios.patch('/api/v1/wishlist/remove' , {product : id})
        },
        onSuccess : (data) =>  {
            setWishList(data.data.result.wishList)
            toast.success('product removed successfully')
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })

    const {mutate : AddToCart } = useMutation({
        mutationFn : (id) => {
            return axios.post('/api/v1/cart' , {product : id})
        },
        onSuccess : () => {
            toast.success('product added to cart')
        },
        onError : (error) => {
            toast.error(error.response.data.msg)
        }
    })
    
    return (
        <AppContext.Provider value={{
            RegisterUser,
            ErrorRegister,
            LoadingRegister,
            LoadingLogin,
            LoginUser,
            ErrorLogin,
            LogoutUser,
            loggedIn,
            setLoggedIn,
            user,
            setRegistered,
            registered,
            AddToWishList,
            wishList,
            setWishList,
            RemoveFromWishList,
            AddToCart
    }}>
            {children}
        </AppContext.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext)
}

export  {useAppContext , AppProvider}