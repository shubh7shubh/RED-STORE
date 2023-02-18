import React, { useEffect, useRef, useState } from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../redux/action';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css';
import { LOGO } from '../config';

const Navbaar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const { products } = useSelector((state) => state.User_Register);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logout = () => {
    // dispatch(userLogout())
    localStorage.removeItem("token")
    navigate('/login')
  }

  return <>
    {/* <Navbar collapseOnSelect expand="sm" bg="light">
              <Container fluid>
                <Navbar.Brand className='my-2'><img src={LOGO} alt="logo" width = '100' height='30' /></Navbar.Brand>
                <input type="text" placeholder='Search...' className='w-25 mx-2 my-2' onChange={(e) => setSearchValue(e.target.value) } />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto mx-auto">
                   <Link className='nav_link mx-1 ' to="/" >
                    <Tippy animation = 'perspective' interactive = 'true' placement='bottom' content="Home dfsaf adsfafdsaf adfaf daffad ad"><Button className='bg-light btn-outline-info'>Home</Button></Tippy>
                    </Link>
                   <Link className='nav_link mx-1' to="/about" >
                   <Tippy offset={[150, 40]}  placement='top' content="About dfsaf adsfafdsaf adfaf daffad ad"><Button className='bg-light btn-outline-info' >About</Button></Tippy>
                  </Link>
                   <Link className='nav_link mx-1' to="/products" ><Button className='bg-light btn-outline-info'>Products</Button></Link>
                   <Link className='nav_link mx-1' to="/contact" ><Button className='bg-light btn-outline-info'>Contact</Button></Link>
                  </Nav>
                  <Nav>
                    <Button  onClick={logout} className='bg-light btn-outline-info px-2 py-0'>Logout</Button>
                    <Nav.Link className='mx-2' onClick={() => {navigate('/cart')}}><AiOutlineShoppingCart style = {{fontSize:'1.7rem', color:"green"}}/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar> */}

    {/*-------------------------------- Navbar header category section------------------------------- */}
    <header>
      {/* <Container className='container'> */}
      {/* 
        <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="images/logo.png" width="125px" alt="logo" />
          </div>
          <nav>
            <ul className='links' id={showLinks ? "hidden" : ""} >
              <li><Link to="/" style={{ textDecoration: 'none', color: '#555' }} >Home</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none', color: '#555' }}>About</Link></li>
              <li><Link to="/products" style={{ textDecoration: 'none', color: '#555' }}>Products</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: '#555' }}>Contact</Link></li>
            </ul>
            <div className="rightNav">
            <img className='cart_icon' src="images/cart.png" width="20px" height="20px" alt="" />
            <Button  onClick={logout} className='bg-light btn-outline-info px-2 py-0 mx-2'>Logout</Button>
            </div>
          </nav>
          <div className="hamMenu mx-2">
          <img  className='menu_icon' src="images/menu.png"/>
          </div>

        </div>
        </div> */}
      {/* </Container> */}
      <div className="Navbar">
        <div className="leftSide">
          <div className="logo mx-5 my-3">
            <img onClick={() => { navigate('/') }} src="images/logo.png" width="125px" alt="logo" />
          </div>
        </div>
        <div className="centerSide d-flex">
          <div className="links mx-1 my-3" id={showLinks ? "hidden" : ""}>
            <Link className='routerLinks mx-2' to="/" style={{ textDecoration: 'none', color: '#555' }} >Home</Link>
            <Link className='routerLinks mx-2' to="/about" style={{ textDecoration: 'none', color: '#555' }}>About</Link>
            <Link className='routerLinks mx-2' to="/products" style={{ textDecoration: 'none', color: '#555' }}>Products</Link>
            <Link className='routerLinks mx-2' to="/contact" style={{ textDecoration: 'none', color: '#555' }}>Contact</Link>
          </div>
          <div className="cart_div mx-1 my-2 pt-1">
            <img className='cart_icon' onClick={() => { navigate('/cart') }} src="images/cart.png" width="20px" height="20px" alt="" />
          </div>
          <div className="hamMenu  mx-2 my-3">
            <img onClick={() => setShowLinks(!showLinks)} className='menu_icon' src="images/menu.png" />
          </div>
        </div>
        <div className="rightSide mx-2 my-2">
          <div className="rightNav">
            <Button onClick={logout} className='bg-light btn-outline-info px-2 py-0 my-2'>Logout</Button>
          </div>

        </div>
      </div>



    </header>
    {/* -------------------------------- Navbar header category section------------------------------- */}


    {/* {
      (products.filter((value) => {
        if (searchValue === "") {
          return "";
        }
        else if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
          return value;
        }
      }
      )).map((item) => <h4 key={item.id} onClick={() => { navigate(`/singleproduct/${item.id}`) }} className='  my-2 mx-3 w-50 d-flex justify-content-center'>{item.name}</h4>)
    } */}
  </>



}

export default Navbaar
