


import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/animation_ll889o9l.json'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="w-4/5 mx-auto mt-10">
            <div className="">
                <h1>Logo</h1>
            </div>
            <div className=" mt-20 flex sm:flex-col md:flex-row lg:flex-row">
                <div className='md:my-20'>
                    <h1 className="text-6xl">Mohamed Elsayed</h1>
                    <p className="text-sm text-gray-500 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                        eveniet minima expedita minus! Accusamus consectetur harum libero molestiae
                        eaque quas placeat soluta nihil voluptate reiciendis doloribus enim ut, minima fugit.
                    </p>
                    <Link to="/login" className="bg-orange-300 text-white px-10 py-2 rounded-md hover:opacity-70 inline-block mt-2">Login/Register</Link>
                </div>
                <div className="">
                    <Lottie animationData={animationData} />
                </div>
            </div>
        </div>
    )
}


export default LandingPage