import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Image,} from 'react-bootstrap'
import FormatPrice from '../helpers/FormatPrice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import PageNavigation from './PageNavigation'



const GridView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { products } = useSelector((state) => state.User_Register);
    let { filter_products } = useSelector((state) => state.User_Register);
    const [currentPage, setCurrentPage] =useState(1);
    const [postPerPage, setPostPerPage] =useState(8);

   const lastPostIndex = currentPage * postPerPage;
   const firstPostIndex = lastPostIndex - postPerPage;

   const totalProducts = [...filter_products].length;

   filter_products = filter_products.slice(firstPostIndex,lastPostIndex)



  return <>
  <div style= {{minHeight:"70vh"}} className=" product_div d-flex flex-wrap mt-2 mb-5 justify-content-center">
  {filter_products.map((value) => {
    return (
  <div key={value.id} style={{ width: "200px"}} className="card_box mx-4  my-3 d-flex justify-content-center align-items-center flex-column  ">
    <div className="item_image">
    <Image onClick={()=> { navigate(`/singleproduct/${value._id}`)}} fluid style={{ height: '150px', width: "150px" }} className=' mb-2 abs'src= {value.images[0]} ></Image>
    </div>
   
    <div style={{width: "150px", fontSize: "0.8rem",color:"black"}} className="info d-flex flex-column justify-content-center align-items-center">
      <p className='my-1'>{value.title}</p>
      <p className=''>{<FormatPrice price ={value.price}/>}</p>
    </div>
  </div>
    )
  })}

  </div >
  <div className="pagination">
  <PageNavigation totalProducts = {totalProducts} postPerPage={postPerPage} currentPage ={currentPage} setCurrentPage={setCurrentPage}/>
  </div>

  
  
  </>
}

export default GridView