import axios from 'axios'
import { Form, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

export const action  = async ({request}) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
        let info = await axios.post('/api/v1/contact-us' , data)
        toast.success('message sended will respond shortly')
        return redirect('/')
    }catch(error) {
        console.log(error)
        return error
    }
}
{/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}


const ContactPage = () => {
    return (
        <section className="w-4/5 mx-auto">
            <h1 className="text-center text-4xl text-orange-500">Contact Us</h1>
            <Form method='post'>
                <div className="my-5">
                    <label className="text-3xl block mb-2 text-white">Name</label>
                    <input
                        type="text"
                        placeholder="your name"
                        // className="py-2 pl-2 pr-10 w-[90%]"
                        className="input input-bordered  w-[90%]"
                        autoFocus={true}
                        name="name"
                    />
                </div>
                <div className="my-5">
                    <label className="text-3xl block mb-2 text-white">Email</label>
                    <input
                        type="email"
                        placeholder="enter your email address"
                        className="input input-bordered w-[90%]"
                        autoFocus={true}
                        name="email"
                    />
                </div>
                <div className="mt-5">
                    <label htmlFor='comment' className="text-3xl block mb-2 text-white">Comment</label>
                    <textarea id="comment" name="comment"  rows={10} className="resize-none w-[90%] p-3 textarea textarea-bordered" placeholder='your comment '>
                    </textarea>
                </div>
                <div className="mb-5">
                        <button className="btn py-2 px-6 bg-orange-500 rounded-md mt-4 text-white hover:bg-orange-300" type="submit">Submit</button>
                    </div>
            </Form>
        </section>
    )
}

export default ContactPage