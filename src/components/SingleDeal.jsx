
import { Link } from 'react-router-dom'




const SingleDeal = ({ id, image }) => {
    return (
        <><Link to={`/products/${id}`}>
            <div className="carousel-item w-[300px] mr-5">
                <img src={image} alt="Burger"  loading='lazy' />
            </div>
        </Link>
        </>
    )
}


export default SingleDeal