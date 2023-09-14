import axios from 'axios'
import SingleWishList from "../components/SingleWishlist"
import { useEffect } from 'react'
import { useAppContext } from '../context/context'
import Loading from '../components/Loading'





const WishList = () => {


    const { wishList, setWishList } = useAppContext()


    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const { data } = await axios.get('/api/v1/wishlist')
                setWishList(data.result)
            } catch (error) {
                console.log(error)
            }
        }
        fetchWishList()
    },[])

    if(!wishList) {
        return <Loading/>
    }

    return (
        <section className="w-4/5 mx-auto my-5 text-center">
            <h1 className="text-5xl text-orange-500">WishList</h1>
            <div className='flex gap-3 flex-wrap my-5'>
                {
                    wishList.map((item) => {
                        return <SingleWishList key={item._id} {...item} />
                    })
                }
                {
                    wishList.length === 0 && <h1 className="text-5xl my-[5.4rem] lg:my-20 ">No Product in your Wishlist</h1>
                }
            </div>
        </section>
    )
}


export default WishList