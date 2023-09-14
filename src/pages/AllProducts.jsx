import axios from "axios"
import { useLoaderData, useLocation, useNavigate, Link , Outlet } from "react-router-dom"
import Paginate from "../components/Paginate"


export const loader = async () => {
    try {
        const { data } = await axios('/api/v1/products/admin-all-products')
        return { data: data.result }
    } catch (error) {
        return error
    }
}


const AllProducts = () => {

    const { data } = useLoaderData()


    return (
        <>
            <h1>AllProducts</h1>
            <div className="grid sm:grid-cols-3 my-10 md:grid-cols-5 gap-5">
                {
                    data.map((item) => {
                        return (
                            <>
                                <Link to={`/user/admin/product/${item._id}`}>
                                    <img src={item.image} />
                                </Link>
                            </>
                        )
                    })
                }
                <Outlet/>
            </div>
        </>
    )
}


export default AllProducts