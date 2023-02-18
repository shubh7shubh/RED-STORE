import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ sProduct }) => {
    const { id, colors, stock } = sProduct;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }
    return <>
        <div className="colorss ">
            <p className= "d-flex justify-content-start">
                Colors:
                {
                    colors.map((curColor, index) => {
                        return (<button onClick={() => setColor(curColor)} className={color === curColor ? "color_style active mx-2" : "color_style mx-2"} key={index} style={{ backgroundColor: curColor }}>
                            {color === curColor && <FaCheck className='fa_check' />} 
                        </button>);

                    })
                }
            </p>
        </div>

        {/* add to cart */}
        <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />
        <NavLink to={"/cart"}>

            <div className="cart_button">
                <button className='bg-success my-4 mx-3 rounded'>Add To Cart</button>
            </div>

        </NavLink>
    </>
}

export default AddToCart