import { dealsMadeForU } from "../data"
import SingleDeal from "./SingleDeal"
import {useState , useEffect} from 'react'
import axios from 'axios'
import Loading from "./Loading"

const DealsMadeForU = () => {

    const [deals,setDeals] = useState([])

    useEffect(() => {
        const Deals = async () => {
            try {
                const {data} = await axios.get('/api/v1/products')
                setDeals(data.products)
            }catch(error) {
                console.log(error)
            }
        }
        Deals()
    },[])

    if(!deals) {
        return <h1>Loading..</h1>
    }

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl ml-5 text-orange-500  my-10">Deals made for you</h1>
            <div>
                <div className="carousel rounded-box w-[100%]  h-[300px] md:w-full">
                    {
                        deals.map((item) => {
                            return (
                                <SingleDeal  key={item._id} id={item._id} image={item.image} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default DealsMadeForU