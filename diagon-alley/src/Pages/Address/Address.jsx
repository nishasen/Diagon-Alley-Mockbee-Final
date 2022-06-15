import React from 'react';
import { HomeWallpaper, TopNav, Themes, HousePath, WishCartHeader, AddressContainer, AllAddresses } from '../../Components';
import { useData, useGeneral } from '../../Context';
import './Address.css';

const Address = () => {
    const { state } = useGeneral();
    const { state: productState } = useData();
  return (
    <>
        <HomeWallpaper />  
        <TopNav showHamburger={true}/>
        <Themes />
        {state.showSideNav && <HousePath />}
        <WishCartHeader text={"My Addresses"} items={productState.addresses.length}/>
        <div className="dis-flex address">
            <AddressContainer />
            <AllAddresses />
        </div>
    </>
  )
}

export {Address};