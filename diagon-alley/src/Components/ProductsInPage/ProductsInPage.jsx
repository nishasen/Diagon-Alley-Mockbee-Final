import React from 'react';
import { useData } from '../../Context';
import style from './ProductsInPage.module.css';

const ProductsInPage = () => {
  const { Products } = useData();
  return (
    <div>
        <span className={`p4 ${style.products_in_page} text-white`}>Showing {Products.length} results</span>
    </div>
  )
}

export { ProductsInPage };