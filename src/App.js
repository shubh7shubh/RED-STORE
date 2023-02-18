import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart'
import Contact from './components/Contact'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import GoToTop from './components/GoToTop'
import Address from './components/Address'
import Payment from './components/Payment'
import Checkout from './components/Checkout'
import Order from './components/Order'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/address' element={<Address />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Order />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <GoToTop/>
    </BrowserRouter>
    <ToastContainer/>
    </div>
  )
}

export default App
