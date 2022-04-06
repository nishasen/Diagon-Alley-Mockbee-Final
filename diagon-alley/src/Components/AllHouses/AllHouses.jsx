import React from 'react';
import { House } from '..';
import './AllHouses.css';
import { useTheme } from '../../Context';
import { HouseDetails } from '../../GeneralFunctions';
import { setHouseTitle } from '../../ThemeSetFunctions';


const AllHouses = (props) => {
  const { state } = useTheme();
  const houseTitle = setHouseTitle(state);
  
  return (
    <div className="all-houses" {...props}>
      <h2 className={`houses-title ${houseTitle}`}>Shop by houses</h2>
      <div className="all-housespane">
          {HouseDetails.map(({HouseImage, text, linkPath})=><House image={HouseImage} text={text} linkPath={linkPath} key={text}/>)}
      </div>
    </div>
  )
}

export { AllHouses };