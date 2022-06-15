import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../Context';
import './BigCategoryButton.css';
import { setHouseTitle } from '../../ThemeSetFunctions';
import { CategoryDetails } from '../../GeneralFunctions';

const BigCategoryButton = () => {
  const { state } = useTheme();
  const houseTitle = setHouseTitle(state);
  const navigate = useNavigate();
  return ( 
    <div className="all-houses">
      <h2 className={`houses-title ${houseTitle}`}>Shop by category</h2>
      <div className="category-button">
        {CategoryDetails.map(({categoryImage, text, linkPath})=>
        <button className="button-style" key={text} onClick={()=> navigate(`${linkPath}/${text.toLowerCase()}`, { replace: true })}>
          <img src={categoryImage} alt="category" className="image-size"/>
          <h3>{text}</h3>
        </button>)}
      </div>
    </div> 
  )
}

export { BigCategoryButton }; 