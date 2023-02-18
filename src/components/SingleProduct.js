import React, { useEffect, useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetDataById } from '../redux/action'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { TbTruckDelivery } from 'react-icons/tb'
import { TbReplace } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'

import PageNavigation from './PageNavigation'
import FormatPrice from '../helpers/FormatPrice'
import ProductImage from './ProductImage'
import Star from './Star'
import AddToCart from './AddToCart'
import { toast } from 'react-toastify';
import { AddToCartSuccess } from '../redux/action'


const SingleProduct = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.User_Register);
  // console.log("🚀 ~ file: SingleProduct.js:26 ~ SingleProduct ~ singleProduct", singleProduct)
  // const { logInUser } = useSelector((state) => state.User_Register);
  const { _id: alias, title, company, price, description, categories, stock, brand, stars, rating, images, thumbnail } = singleProduct;
  // const [loading, setLoading] = useState(true)
  // console.log(stock,"bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbsingleProductdfdfdf")
  

  useEffect(() => {
    dispatch(GetDataById(id))
    // return setLoading(false)
  }, [id])
  


  // console.log("🚀 ~ file: SingleProduct.js ~ line 38 ~ SingleProduct ~ alias", alias)
  // const { _id: idd } = logInUser;

  // const handleAddToCart = () => {
  //   dispatch(AddToCartSuccess(idd,alias, price,title))
  //  }



  const handleAddToCart = (cartItem) => {
    console.log(cartItem,"cart details")
    dispatch({ type: "AddToCart", payload:cartItem})
    // dispatch(AddToCartSuccess(alias, price,title))
   }



// const addToCart = (alias,images,stock,price) => {
// dispatch({type:"ADD_TO_CART", payload:{alias,images,stock,price}})
// }


  return  <>
    <Navbaar />
    <div className="singleProduct">
    <PageNavigation title={title} />
    <Container className='my-5 d-flex justify-content-center align-items-center'> 
      <div className="product_image d-flex" style={{ marginRight: "150px" }}>
     {/* <ProductImage idd ={alias} /> */}
   {!images ? "No images" : <img className='singleProductImage' src={images[0]} alt="" />  }
    {/* <img className='singleProductImage' src={thumbnail} alt="" /> */}
      </div>
      <div className="product_data w-50">
        <h2>{title}</h2>
        <h2>{brand}</h2>
        <h2>{stock}</h2>
        <Star stars = {rating} reviews = {rating} />
        <p className="product_price">MRP:
          <del>
            <FormatPrice price={price * 2} />
          </del>
        </p>
        <p className='product_data_price'>
          Deal of the Day: <FormatPrice price={price * 1} />
        </p>
        <p>{description}</p>
        <div className="product_data_warranty ">
          <div className="warranty_garranty d-flex four_four">
            <div className="div d-flex flex-column mx-2">
            <div style={{ borderRadius: "50%", backgroundColor: "grey",marginLeft:"2.5rem" }} className="four_div_product w-25 d-flex justify-content-center align-items-center">
              <TbTruckDelivery style={{ width: "40px", height: "40px" }} />
            </div>
              <p style={{fontSize:"20px"}} className='d-inline'>Free Delivery</p>
              </div>
              <div className="div d-flex flex-column mx-2">
            <div style={{ borderRadius: "50%", backgroundColor: "grey",marginLeft:"4.5rem" }} className="four_div_product w-25 d-flex justify-content-center align-items-center">
              <TbReplace style={{ width: "40px", height: "40px" }} />
            </div>
            <p style={{fontSize:"20px"}} className='d-inline'>30 Days Replacement</p>
            </div>
            <div className="div d-flex flex-column mx-2">
            <div style={{ borderRadius: "50%", backgroundColor: "grey",marginLeft:"2.5rem" }} className="four_div_product w-25 d-flex justify-content-center align-items-center">
              <TbTruckDelivery style={{ width: "40px", height: "40px" }} />
            </div>
            <p style={{fontSize:"20px"}} className='d-inline'>Fast Delivery</p>
            </div>
            <div className="div d-flex flex-column mx-2">
            <div style={{ borderRadius: "50%", backgroundColor: "grey",marginLeft:"2.5rem" }} className="four_div_product w-25 d-flex justify-content-center align-items-center">
              <MdSecurity style={{ width: "40px", height: "40px" }} />
            </div>
            <p style={{fontSize:"20px"}} className='d-inline'>2 Year Warranty</p>
            </div>
          </div>
          {/* <p>Available: <span> {stock > 0 ? "In Stock" : "Not Available"} </span> </p> */}
          <p>
            ID: <span> {alias}</span>
          </p>
          {/* <button onClick={() => addToCart(alias,images,stock,price)}>Add To Cart</button> */}
          <button onClick={()=>{handleAddToCart(singleProduct)}}>Add To Cart</button>
          {/* <p>
            BRAND: <span> {company}</span>
          </p> */}
          <hr style = {{border:"0.2rem solid black"}}/>
          {/* {stock > 0 && <AddToCart sProduct = {singleProduct}/>} */}
        </div>
      </div>

    </Container>
    </div>
    <Footer />

  </>

}

export default SingleProduct  
