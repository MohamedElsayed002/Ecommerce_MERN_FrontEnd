

import axios from 'axios'
import { Form, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'


export const action = async ({ request }) => {
    const formData = await request.formData()
    const file = formData.get('avatar')
    if (file && file.size > 500000) {
        toast.error('image size too large ')
        return null
    }

    try {
        let info = await axios.post('/api/v1/products' , formData)
        toast.success('product added')
        return info
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}


const AddProducts = () => {

    const data = useLoaderData()

    return (
        <section className="w-4/5 mx-auto">
            <h1>Add Products</h1>
            <Form method='POST' className=" my-10" encType="multipart/form-data" >
                <div>
                    <label htmlFor='title' className="label">Title</label>
                    <input required id="title" name="title" type="text" className="input input-bordered w-full" placeholder="product title" />
                </div>
                <div className="my-2">
                    <label htmlFor='description' className="label">Description</label>
                    <input required id="description" name="description" type="text" className="input input-bordered w-full" placeholder="product description" />
                </div>
                <div className="flex my-2 input-group">
                    <div className="flex flex-col w-1/3">
                        <label className="label" htmlFor='price'>Price</label>
                        <input required type="number" id="price" name="price" className=" input input-bordered" placeholder="product price" />
                    </div>
                    <div className="flex flex-col w-1/3">
                        <label className="label" htmlFor='quantity'>Quantity</label>
                        <input required type="number" id="quantity" name="quantity" className=" input input-bordered" placeholder="product quantity" />
                    </div>
                    <div className="flex flex-col w-1/3">
                        <label className="label" htmlFor='sold'>Sold</label>
                        <input required type="number" id="sold" name="sold" className=" input input-bordered" placeholder="product sold" />
                    </div>
                </div>
                <div className="input-group-vertical">
                    <label className="label" htmlFor='category'>Category ID</label>
                    <input required type="text" id="category" name="category" className=" input input-bordered w-full" placeholder="product sold" />
                </div>
                <div>
                    <label className="label mt-2">Product Image</label>
                    <input
                        required
                        type="file"
                        name="image"
                        accept='image/*'
                        className="input flex mt-4"
                    />
                </div>
                <div className="my-4">
                    <button type="submit" className="bg-orange-500 w-full text-white p-2 rounded-md">Create</button>
                </div>
            </Form>
        </section>
    )
}


export default AddProducts