
import {Form,Link , useLoaderData} from 'react-router-dom'



const Search = () => {

    const {params} = useLoaderData()

    return (
        <section className="text-center flex justify-center gap-2">
            <Form className="bg-base-200  rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2
                            md:grid-cols-2 lg:grid-cols-2 items-center">
            <div className="form-control">
                <label className="label">Search Product</label>
                <input className="input input-bordered mr-2" name="search" id="search" placeholder="search" defaultValue={params.search}/>
            </div>
            <div className="form-control">
                <label htmlFor='sort' className="label">
                    <span className='label-text capitalize'>Sort by</span>
                </label>
                <select name='sort' id='sort' className="select select-bordered" defaultValue={params.sort}>
                    <option value="all">all</option>
                    <option value='a-z'>a-z</option>
                    <option value='z-a'>z-a</option>
                    <option value='high'>high</option>
                    <option value='low'>low</option>
                </select>
            </div>
            <button type="submit" className="btn bg-orange-500">search</button>
            <Link to="/products" className="btn-accent btn">Reset</Link>
            </Form>
        </section>
    )
}

export default Search