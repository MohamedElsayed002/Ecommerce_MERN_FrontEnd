import { useAppContext } from "../context/context"
import { NavLink, Outlet } from "react-router-dom"


const Admin = () => {

    const { user } = useAppContext()
    return (
        <section className="w-4/5 mx-auto text-center min-h-screen">
            <h1 className="text-4xl">Hello  {user?.data?.user?.name} 👋 </h1>
            <div className="bg-orange-500 rounded-lg my-5 flex flex-wrap justify-center gap-5 p-3 items-center text-white">
                <NavLink to=".">Users</NavLink>
                <NavLink to="all-products">Products</NavLink>
                <NavLink to="add-products">Add Products</NavLink>
                <NavLink to="orders">Orders</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </section>
    )
}


export default Admin