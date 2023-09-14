import SingleNeeds from "./SingleNeeds"
import { dealsMadeForU } from "../data"
import {useState,useEffect} from 'react'
import axios from "axios"



const SaveMoreOnYourNeeds = () => {


    const [deals,setDeals] = useState([])

    useEffect(() => {
        const Deals = async () => {
            try {
                const {data} = await axios.get('/api/v1/products?page=3')
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
    console.log('price',deals)

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-4xl ml-5 text-orange-500  my-10">Prices Never Before</h1>
            <div>
                <div className=" carousel rounded-box mx-auto w-[100%] h-[400px] md:w-full">
                    {
                        deals.map((item) => {
                            return <SingleNeeds key={item.id} image={item.image} title={item.title} price={item.price}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default SaveMoreOnYourNeeds