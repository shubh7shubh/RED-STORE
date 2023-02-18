import React from 'react'
import { Container, Button, Col, Image } from 'react-bootstrap'

const Footer = () => {
    return (
        // <div className="footer">
        //     <Container fluid className='bg-dark my-0'>
        //         <div style={{ width: "100%", height: "350px" }} className="box position_box">
        //             <Container style={{ width: "80%", height: "70px" }} className='bg-info rounded-2 position_child mb-5'>
        //                 <div className="d-flex justify-content-center align-items-center flex-column">
        //                     <p className='my-0'>Ready to get started?</p>
        //                     <p className='my-0'>Talk to us today</p>
        //                 </div>
        //                 <div className="button_left d-flex justify-content-center align-items-center">
        //                     <Button className='' variant="danger">Get Started</Button>
        //                 </div>
        //             </Container>
        //             <Container className='mt-5'>
        //                 <div className="row ">
        //                     <div className="footer_box col-lg-3 col-md-6 d-flex justify-content-center align-items-center flex-column">
        //                         <p className='my-0 text-white'>E-zone</p>
        //                         <p className='my-0 text-white'>Talk to us today</p>
        //                     </div>
        //                     <div className="footer_box col-lg-3 col-md-6 d-flex justify-content-center align-items-center flex-column">
        //                         <p className='my-2 text-white text-center'>SignUp to get important updates</p>
        //                         <input className='my-1' type="text" />
        //                         <Button className='my-2' variant="warning">Get Started</Button>
        //                     </div>
        //                     <div className="footer_box col-lg-3 col-md-6 d-flex justify-content-center align-items-center position-relative">
        //                         <p className='follow_us align-self-start px-2 text-center position-absolute bottom-25 text-white '>Follow us</p>
        //                         <div><Image style={{ height: '50px', width: "50px",cursor:'pointer' }} className='mx-2' src='/logo_brand/5.PNG' ></Image> </div>
        //                         <div> <Image style={{ height: '50px', width: "50px",cursor:'pointer' }} className='mx-2' src='/logo_brand/6.PNG' ></Image>  </div>
        //                         <div> <Image style={{ height: '50px', width: "50px", cursor:'pointer' }} className='mx-2' src='/logo_brand/7.PNG' ></Image>  </div>
        //                     </div>
        //                     <div className="footer_box col-lg-3 col-md-6 d-flex justify-content-center align-items-center flex-column">
        //                         <p className='my-0 text-white'>Call Us</p>
        //                         <p className='my-0 text-white'>+9112343767424</p>
        //                     </div>
        //                 </div>
        //             </Container>
        //         </div>
        //     </Container>

        // </div>
        <div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer_col_1">
        <h3>Download Our App</h3>
        <p>Download App for Android and Ios Mobile Phone.</p>
        <div className="app_logo">
            <img src="images/play-store.png" alt="" />
            <img src="images/app-store.png" alt="" />
        </div>
      </div>
      <div className="footer_col_2">
        <img src="images/logo-white.png" alt="" />
        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
      </div>
      <div className="footer_col_3">
        <h3>Useful Links</h3>
        <ul className='footer_ul'>
            <li>Coupons</li>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>Join Affiliate</li>
        </ul>
      </div>
      <div className="footer_col_4">
        <h3>Follow Us</h3>
        <ul className='footer_ul'>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className='copyright'>Copyright</p>
  </div>
</div>
    )
}

export default Footer
