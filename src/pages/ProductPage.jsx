


import React from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import GenerateAmountOptions from '../utils/Generate'
import { useAppContext } from '../context/context'







export const loader = async ({ params }) => {
    const { id } = params
    try {
        const { data } = await axios(`/api/v1/products/${id}`)
        return data
    } catch (error) {
        return error
    }
}




const ProductPage = () => {


    const { result } = useLoaderData()
    const {AddToWishList , AddToCart} = useAppContext()
    const [moreInfo, setMoreInfo] = React.useState(false)



    const handleWishList = (id) => {
        AddToWishList(id)
    }


    const handleCart = (id) => {
        AddToCart(id)
    }

    


    return (
        <section className="w-4/5 mx-auto my-10">
            <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                <img className="md:w-[40%] object-cover rounded-lg lg:w-full  " src={result.image} />
                <div className="mt-10">
                    <h1 className="text-4xl">{result.title}</h1>
                    <h3 className="mt-3"><span className="text-xl">Product ID:</span> {result._id}</h3>
                    <h3 className="mt-3 text-4xl">{result.price} EGY</h3>
                    <h3 className="mt-3"><span className="text-xl">Quantity:</span> {result.quantity}</h3>
                    <p
                        className=" text-sm mt-2 underline cursor-pointer"
                        onClick={() => setMoreInfo(!moreInfo)}
                    >
                        {moreInfo ? 'show less' : 'more info'}
                    </p>
                    {
                        moreInfo && (
                            <div className="my-5 leading-8">
                                <h1 className="text-2xl">Sold: {result.sold}</h1>
                                <h1 className="text-2xl">Description:</h1>
                                <p>{result.description}</p>
                                <h1 className="text-2xl">Rating: {result.ratingAverage}</h1>
                            </div>
                        )
                    }
                    <div>
                        <select
                            className="select select-secondary select-bordered select-md my-2"
                            id="quantity"
                            name="quantity"
                            // value={amount}
                            
                        >
                            {GenerateAmountOptions(result.quantity)}
                        </select>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={() => handleCart(result._id)} className="py-2 px-4 btn btn-primary text-white my-5">Add to Cart</button>
                        <button onClick={() => handleWishList(result._id)} className="py-2 px-4 btn bg-secondary text-white my-5">Add to WishList</button>
                    </div>
                    <div>
                        {/* <h1 className="text-3xl text-orange-500">Comments</h1>
                        {result.myReviews.map((review) => {
                        return (
                            <div className="border p-4 mt-5">
                                <h1>User id: <span>{review.user}</span></h1>
                                <h1>Comment: <span>{review.comment}</span></h1>
                                <h1>Rating User: <span>{review.ratings}</span></h1>
                            </div>
                        )
                    })}  */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage