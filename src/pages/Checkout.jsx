import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react'
import axios from 'axios'
import { Form, redirect, useLoaderData } from 'react-router-dom';
import Lottie from 'lottie-react'
import animationData from '../assets/transaction.json'
import { toast } from 'react-toastify';

export const loader = async () => {
    try {
        const data = await axios.get('/api/v1/cart')
        return data
    } catch (error) {
        return error
    }
}

export const action = async ({ request, params }) => {
    const { id } = params
    const formData = await request.formData()
    const data = Object.fromEntries(formData)


    try {
        const info = await axios.post(`/api/v1/orders/${id}` , {
            shippingAddress : {
                street : data.street,
                city : data.city,
                phone : data.phone
            }
        })
        toast.success('order completed successfully')
        return redirect('/')
    }catch(error) {
        console.log(error)
        toast.error(error.response.data.msg)
        return error
    }



    return null
}



const CheckOut = () => {

    const [isExploding, setIsExploding] = useState(false);
    const { data } = useLoaderData()
    const { cartItems, totalPrice , cartId } = data
    console.log(cartId , 'cartID')

    return (
        <section className="w-4/5 mx-auto min-h-screen">
            {isExploding && <div className="text-center"><ConfettiExplosion/></div>}
            <h1 className="text-4xl my-3">Place Your Order</h1>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                <div className="my-10 text-2xl">
                    <h1>Shipping Information</h1>
                    <Form method='post' className="my-4">
                        <div className="input-group-vertical">
                            <label htmlFor='street' className="label text-xl">Street</label>
                            <input id="street" name="street" type="text" className="input input-bordered w-[100%]" required />
                        </div>
                        <div className="input-group-vertical my-2">
                            <label htmlFor='city' className="label text-xl">City</label>
                            <input id="city" name="city" type="text" className="input input-bordered w-[100%]" required />
                        </div>
                        <div className="input-group-vertical my-2">
                            <label htmlFor='phone' className="label text-xl">Phone Number</label>
                            <input id="phone" type="number" name="phone" className="input input-bordered w-[100%]" required />
                        </div>
                        <div className="my-5">
                            <button onClick={() => setIsExploding(!isExploding)} type="submit" className="capitalize btn bg-orange-500 w-[100%] ">Place your order</button>
                        </div>
                    </Form>
                </div>
                <div className="p-10">
                    <h1 className="text-2xl">Total Price {totalPrice}</h1>
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </section>
    )
}

export default CheckOut