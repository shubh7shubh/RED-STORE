import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
    return <div className="cart_button mt-4">
        <div className="amount_toggle d-flex">
            <button  className=" card_button mx-2 border-primary" onClick={() => setDecrease()}><FaMinus/></button>
            <p  className="mx-2 pt-1">{amount}</p>
            <button  className=" card_button mx-2 border-warning" onClick={() => setIncrease()}><FaPlus/></button>
        </div>
    </div>
}

export default CartAmountToggle