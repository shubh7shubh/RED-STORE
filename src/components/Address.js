import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Image, Button } from 'react-bootstrap'

const Address = () => {
   const navigate = useNavigate();
  return <>
  <div className="procced mx-5 my-2">
        <Button className='bg-info' onClick={() => {navigate('/cart')}}>Return to Cart</Button>
    </div>
    <div class="margin">
      <div class="display">
        <img
          height="75px"
          src="https://cdn.shopify.com/s/files/1/0910/0818/files/logo_8fc719ab-3005-4918-9625-4e2807b25604.png?45972"
          alt="fragnance outlet"
        />
      </div>

      <div class="row">
        <div class="BOX">
          <form class="display">
            <div>
              <h1>Contact Information</h1>
              <label for="email"> Email</label>
              <input type="text" id="email" name="email" placeholder="" />
            </div>

            <div class="row">
              <div class="address">
                <h3>Shipping Address</h3>
                <label for="fname"> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="" />

                <label for="adr"> Address</label>
                <input type="text" id="adr" name="address" placeholder="" />
                <label for="city"> City</label>
                <input type="text" id="city" name="city" placeholder="" />

                <div class="row">
                  <div class="address">
                    <label for="country">Country</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      placeholder=""
                    />
                  </div>

                  <div class="address">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="" />
                  </div>
                  <div class="address">
                    <label for="zip">Zip Code</label>
                    <input type="text" id="zip" name="zip" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
<div className="to_checkout">
      {/* <Button onClick={() => {navigate('/payment')}}  className="Btn bg-danger mt-2">Proceed to checkout</Button> */}

</div>
  
  
  </>

}

export default Address