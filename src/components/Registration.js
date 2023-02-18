
import axios from 'axios'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { apiError, } from '../redux/action'

const Registration = () => {
    const dispatch = useDispatch();
    const register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:7070/register', {
            name, password, email
        }).then((res) => {
            navigate('/login')
            console.log(res,"resss").catch((err) => {
                dispatch(apiError(err.message))
            })
        })}
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return (
        <>
            <Container className='d-flex justify-content-center align-items-center flex-column  my-5' >
                <h1 className='mt-5 bg-info'>Sign Up</h1>
                <form className='mt-5'>
                    <div className="form-group">
                        <label>Name</label>
                        <input value={name} type="text" className="form-control" placeholder="Enter Name" onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input value={username} type="text" className="form-control" placeholder="Enter Username" onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input value={email} type="text" className="form-control" placeholder="Enter Name" onChange={(e) => { setEmail(e.target.value) }} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={password} type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <button onClick={register} className="btn btn-primary my-3">Submit</button>
                    <button onClick={()=>{navigate('/login')}}className="btn btn-info my-3 mx-2">Go to Login page</button>
                </form>
            </Container>
        </>
    )
}
export default Registration
