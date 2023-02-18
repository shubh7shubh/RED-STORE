import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'
import { GetDataById, GetDataFromCart } from '../redux/action'
import Footer from './Footer'
import Navbaar from './Navbaar'
import { connect } from 'react-redux'
import { deleteWithToken } from '../lib/request';
import Star from './Star'
import { Router } from 'react-router-dom';


class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 1,
      finalAmount:0
    };

  }
  // navigate = useNavigate()
  componentDidMount() {
    // GetDataFromCart(this.props?.userData?._id)(this.props.dispatch)
    this.finalPrice(this.props.cartData)
  }

  //  handleRemove = async (this.props.userData._id,this.props.cartData.product_id) => {


  //  }

  // handleRemove = async (user_id, product_id) => {
  //   try {
  //     await deleteWithToken(`http://localhost:8000/cart/${product_id}/${user_id}/false`)
  //     GetDataFromCart(this.props?.userData?._id)(this.props.dispatch)
  //   } catch (error) {
  //     console.log(error, "error")

  //   }
  // }

  handleRemove = (id) => {
    console.log(this.props,id)
    // this.props.removeFromCart(id);
    this.props.dispatch({ type: 'removeFromCart', payload: id });
  };


  finalPrice = (data) => {
    let sum=0;
  for(let i=0;i<data.length;i++){
    sum  = sum+ data[i].price

  }
  // console.log(sum,data,"summ")
  this.setState({
    finalAmount:sum
  })  
  }
  render() {
    console.log(this.props, "class component props")
    console.log(this.state.finalAmount,"adisahd")
    return <> <Navbaar />
      <Container style={{minHeight:"700px"}} fluid className='w-100'>
        {/* <div className="d-flex justify-content-between w-75 my-4">
          <h2>SHOPPING CART </h2>
          <p> Price</p>
        </div>
        <hr className='w-75 my-4' />
        {this.props.cartData && this.props.cartData.length && this.props.cartData.map((curElem) => {
          return <div className="cart_component w-75 position-relative">
            <div className='w-100 my-4 d-flex'>
              <div className='w-25' style={{ width: "25%" }}>
                <Image fluid className='px-3 py-3' src='/2nd/4.jpg' ></Image>
              </div>
              <div className='w-50 mx-5 my-2'>
                <p className="h4">{curElem.title}</p>
                <p className="h4">{curElem.quantity}</p>
                <button className='px-2 py-1 bg-danger' onClick={() => { this.handleRemove(this.props.userData._id, curElem.product_id) }}><h4>Delete</h4>  </button>
              </div>
              <div className='w-25'>
                <p className='text-end mx-2 my-2 '><h4>{curElem.price}$</h4></p>
              </div>
            </div>
            <hr className='w-100 my-4' />
          </div>
        
        })}
  <div style={{top:"21rem",right:"1px",backgroundColor:"lightgrey"}} className="order_summary position-absolute w-25 h-25 rounded">
    <h2 className="text-center">ORDER SUMMARY</h2>
  <div className="d-flex justify-content-between mx-5 my-3">
    <p>Subtotal</p>
    <p>1000</p>
  </div>
  <div className="d-flex justify-content-between mx-5 my-3">
    <p>Estimated Shipping</p>
    <p>0.00</p>
  </div>
  <div className="d-flex justify-content-between mx-5 my-3">
    <p>Estimated Total</p>
    <p>{this.state.finalAmount}$</p>
  </div>
  </div> */}


  
<div className="cart-container">
        <h2>Your Cart</h2>
        {this.props.cartData && this.props.cartData.length && this.props.cartData.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.images[0]} alt={item.name} width="50" height="50" />
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              { <Star stars = {item.rating} reviews = {item.rating}/>}
            </div>
            <button onClick={() => this.handleRemove(item._id)}>Remove</button>
          </div>
        ))}
        <p className='subtotal'>Subtotal: ${this.state.finalAmount}</p>
        <button>Checkout</button>
      </div>



        <div className="cart_buton d-flex justify-content-center align-items-center">
          <Button className=" bg-dark mx-5 my-5 py-2 px-3">Continue Shopping</Button>
          <Button className=" bg-dark mx-5 my-5 py-2 px-3" onClick={() => console.log(Router,"routerrr")}> Proceed to Checkout</Button>
        </div>

      </Container>
      <Footer />
    </>
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.User_Register.logInUser,
    cartData: state.User_Register.cart
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (id) => {
//       dispatch({ type: 'removeFromCart', payload: id });
//     }
//   };
// };

export default connect(mapStateToProps)(Cart) 




