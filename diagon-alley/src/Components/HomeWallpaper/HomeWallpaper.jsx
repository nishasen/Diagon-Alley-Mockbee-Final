import React from 'react';
import { useTheme } from '../../Context';
import { showBackground } from '../../ThemeSetFunctions';
import './HomeWallpaper.css'; 

const HomeWallpaper = () => {
  const { state } = useTheme();
  const background = showBackground(state);
  const { bgImage, bgColor } = background;
  return (
    <div className={`${bgColor} centered home-wallpaper`}>
        <img src={bgImage} alt="background" className="bg-image"/>
    </div>
  )
}

export { HomeWallpaper }; 