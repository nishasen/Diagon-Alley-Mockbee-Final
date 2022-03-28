import React from 'react';
import { Link } from 'react-router-dom';
import { useData, useTheme } from '../../Context';
import './BigCategoryButton.css';
import { setHouseTitle } from '../../ThemeSetFunctions';
import { CategoryDetails } from '../../GeneralFunctions';

const BigCategoryButton = () => {
  const { dispatch, setHouseFilter, setCategoryFilter } = useData();
  const { state } = useTheme();
  const houseTitle = setHouseTitle(state);
  return ( 
    <div className="all-houses">
      <h2 className={`houses-title ${houseTitle}`}>Shop by category</h2>
      <div className="category-button">
        {CategoryDetails.map(({categoryImage, text, linkPath})=>
        <button className="button-style" onClick={()=>{
            dispatch({type: "HOME_CATEGORY", payload: text}) 
            setCategoryFilter(false)
            setHouseFilter(true)}}>
          <Link to={`${linkPath}/${text.toLowerCase()}`} className="btn-link text-black">
            <img src={categoryImage} alt="category" className="image-size"/>
            <h3>{text}</h3>
          </Link>
        </button>)}
      </div>
    </div> 
  )
}

export { BigCategoryButton }; 