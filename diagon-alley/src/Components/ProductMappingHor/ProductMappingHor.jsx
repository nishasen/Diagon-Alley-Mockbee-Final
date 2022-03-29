import React, { useEffect } from 'react'
import { HorizontalCard } from '..';
import { useAuth, useCart } from '../../Context';
import { ImSpinner } from 'react-icons/im';
import './ProductMappingHor.css';

const ProductMappingHor = () => {
  const { cartState, cartLoading } = useCart();
  const { cartItems } = cartState;

  return (
    <div className="dis-flex product-align-hor">
        {cartLoading ? <ImSpinner className="loader" /> : 
        cartItems.length===0 ? <h1 className="cart-text ">Your cart is empty</h1> : 
                              cartItems.map(Product=><HorizontalCard key={Product._id} Product={Product}/>
        )}
    </div>
  )
}

export { ProductMappingHor };
