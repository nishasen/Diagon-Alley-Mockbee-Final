import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '..';
import { useData, useGeneral } from '../../Context';

const AddressBox = ({Checkout}) => {
    const { dispatch } = useGeneral();
    const { state, setForm, dispatch: productDispatch } = useData();
    const navigate = useNavigate();
  return (
    <>
      {state?.addresses.map(address => 
      <div className={`address-box ${address.setAsDefault && "set-border"}`}>
        <div className="address-tag">{address.addressType}</div>
        <h4 className="address-name">{address.name}</h4>
        <p className="address-body">{address.address}</p>
        <p className="address-body">{address.street ? address.street : ""}</p>
        <p className="address-body">{address.city}, {address.state}</p>
        <p className="address-body"><span>Pincode - </span>{address.pincode}</p>
        <div className="address-body"><span>Phone no. - </span>{address.phoneNo}</div>
        <div className="address-button">
          {!address.setAsDefault && <div className="default-set" onClick={()=>productDispatch({type: "DEFAULT_ADDRESS", payload: address._id})}>{Checkout ? "Set Address" : "Set as default"}</div>}
          <Button buttonText="Edit" buttonBorder={true} onClick={()=>{  
            setForm(address)
            dispatch({type: "TOGGLE_ADDRESS"})
            navigate('/address', {replace: true})}}/>
          <Button buttonText="Delete" onClick={()=>productDispatch({type: "DELETE_ADDRESS", payload: address._id})}/>
        </div>
      </div>)}
    </>
  )
}

export { AddressBox };
