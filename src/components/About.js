import React, { useEffect } from 'react'
import {Container, Button, Image } from 'react-bootstrap'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  // const { logInUser } = useSelector((state) => state.User_Register);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate('/login')
  //   }
  // }, [])


  return (
    <>
    <Navbaar/>
    <section>
    <Container fluid className = 'bg-light my-5'>
    <Container className='mt-5 d-flex justify-content-center align-items-center flex_column '>
      <div className="w-75">
        <p className='align-self-start mx-5 text-secondary mt-3'>WELCOME TO</p>
        <h1 className='align-self-start mx-5 '>E-Zone Details</h1>
        <p className='align-self-start mx-5'>The term "E-zone," which stands for "electronic zone," refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. Ecommerce is often used to refer to the sale of physical products online, but it can also describe any kind of commercial transaction that is facilitated through the internet.</p>
        <Button className='align-self-start mx-5 my-3' variant="info">Shop Now</Button>
        <button className='btn btn btn-primary'>GetNow</button>
      </div>
      <div className="">
        <Image style={{ height: '250px' }} fluid className='my-4' src='/10.jpg' ></Image>
      </div>
    </Container>
    </Container>
  </section>
  <Footer/>
  </>
  )
}

export default About
