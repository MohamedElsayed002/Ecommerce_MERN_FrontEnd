
import axios from 'axios'
import SingleBrand from '../components/SingleBrand'
import { useLoaderData } from 'react-router-dom'


export const loader = async () => {
    try {
        const {data} = await axios.get('/api/v1/brands')
        return data
    }catch(error) {
        console.log(error)
        return error
    }
}


const Brands = () => {


    const {categories} = useLoaderData()

    return (
        <>
        <div className="w-4/5 mx-auto md:flex md:flex-wrap gap-2 mr-2 md:mr-24 text-center my-10">
            {
                categories.map((item) => {
                    return <SingleBrand key={item._id} id={item._id} logo={item.logo} name={item.name} />
                })
            }
        </div>
        </>
    )
}

export default Brands