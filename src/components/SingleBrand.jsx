
import {Link} from 'react-router-dom'



const SingleBrand = ({name,logo,id}) => {
    return (
        <>
            <div className="my-2">
                <Link to={`./${id}`}>
                <img width="250px" className="rounded-xl" src={logo} alt={name} />
                </Link>
            </div>
        </>
    )
}

export default SingleBrand