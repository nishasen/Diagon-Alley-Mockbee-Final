import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { AddressBox, HomeWallpaper, Themes, TopNav, TotalPriceCard, WishCartHeader } from '../../Components';
import { useAuth } from '../../Context';
import './Checkout.css';

const Checkout = () => {
  const { cartTotal} = useAuth();
  const navigate = useNavigate();
  const { totalQuantity } = cartTotal;
  totalQuantity === 0 && navigate('/product-listing/all-products', {replace: true});
  return (
    <>
      <HomeWallpaper />  
      <TopNav />
      <Themes />
      <WishCartHeader text="Checkout" items={totalQuantity}/>
      <div className="dis-grid checkout">
        <div className="dis-flex checkout-box">
          <h3 className="text-white">Select Address</h3>
          <div className="dis-flex checkout-address">
            <AddressBox Checkout={true}/>
          </div>
        </div>
        <div className="dis-flex checkout-price">
        <TotalPriceCard Checkout={true}/>
        </div>
      </div>
    </>
  )
}

export { Checkout };
