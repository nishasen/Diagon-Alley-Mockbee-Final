import React, { useState } from 'react';
import { useData, useTheme } from '../../Context';
import { setSearchBar } from '../../ThemeSetFunctions';
import style from './Searchbar.module.css';
import './Searchbar.css';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const { state } = useTheme();
  const { dispatch } = useData();
  const searchBar = setSearchBar(state);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className={style.searchbar} onSubmit={(e)=>handleSubmit(e)}>
        <input type="search" placeholder="Search your choice..." value={searchText} onChange={(e)=>setSearchText(e.target.value)} className={`basic-textfield-outlined ${style.search_box}`}/>
        <button type="submit" className={`btn-md icon-md ${style.search_button} ${searchBar}`} onClick={()=>{
          dispatch({type: "SEARCH_PRODUCT", payload: searchText})
          navigate("/product-listing/all-products", {replace: true})}}>
          Search
        </button>
    </form>
  )
}

export {Searchbar};