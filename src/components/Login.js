import axios from 'axios';
import React, { useState} from 'react'
import {Container } from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {UserLogin, userLogin } from '../redux/action';
import { toast } from 'react-toastify';

const Login = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleSubmit = (e) =>{
  const toHome = () => {
    navigate('/')
  }
  const toRegister = () => {
    navigate('/register')
  }
  e.preventDefault(); 
  dispatch(UserLogin(email,password)).then((res) => {
    console.log(res,"THISH")
    if(res.status === 200){
      toast.success("Login success", {colored:true})
      localStorage.setItem("token",res.data.token);
      setTimeout(toHome, 3000);
    }else{
      toast.error("Invalid credentials")
      setTimeout(toRegister, 3000);
    }
  })
}

  return (
   <Container className='d-flex justify-content-center align-items-center flex-column  my-5' >
    <h1  className='mt-5 bg-info'>Login</h1>
<form className='mt-5'>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input value={email} type="email" className="form-control" placeholder="Enter Username" onChange={(e)=>{setEmail(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input value={password} type="password" className="form-control" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary my-3">Submit</button>
  <button onClick={()=>{navigate('/register')}} className="btn btn-info my-3 mx-2">Go to sign up page</button>

</form>
   </Container>
  )
}
export default Login