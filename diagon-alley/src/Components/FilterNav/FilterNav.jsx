import React from 'react';
import { Button, CheckboxRadio } from '..';
import { Link } from 'react-router-dom';
import style from './FilterNav.module.css';
import { useData } from '../../Context';
import { FilterOutDetail, SortByDetail, FilterHouseLinks, FilterCategoryLinks } from '../../GeneralFunctions';

const FilterNav = () => {
  const {state, dispatch, houseFilter, categoryFilter} = useData();  
  const {sortBy, onlyInStock, fastDelivery, ratingAbove4, range, newProduct, houseState, categoryState} = state;
  const FilterOut = FilterOutDetail(onlyInStock, fastDelivery, ratingAbove4, newProduct);
  const SortByPrice = SortByDetail(sortBy);
  return (
    <div className={style.filter_nav}>
        <div className={style.filter_nav_top}>
            <h3 className="text-white">Filters</h3>
            <Button buttonText={"Clear"} color={"primary"} onClick={()=>dispatch({type: "CLEAR_FILTERS"})}/>
        </div>
        <h4 className={`dis-inline ${style.filter_heading}`}>Price : ₹{range}</h4>
        <div className="slider-container">
            <input 
                type="range" 
                min={0} 
                max={3000} 
                value={range} 
                step={500} 
                name="PRICE_RANGE" 
                list="ticks" 
                className="slider"
                onChange={(e) =>
                    dispatch({ type: "PRICE_RANGE", payload: e.target.value })}/>
            <datalist className={style.datalist} id="ticks">
                <option value="0" label="0"></option>
                <option value="1500" label="1500"></option>
                <option value="2500" label="3000"></option>
            </datalist>
        </div>
        
        <h4 className={style.filter_heading}>Filter out</h4>
        {FilterOut.map(({
            label, 
            forLabel,
            name, 
            type, 
            value,
            filter,
            labelClassName}) => <CheckboxRadio label={label}
                                                    forLabel={forLabel}
                                                    name={name}
                                                    type={type}
                                                    value={value}
                                                    labelClassName={labelClassName}
                                                    checked={filter}
                                                    onChange={(e)=>dispatch({type: name, payload: e.target.checked})}/>)}
        <h4 className={style.filter_heading}>Sort by</h4>
        {SortByPrice.map(({
            label, 
            forLabel,
            name, 
            type, 
            value,
            filter,
            labelClassName}) => <CheckboxRadio label={label} 
                                                    forLabel={forLabel} 
                                                    name={name} 
                                                    type={type} 
                                                    value={value} 
                                                    labelClassName={labelClassName}
                                                    checked={filter === value}
                                                    onChange={()=>dispatch({type: name, payload: value})}/>)}

        {houseFilter && <h4 className={style.filter_heading}>Show house</h4>}
        {houseFilter &&  <div className={`dis-grid ${style.house_links}`}>
            {FilterHouseLinks.map(({ labelName, image })=>
            <label HTMLFor={labelName} className={style.check_link}>
                <input 
                    type="checkbox" 
                    id={labelName} 
                    name="houses" 
                    value={labelName} 
                    className={style.checkbox_size}
                    checked={houseState.includes(labelName)}
                    onClick={(e)=>dispatch({type: "HOUSE_FILTER", payload: labelName})}/>
                    <div className={`avatar avatar-xs-size ${style.house_avatar}`}>
                        <img src={image} className="img-responsive img-round" alt="avatar"/>
                    </div>
            </label>
            )}
        </div>}

        {categoryFilter && <h4 className={style.filter_heading}>Show category</h4>}
        {categoryFilter && <div className={`dis-grid ${style.house_links}`}>
            {FilterCategoryLinks.map(({ labelName, text, avatarColor })=>
            <label HTMLFor={labelName} className={style.check_link}>
                <input 
                    type="checkbox" 
                    id={labelName} 
                    name="category" 
                    value={labelName} 
                    className={style.checkbox_size}
                    checked={categoryState.includes(labelName)}
                    onClick={(e)=>dispatch({type: "CATEGORY_FILTER", payload: labelName})}/>
                    <div className={`avatar avatar-xs-size avatar-text ${avatarColor} ${style.house_avatar}`}>
                        {text}
                    </div>
            </label> 
            )}
        </div>}
    </div>
  )
}

export { FilterNav };