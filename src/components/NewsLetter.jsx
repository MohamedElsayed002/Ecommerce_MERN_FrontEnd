


const NewsLetter = () => {
    return (
        <section className="w-4/5 mx-auto grid grid-cols-1  md:grid-cols-2 mb-28 gap-4">
            <div>
                <h1 className="text-3xl  my-4 text-bold ">Join our newsletter and get 20% off</h1>
                <p className="text-sm leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
            </div>
            <div className="my-12 flex ">
                <input placeholder="Enter Email Address" className="input input-bordered w-[100%]" type="text" />
                <button className="btn bg-orange-500 -ml-[8.9em]">Subscribe</button>
            </div>
        </section>
    )
}

export default NewsLetter