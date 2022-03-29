import React from 'react';
import { useTheme, useData } from '../../Context';
import { changeHeaderColor } from '../../ThemeSetFunctions';
import './Header.css';

const Header = () => {
  const { state } = useTheme();
  const headerColor = changeHeaderColor(state); 
  const { dispatch } = useData();
  return (
    <div className={`${headerColor} header`} onClick={()=>dispatch({type: "CLEAR_FILTERS"})}>Diagon Alley</div>
  )
}

export {Header};
