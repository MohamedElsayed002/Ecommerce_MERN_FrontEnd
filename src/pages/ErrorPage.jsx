
import { Link , useRouteError } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from '../assets/error.json'


const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)

    return (
        <div className="text-center">
            <Lottie className="w-[70%] mx-auto md:w-[40%]" animationData={animationData} />
            <div className="-mt-20">
                <h1 className="text-2xl text-white">Ohh! Page not found</h1>
                <p className="text-sm text-gray">we can't seem to find the page you are looking for</p>
                <Link className="bg-orange-500 py-2 px-4 text-white inline-block mt-4 rounded-md" to="/">Back Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage