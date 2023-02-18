import React, { useEffect } from 'react'
import { Container, Button, Image } from 'react-bootstrap'
import { TbTruckDelivery } from 'react-icons/tb'
import { BiShieldQuarter } from 'react-icons/bi'
import { GiReceiveMoney } from 'react-icons/gi'
import { RiSecurePaymentFill } from 'react-icons/ri'
import "../App.css"
import Navbaar from './Navbaar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GetProducts } from '../redux/action'
import FormatPrice from '../helpers/FormatPrice'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { FaQuoteLeft } from "react-icons/fa"
import Star from './Star'



const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { laptopProducts } = useSelector((state) => state.User_Register);
  const { watchProducts } = useSelector((state) => state.User_Register);
  const { eyewearProducts } = useSelector((state) => state.User_Register);
  const { appleBanner } = useSelector((state) => state.User_Register);
  const { sorting_value } = useSelector((state) => state.User_Register);
  const { filter_products } = useSelector((state) => state.User_Register);
  const { products } = useSelector((state) => state.User_Register);

  useEffect(() => {
    dispatch(GetProducts())
  }, [])


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
  }, [products])



  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbaar />
      {/*---------------------------------- header Category Section--------------------------- */}
      <section>
        <header>
          <Container className='navbar_container'>
            <div className="row">
              <div className="col_2">
                <h1>Give Your Workout <br />A New Style!</h1>
                <p>Success isn't always about greatness. It's about consistency. Consistent <br />hard work gains success. Greatness will come.</p>
                <button onClick={()=> { navigate(`/products`)}} className='explore_btn'>Explore Now &#8594;</button>
              </div>
              <div className="col_2">
                <img src="images/image1.png" alt="" />
              </div>
            </div>
          </Container>
        </header>
      </section>
      {/*---------------------------------- header Category Section--------------------------- */}
      {/*---------------------------------- Feature Category Section--------------------------- */}
      {/* <Container fluid className='bg-light'> */}
      {/* <div className="categories" style={{ border: "2px solid red" }}>
        <div className="small_container">
          <div className="row" >
            <div className="col_3" style={{ border: "2px solid black" }} >
              <img src="images/category-1.jpg" alt="" />
            </div>
            <div className="col_3" >
              <img src="images/category-2.jpg" alt="" />
            </div>
            <div className="col_3" >
              <img src="images/category-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div> */}
      {/* </Container> */}
      {/*---------------------------------- Feature Category Section--------------------------- */}
      {/*---------------------------------- Feature Product Section--------------------------- */}

      <div className="small_container">
        <h2 className='title mb-2 mt-4'>Trending Laptops</h2>
        <div className="row">
          {laptopProducts.map((curElem) => {
            return (<div className="col_4 ">
              <img onClick={()=> { navigate(`/singleproduct/${curElem._id}`)}} src={curElem.images[0]} alt="" />
              <h4>{curElem.title}</h4>
              <div className="rating">
                <Star stars={curElem.rating} reviews={curElem.rating} />
              </div>
              <p>Price-₹{curElem.price}</p>
            </div>)

          })
          }
        </div>
      </div>
      {/*------------------------------------------------------------ offer banner--------------------------------------- */}
      <div className="offer mt-0 mb-4">
        <div className="small_container">
          <div className="row">
            <div className="col_2">
              <img className='offer_img' src="images/exclusive.png" alt="" />
            </div>
            <div className="col_2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>The Mi Smart Band 4 features a 39.9%* wider, full-color AMOLED touch display.
                With 5 adjustable brightness levels up to 400 nits, you can view the screen clearly even in broad daylight.</small>
              <button className='explore_btn'>Buy Now &#8594; </button>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------ offer banner--------------------------------------- */}

      <div className="small_container">
        <h2 className='title mb-2 mt-4'>Trending Watches</h2>
        <div className="row">
          {watchProducts.map((curElem) => {
            return (<div className="col_4 ">
              <img onClick={()=> { navigate(`/singleproduct/${curElem._id}`)}} src={curElem.images[0]} alt="" />
              <h4>{curElem.title}</h4>
              <div className="rating">
                <Star stars={curElem.rating} reviews={curElem.rating} />
              </div>
              <p>Price-₹{curElem.price}</p>
            </div>)
          })}
        </div>
      </div>

      {/*------------------------------------------------------------ offer banner--------------------------------------- */}
      <div className="offer mt-0 mb-4">
        <div className="small_container">
         {appleBanner.map((curElem) => {
          return (<div className="row">
            <div className="col_2">
              <img className='offer_img'  src={curElem.images[0]} alt="" />
            </div>
            <div className="col_2">
              <p>Exclusively Available on RedStore</p>
              <h1>{curElem.title}</h1>
              <small>{curElem.description}</small>
              <button onClick={()=> { navigate(`/singleproduct/${curElem._id}`)}} className='explore_btn'>Buy Now &#8594; </button>
            </div>
          </div>) })}
        </div>
      </div>
      {/*------------------------------------------------------------ offer banner--------------------------------------- */}

      {/*------------------------------------------------------------ slider banner--------------------------------------- */}
      <section>
        <Slider {...settings}>
          <div className="banner">
            <img className='banner_image' src="/1st/1.png" alt="brand" />
          </div>
          <div className="banner">
            <img className='banner_image' src="/1st/2.png" alt="brand" />
          </div>
          <div className="banner">
            <img className='banner_image' src="/1st/3.png" alt="brand" />
          </div>
          <div className="banner">
            <img className='banner_image' src="/1st/4.png" alt="brand" />
          </div>
        </Slider>
      </section>
      {/*------------------------------------------------------------ slider banner--------------------------------------- */}
      <div className="small_container">
        <h2 className='title mb-2 mt-4'>Trending Eyewears</h2>
        <div className="row">
          {eyewearProducts.map((curElem) => {
            return (<div className="col_4 ">
              <img onClick={()=> { navigate(`/singleproduct/${curElem._id}`)}} src={curElem.images[0]} alt="" />
              <h4>{curElem.title}</h4>
              <div className="rating">
                <Star stars={curElem.rating} reviews={curElem.rating} />
              </div>
              <p>Price-₹{curElem.price}</p>
            </div>)
          })}
        </div>
      </div>
      {/*------------------------------------------------------------ Testimonial section banner--------------------------------------- */}
      <div className="testimonial">
        <div className="small_container">
          <div className="row">
            <div className="col_3">
              <FaQuoteLeft className='qoute' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique modi odio iusto velit aspernatur obcaecati quam animi ipsa recusandae!</p>
              <div className="rating">
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiOutlineStar className='icons' />
              </div>
              <img src="images/user-1.png" alt="" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col_3">
              <FaQuoteLeft className='qoute' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique modi odio iusto velit aspernatur obcaecati quam animi ipsa recusandae!</p>
              <div className="rating">
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiOutlineStar className='icons' />
              </div>
              <img src="images/user-2.png" alt="" />
              <h3>Mike Smith</h3>
            </div>
            <div className="col_3">
              <FaQuoteLeft className='qoute' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit similique modi odio iusto velit aspernatur obcaecati quam animi ipsa recusandae!</p>
              <div className="rating">
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiFillStar className='icons' />
                <AiOutlineStar className='icons' />
              </div>
              <img src="images/user-3.png" alt="" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------ Testimonial section banner--------------------------------------- */}
      {/*------------------------------------------------------------ Brands section banner--------------------------------------- */}
      <div className="brands">
        <div className="small_container">
          <div className="row">
            <div className="col_5">
              <img src="images/logo-godrej.png" alt="" />
            </div>
            <div className="col_5">
              <img src="images/logo-oppo.png" alt="" />
            </div>
            <div className="col_5">
              <img src="images/logo-coca-cola.png" alt="" />
            </div>
            <div className="col_5">
              <img src="images/logo-paypal.png" alt="" />
            </div>
            <div className="col_5">
              <img src="images/logo-philips.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*------------------------------------------------------------ Brands section banner--------------------------------------- */}
      {/*------------------------------------------------------------ Footer section banner--------------------------------------- */}



      {/*------------------------------------------------------------ Footer section banner--------------------------------------- */}































      {/*---------------------------------- Feature Product Section--------------------------- */}























      {/* 

      <section>
        <Container fluid className='bg-light'>
          <Container className='mt-5 d-flex justify-content-center align-items-center flex_column '>
            <div className="w-75">
              <p className='align-self-start mx-5 text-secondary mt-3'>WELCOME TO</p>
              <h1 className='align-self-start mx-5 '>E-ZONE</h1>
              <p className='align-self-start mx-5'>The term "E-zone," which stands for "electronic zone," refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.</p>
              <Button className='align-self-start mx-5 my-3' variant="info">Shop Now</Button>
            </div>
            <div className="">
              <Image style={{ height: '250px' }} fluid className='my-4' src='/hero.jpg' ></Image>
            </div>
          </Container>
        </Container>
      </section>



      <section>
        <Container fluid className='bg-light'>
          <Container className='my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className=" w-25 d-flex justify-content-center flex-column align-items-center mx-4 bg-secondary rounded-5 " style={{ border: '2px solid black' }}>
              <p className='pt-5 fs-2 '><TbTruckDelivery /></p>
              <p className='pb-5 width_auto width_autooo '> Super Fast and Free Delivery </p>
            </div>
            <div className="center d-flex flex-column w-25 ">
              <div className="colum_two mb-4 py-2 px-2 bg-secondary rounded-4" style={{ border: '2px solid black' }}>
                <BiShieldQuarter className='fs-4' /><span className='mx-3 width_mx fs-6'>Non-contact Shipping</span>
              </div>
              <div className="colum_three mt-4 py-2 bg-secondary rounded-4" style={{ border: '2px solid black' }}>
                <GiReceiveMoney className='fs-4 mx-2' /> <span className='mx-3 fs-6 '>Money-Back</span>
              </div>
            </div>
            <div className="column_four w-25 d-flex justify-content-center flex-column align-items-center mx-4 bg-secondary rounded-5" style={{ border: '2px solid black' }}>
              <p className='pt-5 fs-2'><RiSecurePaymentFill /></p><p className='pb-5 width_auto width_autooo'>Super Secure Payment System</p> </div>
          </Container>
        </Container>
      </section>


      <section>
        <Container fluid className=''>
          <Container >
            <div className="d-flex justify-content-center align-items-center flex-shrink-0 flex-wrap">
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/1.jpg'></Image>
                <p className='text-center my-2'>Jewelry & Watches</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/2.jpg' ></Image>
                <p className='text-center my-2'>Beauty</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/3.jpg' ></Image>
                <p className='text-center my-2'>Computers</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/4.jpg' ></Image>
                <p className='text-center my-2'>Toys</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} className='' src='/2nd/5.jpg' ></Image>
                <p className='text-center my-2'>Cellphones</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/6.jpg' ></Image>
                <p className='text-center my-2'> Home</p>
              </div>
              <div style={{ width: "150px", height: "150px", borderRadius: "50%" }} className="my-4 mx-3">
                <Image style={{ objectFit: "cover", height: "100%", width: "100%", borderRadius: "50%" }} fluid className='' src='/2nd/7.jpg' ></Image>
                <p className='text-center my-2'> Shoes</p>
              </div>
            </div>
          </Container>
        </Container>
      </section> */}




      {/* <section>
        <Container fluid className='bg-light'>
          <Container className='mt-5 d-flex justify-content-center align-items-center flex_column '>
            {featureProducts.map((value) => {
              return (
                <div key={value.id} style={{ width: "250px" }} className="card mx-4  my-3  ">
                  <Image onClick={() => { navigate(`/singleproduct/${value.id}`) }} fluid style={{ height: '200px', width: "250px" }} className=' mb-2 abs' src={value.image} ></Image>
                  <div className="info d-flex justify-content-between">
                    <p className='mx-2'>{value.name}</p>
                    <p className='mx-2'>{<FormatPrice price={value.price} />}</p>
                  </div>
                </div>
              )
            })}
          </Container>
        </Container>
      </section> */}



      <Footer />
    </>
  )
}

export default Home
