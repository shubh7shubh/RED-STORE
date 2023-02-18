import React from 'react'
import { Container, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container className='d-flex justify-content-center align-items-center flex-column mt-5'>
      <div> <p className='mt-5 display-1 p-0 mb-0 fw-bold'>404</p> </div>
      <div> <p className=' mt-0 display-4 '> UH OH! You're lost.</p> </div>
      <div> <p className='text-center'>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage</p> </div>
      <div> <Button onClick={()=>{navigate('/')}} className='mb-5 px-3 bg-black mt-2' >Home</Button> </div>
    </Container>
  )
}
export default ErrorPage
