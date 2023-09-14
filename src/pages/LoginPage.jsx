

import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'
import { useAppContext } from '../context/context';
import { useNavigate } from 'react-router-dom';



const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const {setLoggedIn , loggedIn , LoginUser ,LoadingLogin} = useAppContext()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        LoginUser(data)
    }

    if(loggedIn) {
        setTimeout(() => {
            navigate('/')
            setLoggedIn(false)
        },3000)
    }

    return (
        <div className="h-screen grid place-items-center">
            <div className="max-w-500px]">
                <h1 className="text-5xl  text-bold text-center py-10 text-orange-500">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col">
                    <div className="my-5">
                        <label className="text-3xl block mb-2">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            placeholder="enter your email address"
                            className="py-2 pl-2 pr-10 w-[100%] input input-bordered" 
                            autoFocus={true}
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
                        <label className="text-3xl block mb-2 ">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            placeholder="enter password"
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
                    <div className="flex gap-2">
                        <button className="btn py-2 px-6 bg-orange-500 rounded-md mt-4 text-white hover:opacity-70" type="submit" disabled={LoadingLogin}>
                            {LoadingLogin ? <span className="loading loading-spinner"></span> : 'login'}
                        </button>
                        <p className='mt-4'>doesn't have account? <Link className="underline text-blue-600" to="/register">register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage


