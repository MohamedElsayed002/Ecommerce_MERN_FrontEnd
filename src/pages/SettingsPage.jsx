
import { useLoaderData, Form , redirect , useNavigation} from 'react-router-dom'
import customFetch from "../utils/customFetch"
import Lottie from 'lottie-react'
import animationData from '../assets/user.json'
import { toast } from 'react-toastify'


export const action = async ({ request }) => {
    const formData = await request.formData()
    const file = formData.get('avatar')
    if (file && file.size > 500000) {
        toast.error('image size too large ')
        return null
    }

    try {
        await customFetch.patch('/users/update-user', formData)
        toast.success('profile updated successfully')
        return redirect('/user/settings')
    } catch (error) {
        toast.error('failed to updated user')
        return error
    }
}

export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/getCurrent')
        return data
    } catch (error) {
        console.log(error)
        return null
    }
}





const SettingsPage = () => {

    const { user } = useLoaderData()
    const { name, email, avatar } = user
    const navigation = useNavigation()
    const isSubmitting = navigation.state === 'submitting'


    return (
        <div className="w-4/5 mx-auto pt-10 pb-20">
            <h1 className="text-3xl text-orange-500">Settings</h1>
            <Form method="post" encType="multipart/form-data">
                {
                    avatar ? <img className="w-[30%] mx-auto" src={avatar} alt="profile-photo" />
                        :
                            <Lottie className="w-[30%] mx-auto" animationData={animationData} />

                }
                <label className="block text-2xl my-2 text-orange-500">Email</label>
                <input
                    name="email"
                    value={email}
                    readOnly
                    className="w-[90%] py-2 px-5"
                />
                <label className="block text-2xl my-2 text-orange-500 ">Name</label>
                <input
                    defaultValue={name}
                    className="w-[90%] py-2 px-5"
                    readOnly
                    name="name"
                />
                <label className="block text-2xl my-2 text-orange-500">Avatar</label>
                <input
                    type="file"
                    className="w-[90% py-2 px-5"
                    name="avatar"
                    accept='image/*'
                />
                <button className="block mt-5 bg-orange-500 w-[90%] text-white py-2" type="submit">
                    {isSubmitting ? 'submitting...' : 'submit'}
                </button>
            </Form>
        </div>
    )
}


export default SettingsPage