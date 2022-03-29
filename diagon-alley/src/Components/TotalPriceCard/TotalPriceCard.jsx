import React from 'react';
import { Button } from '..';
import { useAuth, useCart } from '../../Context';
import { CalculateTotal } from '../../GeneralFunctions';
import './TotalPriceCard.css';

const TotalPriceCard = () => {
    const { cartTotal, setCartTotal } = useAuth();
    const { cartState } = useCart();
    const { cartItems } = cartState;
    const { totalQuantity, deliveryCharge } = cartTotal;
    const {price, actualPrice, discountPrice} = CalculateTotal(cartItems, cartTotal, setCartTotal);     
    const totalAmount = price + deliveryCharge;
  return (
    <div class="price-card">
        <h4 >PRICE DETAILS <span>({totalQuantity})</span></h4>
        <hr/>
        <div class="cart-price-list">
            <div class="lists dis-flex">
                <p>Actual Price</p>
                <p>₹{actualPrice}</p>
            </div>
            <div class="lists dis-flex">
                <p>Cart Price</p>
                <p>₹{price}</p>
            </div>
            <div class="lists dis-flex">
                <p>Discount</p>
                <p>-₹{discountPrice}</p> 
            </div>
            <div class="lists dis-flex">
                <p>Delivery charges</p>
                <p>₹{deliveryCharge}</p> 
            </div>
            <hr/>
            <div class="lists dis-flex">
                <h4>TOTAL AMOUNT</h4>
                <h4 id="total-price">₹{totalAmount}</h4>
            </div>
        </div>
        <hr/>
        <p>You will save <b>₹{discountPrice}</b> on this order</p>
        <hr/>
        <Button buttonText={"Place order"} color={"primary"} size={"large"} />
    </div>
  )
}

export { TotalPriceCard };