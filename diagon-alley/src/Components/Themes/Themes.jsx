import React from 'react';
import Gryffindor from "../../Assets/HouseLogos/Gryffindor.png";
import Hufflepuff from "../../Assets/HouseLogos/Hufflepuff.png";
import Ravenclaw from "../../Assets/HouseLogos/Ravenclaw.png";
import Slytherin from "../../Assets/HouseLogos/Slytherin.png";
import style from './Themes.module.css'; 
import { useTheme } from '../../Context';

const Themes = () => {
    const { dispatch} = useTheme();
  return (
    <div className={style.themes}>
        <img src={Gryffindor} 
            alt="Gryffindor" 
            className={`${style.theme_logos} ${style.gryffindor}`}
            onClick={()=>dispatch({type: "gryffindor"})}/>
        <img src={Hufflepuff} 
            alt="Hufflepuff" 
            className={`${style.theme_logos} ${style.hufflepuff}`}
            onClick={()=>dispatch({type: "hufflepuff"})}/>
        <img src={Ravenclaw} 
            alt="Ravenclaw" 
            className={`${style.theme_logos} ${style.ravenclaw}`}
            onClick={()=>dispatch({type: "ravenclaw"})}/>
        <img src={Slytherin} 
            alt="Slytherin" 
            className={`${style.theme_logos} ${style.slytherin}`}
            onClick={()=>dispatch({type: "slytherin"})}/>
    </div>
  )
}

export { Themes };