import React from 'react';
import { Button, Icon, Toast } from '..';
import { IoHeart } from 'react-icons/io5';
import style from './WishlistCard.module.css';
import { AddToCart, IncrDecrQuantity, RemoveFromWishlist } from '../../APICall';
import { useAuth, useCart, useWishlist } from '../../Context';

const WishlistCard = ({ Product }) => {
  const {
    _id,
    productImg, 
    productAddedInMonths,
    productName,
    productRating, 
    productPrice, 
    productActualPrice,
    }  = Product;
  const { cartState, cartDispatch } = useCart();
  const { cartItems } = cartState;
  const { wishlistDispatch } = useWishlist();
  const productDiscount = (((productActualPrice - productPrice)/productActualPrice)*100).toFixed(1);
  const showNew = productAddedInMonths===1 ? true : false;
  const ratingColor = productRating < 4 ? productRating <3 ? "blueviolet" : "blue" : "green";

  const setWishlistPage = () => {
    if(!(cartItems.find(item => item._id===Product._id))) {
      AddToCart(Product, cartDispatch);
    } else {
      IncrDecrQuantity(_id, cartDispatch, "increment");
    }
    RemoveFromWishlist(_id, wishlistDispatch) 
    Toast(`Added ${productName} to cart and removed from wishlist`, "success")
  }

  return (
    <>
    <div className={`${style.product_card} dis-grid`} key={_id}> 
      <div className={`badge-wrapper ${style.image_container}`}>
          {showNew && <span className="badge-text badge-box-square fire-bgcolor badge-over-image"><b>New</b></span>}
          <img src={productImg} className={style.product_image} alt="product"/>
      </div> 
      <div className={style.card_top_icon}> 
          <Icon showBadge={false} color={'red'}>
              <IoHeart onClick={()=>{
                Toast(`Removed ${productName} from wishlist`, "warning")
                RemoveFromWishlist(_id, wishlistDispatch)}}/>
          </Icon>
      </div>
      <div className={style.card_product_detail}>
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
      <Button buttonText={"Add to cart"} size={"large"} buttonBorder={true} onClick={setWishlistPage}/>        
    </div>
    </>
  )
}

export { WishlistCard };