import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Toast } from '..';
import { AddToCart, AddToWishlist } from '../../APICall';
import { useAuth, useCart, useWishlist } from '../../Context';
import style from './DetailedProduct.module.css';

const DetailedProduct = ({getProduct}) => {
  const { userLogin } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;
  const navigate = useNavigate();
  const addItemToWishlistHandler = () => {
    if(userLogin) {
      AddToWishlist(getProduct, wishlistDispatch)
      Toast(`Added ${getProduct?.productName} to wishlist`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }
  const addItemToCartHandler = () => {
    if(userLogin) {
      AddToCart(getProduct, cartDispatch)
      Toast(`Added ${getProduct?.productName} to cart`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }
  const productDiscount = (((getProduct?.productActualPrice - getProduct?.productPrice)/getProduct?.productActualPrice)*100).toFixed(1);
  const ratingColor = getProduct?.productRating < 4 ? getProduct?.productRating <3 ? "blueviolet" : "blue" : "green";

  return (
    <div className={style.detailed_products} key={getProduct?.id}>
      <img src={getProduct?.productImg} alt="product" className={style.product_image}/>
      <div className={style.product_desc}>
        <h2>{getProduct?.productName}</h2>
        <span className={style.rating} style={{backgroundColor: ratingColor}}>{getProduct?.productRating}⭐</span>
        <div className={style.price}>
          <h3>₹{getProduct?.productPrice}</h3>
          <p><del>₹{getProduct?.productActualPrice}</del></p>
          <p className={style.discount}>{productDiscount}% off</p>
        </div>
        <hr />
        <h4>Brand : <span className={style.text_grey}>{getProduct?.productBrand}</span></h4>
        <h4>Availability : <span className={style.text_grey}>{getProduct?.productStock ? "In Stock" : "Out of stock"}</span></h4>
        <h4>Product Description : 
          <ul className={style.text_grey}>
            {getProduct?.productDesc && getProduct?.productDesc.map((desc, index)=><li key={index}>{desc}</li>)}
          </ul></h4>
          <div className={style.product_buttons}>
            {cartItems.find(item=>item._id===getProduct?._id) ? 
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

            {wishlistItems.find(item=>item._id===getProduct?._id) ? 
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