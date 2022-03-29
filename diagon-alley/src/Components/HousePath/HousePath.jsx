import React from 'react';
import { Link } from 'react-router-dom';
import style from './HousePath.module.css';
import { FilterHouseLinks, FilterCategoryLinks } from '../../GeneralFunctions';
import { useData } from '../../Context';
import { setHouseTitle } from '../../ThemeSetFunctions';

const HousePath = () => {
    const { dispatch, setHouseFilter, setCategoryFilter } = useData();
  return (
    <div className={style.house_path}>
        <h3 className={style.housepath_heading}><u>Shop more</u></h3>
        <h4 className={style.housepath_heading}>Shop by house</h4>
        <div className={`dis-grid ${style.house_links}`}>
            {FilterHouseLinks.map(({image, linkPath, labelName})=>
                <Link to={`${linkPath}/${labelName.toLowerCase()}`} className="btn-link">
                <div className={`avatar avatar-xs-size ${style.house_avatar}`} 
                    onClick={()=>{
                        dispatch({type: "HOME_HOUSE", payload: labelName})
                        setHouseFilter(false)
                        setCategoryFilter(true)}}>
                    <img src={image} className="img-responsive img-round" alt="avatar"/>
                </div>
             </Link>
            )}
        </div>
        <h4 className={style.housepath_heading}>Shop by category</h4>
        <div className={`dis-grid ${style.house_links}`}>
            {FilterCategoryLinks.map(({text, linkPath, avatarColor, labelName})=>
                <Link to={`${linkPath}/${labelName.toLowerCase()}`} className="btn-link">
                    <div className={`avatar avatar-xs-size avatar-text ${avatarColor} ${style.house_avatar}`} 
                        onClick={()=>{
                            dispatch({type: "HOME_CATEGORY", payload: labelName})
                            setHouseFilter(true)
                            setCategoryFilter(false)}}>
                        {text}
                    </div>
                </Link>
            )}
        </div>
    </div>
  )
}

export { HousePath };