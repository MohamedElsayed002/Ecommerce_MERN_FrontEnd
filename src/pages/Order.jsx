import axios from "axios"
import { useLoaderData } from "react-router-dom"



export const loader = async () => {
    try {
        const { data } = await axios('/api/v1/orders/all-orders')
        return { data: data.order }
    } catch (error) {
        return error
    }
}


const Order = () => {

    const { data } = useLoaderData()

    return (
        <div className="overflow-x-auto my-10">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                {
                    data.map((item, index) => {
                        let name = item?.user?.name
                        if (!name) {
                            name = 'deleted account'
                        }
                        return (
                            <>
                                <tbody key={index}>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{name}</td>
                                        <td> {item?.shippingAddress?.street} {item?.shippingAddress?.city}</td>
                                        <td>{item?.totalOrderPrice} EGY</td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </div>
    )
}


export default Order