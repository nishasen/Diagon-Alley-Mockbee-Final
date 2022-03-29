import React from 'react';
import { HomeWallpaper, ProductMappingVer, Themes, TopNav, WishCartHeader, HousePath, Button } from '../../Components';
import './Wishlist.css';
import { useAuth, useGeneral, useWishlist } from '../../Context';

const Wishlist = () => {
  const { state } = useGeneral();
  const { checkUserLogin, userLogin } = useAuth();
  const { wishlistState } = useWishlist();
  const { wishlistItems } = wishlistState;
  checkUserLogin();
  console.log(userLogin)
  return (
    <>
      <HomeWallpaper />  
      <TopNav showHamburger={true}/>
      <Themes />
      {state.showSideNav && <HousePath />}
      <WishCartHeader text={"My Wishlist"} items={wishlistItems.length}/>
      {
        userLogin ? 
        <ProductMappingVer showWishlist={true}/> 
        :
        <h1 className="wishlist-text">You are not logged in Wizard</h1>
        
      }
      
    </>
  )
}

export { Wishlist };
