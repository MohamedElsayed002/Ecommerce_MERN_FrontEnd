import axios from "axios"
import { Form ,  useLoaderData , redirect , useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const action = async ({request,params}) => {
    const {id} = params
    const formData = await request.formData()

    try {
        let info = await axios.patch(`/api/v1/auth/update-user/${id}` , formData)
        console.log(info)
        return redirect('/user/admin')
    }catch(error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}

export const loader = async ({params}) => {
    const {id} = params
    try {
        let {data} = await axios(`/api/v1/users/${id}`)
        return {data : data.data}
    }catch(error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}


const UserAdmin = () => {

    const {data} = useLoaderData()
    if(!data[0].avatar) {
        data[0].avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    }

    const navigation = useNavigate()

    const handleDeleteButton = async  (id) => {
        try {
            let data = await axios.delete(`/api/v1/users/${id}`)
            navigation('/user/admin')
            toast.success('product deleted successfully')
        }catch(error) {
            toast.error(error?.response?.data?.msg)
            console.log(error)
        }
    }

    return (
        <section className="w-4/5 mx-auto"> 
        <h1 className="text-2xl">{data.title}</h1>
        <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2">
            <div>
                <img src={data[0].avatar} alt={data[0].name} className="rounded-full" />
            </div>
            <div>
                <h1 className="text-3xl">User Information</h1>
                <Form method="POST">
                    <div className="input-group-vertical my-4">
                        <label htmlFor="name" className="label">Name</label>
                        <input readOnly id="name" name="name" type="text" className="input input-bordered w-full" defaultValue={data[0].name} />
                    </div>
                    <div className="input-group-vertical my-4">
                        <label htmlFor="email" className="label">E-mail</label>
                        <input readOnly id="email" name="email" type="email" className="input input-bordered w-full" defaultValue={data[0].email} />
                    </div>
                    <div className="input-group-vertical my-4">
                        <label htmlFor="role" className="label">Role</label>
                        <input readOnly name="role" id="role"  type="text" className="input input-bordered w-full" defaultValue={data[0].role} />
                    </div>
                    <div className="flex gap-2">
                        <button disabled type="submit" className="btn btn-secondary text-white w-1/2">Update</button>
                        <button onClick={() => handleDeleteButton(data[0]._id)}  className="btn w-1/2 btn-warning">Delete</button>
                    </div>
                </Form>
            </div>
        </div>
    </section>
    )
}


export default UserAdmin