import React from 'react'
import { useSelector } from 'react-redux'
import { Image, Button } from 'react-bootstrap'
import FormatPrice from '../helpers/FormatPrice'
import { useNavigate } from 'react-router-dom'

const ListView = () => {
    const navigate = useNavigate()
    // const { products } = useSelector((state) => state.User_Register);
    const { filter_products } = useSelector((state) => state.User_Register);



  return <> 
   <div style= {{minHeight:"70vh"}} className=" product_div d-flex flex-wrap mt-2 mb-5 justify-content-center">
  {filter_products.map((value) => {
    return ( <div className="right_product_container d-flex mx-2 my-3">
      <div className="image_side w-50 d-flex align-items-center justify-content-center mx-4">
      <Image fluid style={{ height: '150px', width: "150px" }} className=' mb-2 abs'src= {value.images[0]} ></Image>
      </div>
      <div className="content_side w-50 py-4">
      <p className='mx-2'>{value.title}</p>
      <p className='mx-2'>{<FormatPrice price ={value.price}/>}₹</p>
      <p> {value.description.slice(0, 140)}..... </p>
      <Button onClick={()=> { navigate(`/singleproduct/${value.id}`)}} className='bg-warning' > Read More </Button>
      </div>
    </div>
    )
  })}
  </div >
  
  </>
}

export default ListView