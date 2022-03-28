import React from 'react';
import { HomeWallpaper, TopNav, Themes, FilterNav, ProductList } from '../../Components';
import { useGeneral } from '../../Context';

const ProductListing = () => {
  const { state } = useGeneral();
  return (
    <>
        <HomeWallpaper />
        <TopNav showHamburger={true}/>
        <Themes />
        {state.showSideNav && <FilterNav />}
        <ProductList />
    </>  
  );
}

export  { ProductListing };