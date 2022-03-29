import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';
import DiagonAlley from '../../Assets/DiagonAlley.jpg';
import { useData } from '../../Context';
import './HeroImage.css';

function HeroImage() {
  const { dispatch, setHouseFilter, setCategoryFilter } = useData();
  return (
    <div className="hero-image-container centered">
      <img src={DiagonAlley} alt="shop by house" className="hero-image"/>
      <h2 className="text-white hero-text">Your one stop store for your favourite Harry Potter theme based clothes.</h2>
      <Link to="/product-listing" className="btn-link">
        <Button buttonText={"Shop now"} size={"large"} buttonBorder={true} onClick={()=>{
          setCategoryFilter(true)
          setHouseFilter(true)
          dispatch({type: "CLEAR_FILTERS"})}}/>
      </Link>
    </div>
  )
}

export {HeroImage} 