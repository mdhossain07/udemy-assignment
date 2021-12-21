import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.addcart;

    let total = 0;
    let price = 0;
    cart.forEach(element => {
        price = element.price;
        total = total + price;
    });

    return (
        <div>
            <h3 className='order'> Order Overview </h3>
            <p> Course Ordered : {props.addcart.length} </p>
            <p> Course Price {price} </p>
            <p> Total Price : {total.toFixed(2)} </p>
            <button className='enroll'>Order Now</button>
        </div>
    );
};

export default Cart;