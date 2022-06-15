import React from 'react';
import { ProductMappingVer, ProductsInPage } from '..';
import style from './ProductList.module.css';

const ProductList = () => {                     
  return (
    <div className={style.product_list}>
      <ProductsInPage />
      <ProductMappingVer showWishlist={false} />
    </div>
  )
}

export { ProductList };