import React from 'react';
import { FaHamburger, FaUserAlt } from 'react-icons/fa';
import { BsSuitHeartFill, BsCartFill } from 'react-icons/bs';
import { Header, Logo, Searchbar, Icon, Button, Dropdown } from '..';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './TopNav.css';
import { useAuth, useCart, useGeneral, useWishlist } from '../../Context';

const TopNav = ({showHamburger}) => {
  const { userLogin } = useAuth();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const { cartItems } = cartState;
  const { wishlistItems } = wishlistState;
  const navigate = useNavigate();
  const { state, dispatch } = useGeneral();
  const goToWishlist = () => {
    if(userLogin){
      navigate('../wishlist', { replace: true })
    } else {
      navigate('../login', { replace: true })
    }
  }

  const goToCart = () => {
    if(userLogin){
      navigate('../cart', { replace: true })
    } else {
      navigate('../login', { replace: true })
    }
  }
  
  return (
    <div className="top-nav">
      <div className="logo-div">
      {showHamburger && <Icon showBadge={false} >
        <FaHamburger className="filter-hamburger" onClick={()=>dispatch({type: "TOGGLE_SIDENAV"})}/>
      </Icon>}
      <Link to="/">
        <Logo />
      </Link>  
      <Link to="/" className="btn-link">
        <Header />
      </Link>  
      </div>
      <div className="search-div">
        <Searchbar />
      </div>
      <div className="icon-div">  
        {userLogin ? 
        <Icon showBadge={false} 
              onMouseEnter={()=>dispatch({type: "OPEN_DROPDOWN"})} 
              onMouseLeave={()=>dispatch({type: "CLOSE_DROPDOWN"})}>
          <FaUserAlt />  
          {state.showDropdown && <Dropdown />}
        </Icon> : <Link to="/login" className="btn-link"><Button buttonText={'Login'} /></Link>}
        <Icon showBadge={true} items={wishlistItems.length} onClick={()=>goToWishlist()}>
          <BsSuitHeartFill />
        </Icon>
        <Icon showBadge={true} items={cartItems.length} onClick={()=>goToCart()}>
          <BsCartFill />
        </Icon>
      </div>
    </div>
  )
}

export { TopNav };
