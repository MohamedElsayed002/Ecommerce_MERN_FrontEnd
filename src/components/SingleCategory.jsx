import {Link} from 'react-router-dom'



const SingleCategory = ({image,text,id}) => {
    return (
        <div className="flex flex-col items-center    ">
            <Link className="text-center" to={`category/${id}`}>
                <img
                    className="h-40 w-40 rounded-full"
                    src={image}
                />
                <h3>{text}</h3>
            </Link>
        </div>
    )
}


export default SingleCategory