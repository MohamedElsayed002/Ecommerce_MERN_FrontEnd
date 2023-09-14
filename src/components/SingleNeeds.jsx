

const SingleNeeds = ({ image,price,title }) => {
    return (
        <>
            <div className="carousel-item text-center w-[200px] flex flex-col mr-5  ">
                <img src={image} alt="Burger" />
                <div className="flex justify-between my-2">
                    <h1>{title.slice(0,10)}..</h1>
                    <h1>{price}</h1>
                </div>
            </div>
        </>
    )
}

export default SingleNeeds