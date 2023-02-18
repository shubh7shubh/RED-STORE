import React, { useState } from 'react';

function CheckoutPage() {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [billingInfo, setBillingInfo] = useState({
    name: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        <h3>Shipping Information</h3>
        <label>Name:</label>
        <input type="text" value={shippingInfo.name} onChange={(e) => setShippingInfo({...shippingInfo, name: e.target.value})} />
        <label>Address:</label>
        <input type="text" value={shippingInfo.address} onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})} />
        <label>City:</label>
        <input type="text" value={shippingInfo.city} onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})} />
        <label>State:</label>
        <input type="text" value={shippingInfo.state} onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})} />
        <label>Zip:</label>
        <input type="text" value={shippingInfo.zip} onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})} />

        <h3>Billing Information</h3>
        <label>Name:</label>
        <input type="text" value={billingInfo.name} onChange={(e) => setBillingInfo({...billingInfo, name: e.target.value})} />
        <label>Card Number:</label>
        <input type="text" value={billingInfo.cardNumber} onChange={(e) => setBillingInfo({...billingInfo, cardNumber: e.target.value})} />
        <label>Expiration Date:</label>
        <input type="text" value={billingInfo.expirationDate} onChange={(e) => setBillingInfo({...billingInfo, expirationDate: e.target.value})} />
        <label>CVV:</label>
        <input type="text" value={billingInfo.cvv} onChange={(e) => setBillingInfo({...billingInfo, cvv: e.target.value})} />
      </form>
      // add the cart items and total price
      // add a submit button to place the order
    </div>
  );
}

export default CheckoutPage;
