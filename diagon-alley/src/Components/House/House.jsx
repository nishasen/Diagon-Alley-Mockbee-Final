import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../Context';
import './House.css';

const House = ({image, text, linkPath}) => {
  const { dispatch, setHouseFilter, setCategoryFilter } = useData();
  return (
    <div className="housepane">
      <img src={image} alt="House" className="house" />
      <Link to={`${linkPath}/${text.toLowerCase()}`}>
        <button className="house-button" onClick={()=>{
          dispatch({type: "HOME_HOUSE", payload: text}) 
          setHouseFilter(false)
          setCategoryFilter(true)}}>
          {text}
        </button>
      </Link>
    </div>
  )
}

export { House };