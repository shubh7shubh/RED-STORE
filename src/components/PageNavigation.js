import React from 'react'

const PageNavigation = ({totalProducts, postPerPage, currentPage, setCurrentPage}) => {
  let pages = [];
  for(let i = 1; i<= Math.ceil(totalProducts/postPerPage); i++){
    pages.push(i)
  }
  return (
    <div className='pagination'>
      {
        pages.map((page,index) => {
          return <button 
          key={index} 
          onClick={() => setCurrentPage(page)}
          className={page == currentPage ? "active" : ""}>
          {page}
          </button>
        })
      }
    </div>
  )
}

export default PageNavigation