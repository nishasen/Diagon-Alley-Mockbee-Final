import React from 'react';
import { useTheme } from '../../Context';
import { setSearchBar } from '../../ThemeSetFunctions';
import style from './Searchbar.module.css';
import './Searchbar.css';

const Searchbar = () => {
  const { state } = useTheme();
  const searchBar = setSearchBar(state);
  return (
    <div className={style.searchbar}>
        <input type="search" placeholder="Search your choice..." className={`basic-textfield-outlined ${style.search_box}`}/>
        <button className={`btn-md icon-md ${style.search_button} ${searchBar}`}>
          Search
        </button>
    </div>
  )
}

export {Searchbar};