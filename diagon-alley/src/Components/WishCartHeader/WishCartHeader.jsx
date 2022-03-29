import React from 'react';
import './WishCartHeader.css';

const WishCartHeader = ({text, items}) => {
  return (
    <div className="wish-cart-header">
        <span className="header-span">{text} ({items})</span>
    </div>
  )
}

export { WishCartHeader }; 