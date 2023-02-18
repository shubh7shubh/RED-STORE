import React, {useState, useEffect } from 'react'
import { Container} from 'react-bootstrap'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  // const { logInUser } = useSelector((state) => state.User_Register);

  // const [cname, setCname] = useState(logInUser.name);
  // const [cemail, setCemail] = useState(logInUser.email);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate('/login')
  //   }
  // }, [])


  // value={logInUser.email}
  return (
    <>
    <Navbaar/>
      <h2 className='mt-4 text-center'>Contact Us</h2>
      <iframe className='mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35938.62305528009!2d79.27307227397827!3d19.949443950034574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d4699ae2f3a5%3A0xe0216337b22fb290!2sBabupeth%2C%20Chandrapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1665663594160!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Container className='d-flex justify-content-center align-items-center  my-5'>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
            {/* <input value={cname} type="email" className="form-control " placeholder='Your Name...' onChange={e=>setCname(e.target.value)} /> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            {/* <input  value={cemail} type="email" className="form-control" placeholder='Your Email...' onChange={e=>setCemail(e.target.value)} /> */}
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <textarea className="form-control mb-4" rows="3"></textarea>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </Container>
      <Footer/>
    </>
  )
}

export default Contact
