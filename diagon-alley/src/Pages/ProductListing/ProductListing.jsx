import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { HomeWallpaper, TopNav, Themes, FilterNav, ProductList } from '../../Components';
import { useData, useGeneral } from '../../Context';

const ProductListing = () => {
  const { state } = useGeneral();
  const { dispatch, setHouseFilter, setCategoryFilter } = useData();
  const { pathname } = useParams();
  const checkPathName = () => {
    if(
      pathname==="gryffindor" || 
      pathname==="hufflepuff" || 
      pathname==="ravenclaw" || 
      pathname==="slytherin") {
        dispatch({type: "HOME_HOUSE", payload: pathname[0].toUpperCase()+pathname.slice(1)});
        setCategoryFilter(true);
        setHouseFilter(false);
      }
    else if (pathname==="all-products") {
      setCategoryFilter(true);
      setHouseFilter(true);
    }  
    else {
      dispatch({type: "HOME_CATEGORY", payload: pathname[0].toUpperCase()+pathname.slice(1)});
      setHouseFilter(true);
      setCategoryFilter(false);
    }
  } 

  useEffect(()=> {
    pathname ? checkPathName() : <>{
      setCategoryFilter(true), 
      setHouseFilter(true)}</>;
  }, [pathname])

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