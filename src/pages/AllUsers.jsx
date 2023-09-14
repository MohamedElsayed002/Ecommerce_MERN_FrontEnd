import axios from "axios"
import { Link, useLoaderData } from "react-router-dom"



export const loader = async () => {
    try {
        let data = await axios('/api/v1/users')
        return { data: data.data.data }
    } catch (error) {
        return error
    }
}


const AllUsers = () => {

    const { data } = useLoaderData()

    return (
        <section className="w-4/5 mx-auto">
            <h1 className="text-4xl">All Users {data.length}</h1>
            <div className="grid md:grid-cols-4 gap-4 my-10 sm:grid-cols-2 xs:grid-cols-1 ">
                {
                    data.map((item) => {
                        let { avatar, name, role } = item
                        if (!avatar) {
                            avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
                        }
                        return (
                            <div className="flex flex-col">
                                <Link to={`/user/admin/user/${item._id}`}>
                                    <img src={avatar} className="rounded-full" />
                                </Link>
                                <h1>{name}</h1>
                                <h2>{role}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default AllUsers