import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    //console.log(cart);

   let total = 0;
   let shipping = 0;
   for(const product of cart){
       total = total + product.price;
       shipping = shipping + product.shipping;
   }

   //for tax: dosomik numbers k 2 decimel a nise toFixed kre.
   const tax = (total * 10/100).toFixed(2);
   
   const grandTotal = total + shipping + parseFloat(tax);

    return (
        <div className="cart">
             <h4 className="heading">Order Summery</h4>
             <p>Selected items: {cart.length}</p>
             <p>Total price: ${total}</p>
             <p>Shipping: {shipping}</p>
             <p>Tax: {tax}</p>
             <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;