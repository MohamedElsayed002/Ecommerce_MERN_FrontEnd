
import React , {useState} from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'

export const loader = async () => {
    try {
        const data = await axios.get('/api/v1/cart')
        return data
    } catch (error) {
        toast.error(error?.response?.data?.msg)
        return error
    }
}







const CartPage = () => {
    const { data } = useLoaderData()
    if(!data) return <h1 className="text-4xl text-center my-10 h-32">No Products in Cart</h1>
    const { cartItems, totalPrice , cartId } = data

    const [cart, setCart] = useState(cartItems || [])
    const [totalPri, setTotalPrice] = useState(totalPrice || 0)


    const handleRemove = async (id) => {


        try {
            let data = await axios.patch(`/api/v1/cart/${id}`)
            setCart(data.data.cartItems)
            setTotalPrice(data.data.totalPrice)
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <section className="w-4/5 mx-auto min-h-screen">
            <h1 className="text-3xl text-bold my-3">Shopping Cart</h1>
            <hr className="text-black" />
            <div className="grid">
                <div className="">
                    {
                        cart?.map((item) => {
                            return (
                                <div key={item._id} className="my-4 flex md:justify-around md:flex-row sm:flex-col xs:flex-col">
                                    <img src={item.product.image} className="w-48 h-48 object-cover" alt={item.product.title} />
                                    <div className="">
                                        {item.product.title.slice(0, 20)}..
                                    </div>
                                    <div>
                                        <h1>Amount</h1>
                                        <h2 className=" bg-orange-500 w-12 h-12 grid place-items-center my-2   rounded-md ">{item.quantity}</h2>
                                        <p onClick={() => handleRemove(item._id)} className="underline text-sm cursor-pointer">Remove</p>
                                    </div>
                                    <div>{item.product.price} EGY</div>
                                </div>
                            )
                        })
                    }
                    {
                        cart.length === 0 && <h1 className="text-4xl text-center my-10">No Products in Cart</h1>
                    }
                </div>
                {/* <hr className="my-3"/> */}
                <div>
                </div>

            </div>
            {
                cart.length !== 0 && (
                    <>
                    <hr/>
                        <div className="flex justify-between items-center ">
                            <h1 className="my-10 text-3xl">Total Price: {totalPri} EGY</h1>
                            <Link to={`/user/check-out/${cartId}`} className="btn bg-orange-500">Check out</Link>
                        </div>
                    </>
                )
            }

        </section>
    )
}

export default CartPage


// {
//     cartItems.map((item) => {
//         console.log(item)

//         return (
//             <>
//                 <h1>{item.quantity}</h1>
//                 <img src={item.product.image}  alt={item.product.title  }/>
//             </>
//         )
//     })
// }