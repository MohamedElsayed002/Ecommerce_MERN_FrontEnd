

import { useForm } from 'react-hook-form'
import {Link }  from 'react-router-dom'
import { useAppContext } from '../context/context';
import { useNavigate } from "react-router-dom";
// SubmitHandler

// export const action = async  ({request}) => {
//     const formData = await request.formData()
//     const data = Object.fromEntries(formData)
//     console.log(data)
//     return null
// }


const RegisterPage= () => {
    
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {RegisterUser  ,LoadingRegister , setRegistered , registered } = useAppContext()

    const onSubmit = (data) => {
        RegisterUser(data)
    }


    if(registered) {
        setTimeout(() => {
            setRegistered(false)
            navigate('/login')
        },3000)
    }




    return (
        <div className="h-screen grid place-items-center">
            <div className="max-w-500px]">
                <h1 className="text-5xl text-center text-bold py-5 text-orange-500">Register</h1>
                <form method='post' onSubmit={handleSubmit(onSubmit)} className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col">
                <div className="my-5">
                        <label className="text-3xl block mb-2">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            placeholder="enter your name"
                            className="py-2 pl-2 pr-10 w-[100%] input input-bordered" 
                            autoFocus={true}
                            {...register("name", {
                                required: true,
                                minLength : 2
                            })}
                        />
                        {errors.name && <span className="block text-red-500">your name is required</span>}
                    </div>
                    <div className="my-5">
                        <label className="text-3xl block mb-2">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="enter your email address"
                            className="py-2 pl-2 pr-10 w-[100%] input input-bordered" 
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <span className="block text-red-500">{errors.email.message}</span>}
                    </div>
                    <div className="my-5">
                        <label className="text-3xl block mb-2">Phone</label>
                        <input
                            type="number"
                            placeholder="enter your phone number"
                            className="py-2 pl-2 pr-10 w-[100%] input input-bordered" 
                            {...register("phone", {
                            })}
                        />
                    </div>
                    <div className="my-5">
                        <label className="text-3xl block mb-2">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="password"
                            className="py-2 pl-2 pr-10 w-[100%] input input-bordered" 
                            {...register('password', {
                                required: true,
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message:
                                        'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number'
                                }
                            })}
                        />
                        {errors.password && <span className="block text-red-500">{errors.password.message}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="btn py-2 px-6 bg-orange-500 rounded-md mt-4 text-white hover:opacity-70" type="submit" disabled={LoadingRegister}>
                            {
                                LoadingRegister ? <span className="loading loading-dots"></span> : 'register'
                            }
                        </button>
                        <p className="pt-5">Already has account?</p> <Link className="pt-4 underline text-blue-600" to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage