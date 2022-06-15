import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './HousePath.module.css';
import { FilterHouseLinks, FilterCategoryLinks } from '../../GeneralFunctions';

const HousePath = () => {
    const navigate = useNavigate();
  return (
    <div className={style.house_path}>
        <h3 className={style.housepath_heading}><u>Shop more</u></h3>
        <h4 className={style.housepath_heading}>Shop by house</h4>
        <div className={`dis-grid ${style.house_links}`}>
            {FilterHouseLinks.map(({image, linkPath, labelName})=>
                <div className={`avatar avatar-xs-size ${style.house_avatar}`} 
                    onClick={()=>navigate(`${linkPath}/${labelName.toLowerCase()}`, { replace: true })}>
                    <img src={image} className="img-responsive img-round" alt="avatar"/>
                </div>
            )}
        </div>
        <h4 className={style.housepath_heading}>Shop by category</h4>
        <div className={`dis-grid ${style.house_links}`}>
            {FilterCategoryLinks.map(({text, linkPath, avatarColor, labelName})=>
                <div className={`avatar avatar-xs-size avatar-text ${avatarColor} ${style.house_avatar}`} 
                    onClick={()=>navigate(`${linkPath}/${labelName.toLowerCase()}`, { replace: true })}>
                    {text}
                </div>
            )}
        </div>
    </div>
  )
}

export { HousePath };