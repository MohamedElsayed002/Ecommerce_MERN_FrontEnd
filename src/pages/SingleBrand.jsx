
import { useParams } from "react-router-dom"
import axios from 'axios'
import {useState , useEffect} from 'react'
const SingleBrand = () => {

    const {id} = useParams()

    const [brand,setBrand] = useState([])
    const [loading,setLoading] = useState(false)

    const SingleBrand = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(`/api/v1/brands/${id}`)
            setBrand(data)
            setLoading(false)
        }catch(error) { 
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        SingleBrand()
    },[id])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <section className="w-4/5 mx-auto my-10">
            <div className="md:flex md:gap-10">
            <img className="w-[90%] md:w-[55%] mb-5 " src={brand?.result?.logo} alt={brand?.result?.name} />
            <div>
                <h1 className="text-2xl ">Brand Id : {brand?.result?._id}</h1>
                <h1 className="text-xl">Brand Name : {brand?.result?.name}</h1>
            </div>
            </div>
        </section>
        </>
    )
}

export default SingleBrand