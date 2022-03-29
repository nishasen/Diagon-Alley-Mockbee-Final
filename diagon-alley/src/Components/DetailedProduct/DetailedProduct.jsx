import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Toast } from '..';
import { AddToCart, AddToWishlist } from '../../APICall';
import { useAuth, useCart, useWishlist, useData } from '../../Context';
import style from './DetailedProduct.module.css';

const DetailedProduct = () => {
  const {showProduct} = useData();
  const { userLogin } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;
  const navigate = useNavigate();
  const { _id,
          productImg, 
          productName, 
          productRating, 
          productPrice, 
          productActualPrice,
          productBrand,
          productStock,
          productDesc } = showProduct;

  const addItemToWishlistHandler = () => {
    if(userLogin) {
      AddToWishlist(showProduct, wishlistDispatch)
      Toast(`Added ${productName} to wishlist`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }
  const addItemToCartHandler = () => {
    if(userLogin) {
      AddToCart(showProduct, cartDispatch)
      Toast(`Added ${productName} to cart`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }
  const productDiscount = (((productActualPrice - productPrice)/productActualPrice)*100).toFixed(1);
  const ratingColor = productRating < 4 ? productRating <3 ? "blueviolet" : "blue" : "green";

  return (
    <div className={style.detailed_products} key={_id}>
      <img src={productImg} alt="product" className={style.product_image}/>
      <div className={style.product_desc}>
        <h2>{productName}</h2>
        <span className={style.rating} style={{backgroundColor: ratingColor}}>{productRating}⭐</span>
        <div className={style.price}>
          <h3>₹{productPrice}</h3>
          <p><del>₹{productActualPrice}</del></p>
          <p className={style.discount}>{productDiscount}% off</p>
        </div>
        <hr />
        <h4>Brand : <span className={style.text_grey}>{productBrand}</span></h4>
        <h4>Availability : <span className={style.text_grey}>{productStock ? "In Stock" : "Out of stock"}</span></h4>
        <h4>Product Description : 
          <ul className={style.text_grey}>
            {productDesc && productDesc.map(desc=><li>{desc}</li>)}
          </ul></h4>
          <div className={style.product_buttons}>
            {cartItems.find(item=>item._id===_id) ? 
            <Button buttonText={"🛒 Go to cart"} 
                    buttonBorder={true} 
                    size={"large"} 
                    className={style.changed_button_primary}
                    onClick={()=>navigate('../cart', { replace: true })}/>
            :
            <Button buttonText={"🛒 Add to cart"} 
                    buttonBorder={true} 
                    size={"large"} 
                    onClick={()=>addItemToCartHandler()}/>}

            {wishlistItems.find(item=>item._id===_id) ? 
            <Button buttonText={"🤍 Go to wishlist"} 
                    size={"large"} 
                    className={style.changed_button_secondary}
                    onClick={()=>navigate('../wishlist', { replace: true })}/>
             :
            <Button buttonText={"🤍 Add to wishlist"} 
                    size={"large"} 
                    onClick={()=>addItemToWishlistHandler()}/>}
          </div>
      </div>
    </div>
  )
}

export { DetailedProduct };