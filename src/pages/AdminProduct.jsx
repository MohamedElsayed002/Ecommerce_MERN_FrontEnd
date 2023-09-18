import axios from "axios"
import { redirect, useLoaderData , useNavigate } from "react-router-dom"


import {Form} from 'react-router-dom'
import { toast } from "react-toastify"

export const action = async  ({request,params}) => {
    const {id} = params
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        const info = await axios.patch(`/api/v1/products/${id}` , data)
        return redirect('/user/admin/all-products')
    }catch(error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}


export const loader = async ({params}) => {
    const {id} = params

    try {
        const data = await axios(`/api/v1/products/${id}`)
        return {data :data.data.result}
    }catch(error){
        toast.error(error?.response?.data?.msg)
        return error
    }
}


const AdminProduct = () => {

    const  {data} = useLoaderData()
    const navigation = useNavigate()

    const handleDeleteButton = async  (id) => {
        try {
            let data = await axios.delete(`/api/v1/products/${id}`)
            navigation('/user/admin/all-products')
            toast.success('product deleted successfully')
        }catch(error) {
            console.log(error)
        }
    }

    return (
        <section className="w-4/5 mx-auto"> 
            <h1 className="text-2xl">{data.title}</h1>
            <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2">
                <div>
                    <img src={data.image} alt={data.title} className="rounded-xl" />
                </div>
                <div>
                    <h1 className="text-3xl">Product Information</h1>
                    <Form method="POST">
                        <div className="input-group-vertical my-4">
                            <label htmlFor="title" className="label">Title</label>
                            <input id="title" name="title" type="text" className="input input-bordered w-full" defaultValue={data.title} />
                        </div>
                        <div className="input-group-vertical my-4">
                            <label htmlFor="price" className="label">Price</label>
                            <input id="price" name="price" type="number" className="input input-bordered w-full" defaultValue={data.price} />
                        </div>
                        <div className="input-group-vertical my-4">
                            <label htmlFor="quantity" className="label">Quantity</label>
                            <input name="quantity" id="quantity"  type="number" className="input input-bordered w-full" defaultValue={data.quantity} />
                        </div>
                        <div className="flex gap-2">
                            <button type="submit" className="btn btn-secondary text-white w-1/2">Update</button>
                            <button onClick={() => handleDeleteButton(data._id)} className="btn w-1/2 btn-warning">Delete</button>
                        </div>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default AdminProduct