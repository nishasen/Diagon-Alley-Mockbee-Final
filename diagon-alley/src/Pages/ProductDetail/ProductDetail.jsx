import React, { useEffect } from 'react';
import { DetailedProduct, HomeWallpaper, Themes, TopNav } from '../../Components';
import { HousePath } from '../../Components/HousePath/HousePath';
import { useData, useGeneral } from '../../Context';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { state } = useGeneral();
  const { Products } = useData();
  const { id } = useParams();
  const getProduct = Products?.find(item => item?.id===id)
  return (
    <>
       <HomeWallpaper /> 
       <TopNav showHamburger={true}/>
       <Themes /> 
       {state.showSideNav && <HousePath />}
       <DetailedProduct getProduct={getProduct}/> 
    </>
  )
}

export { ProductDetail };