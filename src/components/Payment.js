import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

const Payment = () => {
  return <>
  <div className="wrapperBody">
  <div className="wrapper">
      <h2>Payment Page</h2>
      <form id="form">
        <h4>Account</h4>
        <div className="input_group">
          <div className="input_box">
            <input
              type="text"
              id="text1"
              placeholder="Full Name"
              required
              className="name"
            />
            <i className="fa fa-user icon"></i>
          </div>
          <div className="input_box">
            <input
              type="text"
              id="text2"
              placeholder="Name on Card"
              required
              className="name"
            />
            <i className="fa fa-user icon"></i>
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <input
              type="email"
              id="text3"
              placeholder="Email Address"
              required
              className="name"
            />
            <i className="fa fa-envelope icon"></i>
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <input
              type="text4"
              id="text"
              placeholder="Address"
              required
              className="name"
            />
            <i className="fa fa-map-marker icon"></i>
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <input
              type="text"
              id="text5"
              placeholder="City"
              required
              className="name"
            />
            <i className="fa fa-institution icon"></i>
          </div>
        </div>

        <div className="input_group">
   
        </div>
   
        <div className="input_group">
          <div className="input_box">
            <h4>Payment Details</h4>
            <input type="radio" name="pay" className="radio" id="bc1" checked />
            <label for="bc1"
              ><span> <i className="fa fa-cc-visa"></i>Credit Card</span></label
            >
            <input type="radio" name="pay" className="radio" id="bc2" />
            <label for="bc2"
              ><span> <i className="fa fa-cc-paypal"></i>Paypal</span></label
            >
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <input
              type="text"
              id="card"
              className="name"
              placeholder="Enter Card Number 1111 2222 3333 4444"
              required
            />
            <i className="fa fa-credit-card icon"></i>
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <input
              type="password"
              id="cvv"
              className="name"
              placeholder="Enter CVV"
              required
            />
            <i className="fa fa-user icon"></i>
          </div>
        </div>
        <div className="input_group">
          <div className="input_box">
            <div className="input_box">
              <select required className="name">
                <option value="">Card Expiry Month</option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
              <i className="fa fa-calendar icon"></i>
            </div>
          </div>
          <div className="input_box">
            <select required className="name">
              <option>Card Expiry Year</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
            </select>
            <i className="fa fa-calendar-o icon"></i>
          </div>
        </div>
        <div className="input_box">
           <p id="amount"></p> 
          <i className="fa fa-money icon"></i>
        </div>

        <div className="input_group">
          <div className="input_box">
            <button id="sub" type="submit">PAY NOW</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  </>
}

export default Payment