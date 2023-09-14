


import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import SingleProducts from '../components/SingleProducts'
import Search from '../components/Search'
import Paginate from '../components/Paginate'


export const loader = async ({request}) => {
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])
    try {
      const {data} = await axios.get('/api/v1/products' , {
        params
      })
      return {result : data.products , params , numOfPages : data.numOfPages , page : data.page , totalProducts : data.totalProducts , pageSize : 10 }
    }catch(error) {
        console.log(error)
        return error
    }
}





const Products = () => {

    const {result , totalProducts} = useLoaderData()
    if(!result) {
        return <h1>No Products to fetch </h1>
    }
    return (
        <>
        <Search/>
        <h1 className="w-4/5 mx-auto mt-5 text-5xl">Total Products {totalProducts}</h1>
        <div className="w-4/5 mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 my-10">
            
        {
                result.map((item) => {
                    return <SingleProducts key={item._id} {...item} />
                })
        }
        {result.length === 0 && <h1 className="text-center">No Products available</h1>}
        </div>
        <Paginate/>
        </>
    )
}

export default Products