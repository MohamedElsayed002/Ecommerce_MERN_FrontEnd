
import { useLoaderData , useLocation , useNavigate } from "react-router-dom"


const Paginate = () => {

    const {numOfPages , page , totalProducts , pageSize} = useLoaderData()
    const pages = Array.from({length : numOfPages} , (_ , index) => {
        return index + 1
    })

    const {search,pathname} = useLocation()
    const navigate = useNavigate()


    const handlePageChange = (pageNumber) => {
        const searchParams = new URLSearchParams(search)
        searchParams.set('page',pageNumber)
        navigate(`${pathname}?${searchParams.toString()}`)
    }

    return (
        <>
        <div className="mt-16 flex justify-end w-4/5 mx-auto mb-20">
            <div className="join">
                <button className="btn btn-xs sm:btn-md join-item" onClick={() =>  {
                    let prevPage = page - 1
                    if(prevPage < 1) prevPage = numOfPages
                    handlePageChange(prevPage)
                }}>
                    Prev
                </button>
                {
                    pages.map((pageNumber) => {
                        return <button 
                                        key={pageNumber} 
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber === page ? 'bg-base-300 border-base-300' : ''}`}
                                >{pageNumber}</button>
                    })
                }
                <button className="btn btn-xs sm:btn-md join-item" onClick={() => {
                    
                    let nextPage = page + 1
                    if(nextPage > numOfPages) nextPage =1
                    handlePageChange(nextPage)

                }}>
                    Next
                </button>
            </div>
        </div>
        </>
    )
}

export default Paginate