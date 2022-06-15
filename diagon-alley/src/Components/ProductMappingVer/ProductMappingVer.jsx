import React from 'react';
import { VerticalCard, WishlistCard, Loader } from '..';
import { ImSpinner } from "react-icons/im";
import { useData, useWishlist } from '../../Context';
import './ProductMappingVer.css';

const ProductMappingVer = ({showWishlist}) => {
  const { Products, loading } = useData();
  const { wishlistLoading, wishlistState } = useWishlist();
  const { wishlistItems } = wishlistState;
  return (
    <div className="dis-flex product-align">
        {showWishlist ? 
          wishlistLoading ? <ImSpinner className="loader" /> : 
                            wishlistItems.length===0 ? 
                            <h1 className="wishlist-text">Your wishlist is empty</h1> : 
                            wishlistItems.map(Product => <WishlistCard Product={Product}/>) : 
          loading ? <ImSpinner className="loader" /> : 
                    Products.map(Product=> <VerticalCard key={Product.id} Product={Product} />)
          }
    </div>
  )
}

export { ProductMappingVer };