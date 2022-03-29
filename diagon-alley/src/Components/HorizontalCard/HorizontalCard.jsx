import React from 'react';
import { Button, Toast } from '..';
import { AddToWishlist, IncrDecrQuantity, RemoveFromCart } from '../../APICall';
import { useCart, useWishlist } from '../../Context';
import style from './HorizontalCard.module.css';

const HorizontalCard = ({Product}) => {
  const {_id,
    productImg,    
    productName,  
    productPrice, 
    productActualPrice, 
    qty} = Product;
    const { cartDispatch } = useCart();
    const { wishlistState, wishlistDispatch } = useWishlist();
    const { wishlistItems } = wishlistState;
    const productDiscount = (((productActualPrice - productPrice)/productActualPrice)*100).toFixed(1);

    const setCartPage = () => {
      if(!(wishlistItems.find(item => item._id===Product._id))){
        AddToWishlist(Product, wishlistDispatch);
      }
      RemoveFromCart(_id, cartDispatch);
      Toast(`Added ${productName} to wishlist and removed from cart`, "success")
    }

  return (
    <div class={`${style.product_card} dis-flex`} key={_id}>
      <div class={`${style.image_pane} dis-flex`}>
        <img src={productImg} class={`${style.product_image}`} alt="product" />
      </div>
      <div class={`${style.card_content} dis-flex`}>
          <h3 className="text-primary">{productName}</h3>
          <div class={`${style.price} dis-flex`}>
              <h4>₹{productPrice}</h4>
              <p><del>₹{productActualPrice}</del></p>
              <p className={style.discount}>{productDiscount}%</p>
          </div>
          <div class={style.btn_counter}>
              <button className="btn btn-md btn-primary-floating btn-floating floating-md"
                      onClick={()=>{
                        Toast(`Increased quantity of ${productName}`, "success")
                        IncrDecrQuantity(_id, cartDispatch, "increment")}}>+</button>
              <input className="basic-textfield-outlined item-counter"
                       type="text" value={qty} onChange={()=>{}}/>
              {qty < 2 ?<button className={`btn-md btn-floating floating-md ${style.disabled_btn}`}>-</button> 
                        : 
                        <button className="btn btn-md btn-primary-floating btn-floating floating-md"
                        onClick={()=>{
                        Toast(`Decreased quantity of ${productName}`, "success")
                        IncrDecrQuantity(_id, cartDispatch, "decrement")}}>-</button>}
          </div>
          <Button 
            buttonText={"❤ Move to wishlist"} 
            size={"large"} 
            buttonBorder={true}
            onClick={setCartPage}/>
          <Button 
            buttonText={"Remove from cart"} 
            size={"large"} 
            onClick={()=>{
              Toast(`Removed ${productName} from cart`, "warning")
              RemoveFromCart(_id, cartDispatch)}}/>
      </div>
    </div>
  )
}

export { HorizontalCard };