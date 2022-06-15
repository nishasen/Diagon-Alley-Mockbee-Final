import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Toast } from '..';
import { useAuth, useCart } from '../../Context';
import { CalculateTotal } from '../../GeneralFunctions';
import './TotalPriceCard.css';

const TotalPriceCard = ({Checkout}) => {
    const navigate = useNavigate();
    const { cartTotal, setCartTotal } = useAuth();
    const { cartState, cartDispatch } = useCart();
    const { cartItems } = cartState;
    const { totalQuantity, deliveryCharge } = cartTotal;
    const {price, actualPrice, discountPrice} = CalculateTotal(cartItems, cartTotal, setCartTotal);     
    const totalAmount = price + deliveryCharge;
    const loadScript = async (url) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = url;
    
          script.onload = () => resolve(true);
    
          script.onerror = () => resolve(false);
    
          document.body.appendChild(script);
        });
      };
      const showRazarpay = async () => {
        const res = await loadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
          Toast(
            "Razarpay Payment failed to load,check your connection",
            "error"
          );
          return;
        }
    
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          currency: "INR",
          name: "Diagon Alley",
          description: "Thankyou for shopping",
          amount: totalAmount * 100,
          image:
            "https://ik.imagekit.io/ecomdiagonalley/DiagonAlley/Logo/DiagonAlleyLogo_bLzTQ8w0b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649227594828",
    
          handler: function (response) {
            if (response.razorpay_payment_id) {
              Toast("Payment successful, order placed", "success");
              navigate('/', {replace: true})
              cartDispatch({ type: "REMOVE_FROM_CART", payload: [] });
            }
          },
    
          prefill: {
            name: "Diagon Alley",
            email: "diagonalley@dev.com",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
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
        {!Checkout ? 
            <Button buttonText="Place order" color={"primary"} size={"large"} onClick={()=>navigate('/checkout', {replace: true})}/>
            :
            <Button buttonText="Checkout" color={"primary"} size={"large"} onClick={()=>showRazarpay()}/>
            }
    </div>
  )
}

export { TotalPriceCard };