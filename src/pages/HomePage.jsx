import Carousel from "../components/Carousel"
import DealsMadeForU from "../components/DealsMadeForU"
import SaveMoreOnYourNeeds from "../components/SaveMoreOnYourNeeds"
import TopCategories from "../components/TopCategories"
import axios from 'axios'
import { useLoaderData  } from "react-router-dom"
import Hero from '../components/Hero'
import NewsLetter from "../components/NewsLetter"


export const loader = async () => {
    try {
        const {data} = await axios.get('/api/v1/category')
        return data
    }catch(error) {
        return error
    }
}


const HomePage = () => {
    const {categories} = useLoaderData()



    return (
        <div className="min-w-[350px]">
            <Hero/>
            <Carousel/>
            <TopCategories categories={categories}/>
            <DealsMadeForU/>
            <SaveMoreOnYourNeeds/>
            <NewsLetter/>
        </div>
    )
}


export default HomePage