
import {useParams} from 'react-router-dom'
import {useMutation} from '@tanstack/react-query'
import axios from 'axios'
import { useEffect , useState } from 'react'
import SingleProducts from '../components/SingleProducts'
import Loading from '../components/Loading'


const CategoryPage = () => {
    const [products,setProducts] = useState([])
    const {id} = useParams()
    const {mutate : Products , isError , isLoading} = useMutation({
        mutationFn : () => {
            return axios.get(`/api/v1/category/${id}/products`)
        },
        onSuccess : (data) => {
            setProducts(data.data.products)
        }
    })

    useEffect(() => {
        Products()
    },[id])

    if(isLoading) {
        return <Loading/>
    }

    if(isError) {
        return <h1 className="h-[250px] flex justify-center align-middle text-center text-5xl">Error...</h1>
    }



    return (
        <>
         <div className="w-4/5 mx-auto flex gap-2 flex-wrap my-10 ">
            {products.map((item) => <SingleProducts key={item._id} {...item} />)}
            {products.length === 0 &&  <h1 className="h-[250px] flex justify-center align-middle text-center text-5xl">No Products to show</h1>}
         </div>
        </>
    )
}


export default CategoryPage