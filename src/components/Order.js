import React from 'react'

const Order = () => {
    return <>
        <div className="successPage-container d-flex justify-content-center align-items-center mt-5">
            <div className="confirmIcon">
                <img
                    src="https://t4.ftcdn.net/jpg/03/03/72/17/240_F_303721767_iNO49Cr0bPrcZT9eIuTr0VUa5QXuK1es.jpg"
                />
            </div>
            <div className="confirmText">
                Order Confirmed
                <p>“Thank you for your order”<br /></p>
                <p>You will receive an order confirmation email/SMS shortly.</p>
            </div>
            <div className="shoppingButton">
                <a href="./productHome.html">
                    <button className="continue mx-2 bg-danger" type="button">Continue Shopping</button>
                </a>
                <button type="button">View Order</button>
            </div>
        </div>

    </>
}

export default Order






























