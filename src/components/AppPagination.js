import React, {useState}from 'react'
import Pagination from 'react-mui-pagination';


const AppPagination = () => {
    const [page, setMyPage] = useState(1);
    const setPage = (e, p) => {
        setMyPage(p);
    }
    
    return (
        <>
            <div style={{border:"2px solid red"}} className="appPagination text-center">
            <Pagination page={page} setPage={setPage} total={100} />
            </div>
        </>
    )
}

export default AppPagination