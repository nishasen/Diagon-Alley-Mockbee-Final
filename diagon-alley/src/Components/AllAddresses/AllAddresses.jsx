import React from 'react';
import { AddressBox, Button, Icon } from '..';
import './AllAddresses.css';
import { BsPlusSquare } from 'react-icons/bs';
import { useData, useGeneral } from '../../Context';

const AllAddresses = () => {
  const { dispatch } = useGeneral();
  
  return (
    <div className="dis-flex all-addresses">
      <div className="add-address centered" onClick={()=>dispatch({type: "TOGGLE_ADDRESS"})}>
        <Icon><BsPlusSquare /></Icon>
        <h4>Add new adress</h4>
      </div>
      <AddressBox />
    </div>
  )
}

export { AllAddresses };
