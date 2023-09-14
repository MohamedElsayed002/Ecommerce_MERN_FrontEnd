import { dataCategory } from "../data"
import SingleCategory from "./SingleCategory"





const TopCategories = ({categories}) => {

    return (
        <div className="w-4/5 mx-auto">
        <h1 className="text-4xl ml-5  my-10 text-orange-500">Top Categories</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  ">
            {
                categories.map((item) => {
                    return (
                        <SingleCategory key={item._id} id={item._id} image={item.image} text={item.name} />
                    )
                })
            }
        </div>
        </div>
    )
}

export default TopCategories