import React, { useState } from 'react';
import style from './VerticalCard.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useAuth, useCart, useData, useWishlist } from '../../Context';
import { AddToWishlist, RemoveFromWishlist, AddToCart, RemoveFromCart } from '../../APICall';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';
import { Icon, Button, Toast } from '..';

const VerticalCard = ({ Product }) => {
  const {
    _id,
    productImg, 
    productAddedInMonths,
    productName,
    productRating, 
    productPrice, 
    productActualPrice,
  }  = Product;
  
  let navigate = useNavigate();
  let { userLogin } = useAuth();
  const { setShowProduct, dispatch } = useData();  
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlistItems } = wishlistState;
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const productDiscount = (((productActualPrice - productPrice)/productActualPrice)*100).toFixed(1);
  const showNew = productAddedInMonths===1 ? true : false;
  const ratingColor = productRating < 4 ? productRating <3 ? "blueviolet" : "blue" : "green";

  const addItemToWishlistHandler = () => {
    if(userLogin) {
      AddToWishlist(Product, wishlistDispatch)
      Toast(`Added ${productName} to wishlist`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }
  const addItemToCartHandler = () => {
    if(userLogin) {
      AddToCart(Product, cartDispatch)
      Toast(`Added ${productName} to cart`, "success")
    } else {
      navigate('../login', { replace: true })
    }
  }

  const removeItemFromWishlist = () => {
    if(userLogin) {
      RemoveFromWishlist(_id, wishlistDispatch);
      Toast(`Removed ${productName} from wishlist`, "warning");
    } else {
      Toast(`Cannot remove item, you are not logged in`, "error");
    }
  }

  const removeItemFromCart = () => {
    if(userLogin) {
      RemoveFromCart(_id, cartDispatch);
      Toast(`Removed ${productName} from cart`, "warning");
    } else {
      Toast(`Cannot remove item, you are not logged in`, "error");
    }
  }

  return (
    <>  
      <div className={`${style.product_card} dis-grid`} key={_id}> 
        <div className={`badge-wrapper ${style.image_container}`}>
            {showNew && <span className="badge-text badge-box-square fire-bgcolor badge-over-image"><b>New</b></span>}
            <Link to="product-detail" className="btn-link text-black">
              <img src={productImg} className={style.product_image} alt="product" onClick={()=>{
                                                                        setShowProduct(Product)
                                                                        dispatch({type: "CLEAR_FILTERS"})}}/>
            </Link>  
        </div> 
        <div className={style.card_top_icon}> 
        {wishlistItems.find(item=>item._id===Product._id) ? 
          <Icon showBadge={false} onClick={removeItemFromWishlist}>
              <IoHeart />
          </Icon> :
          <Icon showBadge={false} onClick={addItemToWishlistHandler}>
              <IoHeartOutline />
          </Icon>}
        </div>
        <Link to="product-detail" className="btn-link text-black">
          <div className={style.card_product_detail} onClick={()=>{
                                                      setShowProduct(Product)
                                                      dispatch({type: "CLEAR_FILTERS"})}}>
            <div className={style.desc_pane}>
              <h4 className="wrap-inline">{productName}</h4>
              <span className={style.rating} style={{backgroundColor: ratingColor}}>{productRating}⭐</span>
            </div>
            <div className={style.price_pane}>
              <h4>₹{productPrice}</h4>
              <p><del>₹{productActualPrice}</del></p>
              <p className={style.discount}>{productDiscount}%</p>
            </div>
          </div>
        </Link>
        {cartItems.find(item=>item._id===Product._id) ? 
          <Button 
            buttonText={"Remove from cart"} 
            size={"large"} 
            buttonBorder={true} 
            className={style.changed_button_primary}
            onClick={removeItemFromCart}/> : 
          <Button 
            buttonText={"Add to cart"} 
            size={"large"} 
            buttonBorder={true}
            onClick={addItemToCartHandler} />}
      </div>
    </>
  )
}

export { VerticalCard };