import React, { useEffect } from 'react';
import { HomeWallpaper, 
        ProductMappingHor, 
        TopNav, 
        TotalPriceCard, 
        WishCartHeader, 
        Themes, 
        HousePath, 
        Button } from '../../Components';
import { TotalCartQuantity } from '../../GeneralFunctions';        
import { useGeneral, useAuth, useCart } from '../../Context';
import './Cart.css';

const Cart = () => {
  const { state } = useGeneral();
  const { cartTotal, setCartTotal, userLogin } = useAuth();
  const { totalQuantity } = cartTotal;
  const { cartState } = useCart();
  const { cartItems } = cartState;
  useEffect(() => {
    TotalCartQuantity(cartItems, cartTotal, setCartTotal)
  }, [cartItems])
  return (
    <>
      <HomeWallpaper />  
      <TopNav showHamburger={true}/>
      <Themes />
      {state.showSideNav && <HousePath />}
      <WishCartHeader text={"My Cart"} items={totalQuantity}/>
      {userLogin ? 
      <div className="cart-display">
        {cartItems.length!==0 && <TotalPriceCard />}
        <ProductMappingHor />
      </div> 
      : 
      <h1 className="cart-text">You are not logged in Wizard</h1>
      }
    </>
  )
}

export { Cart };
