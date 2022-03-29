import React from 'react';
import { DetailedProduct, HomeWallpaper, Themes, TopNav } from '../../Components';
import { HousePath } from '../../Components/HousePath/HousePath';
import { useGeneral } from '../../Context';

const ProductDetail = () => {
  const { state } = useGeneral();
  return (
    <>
       <HomeWallpaper /> 
       <TopNav showHamburger={true}/>
       <Themes /> 
       {state.showSideNav && <HousePath />}
       <DetailedProduct /> 
    </>
  )
}

export { ProductDetail };