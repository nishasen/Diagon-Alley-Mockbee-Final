import React, { useEffect, useState } from 'react';
import { Button, CheckboxRadio, Textfields } from '..';
import { useData, useGeneral } from '../../Context';
import './AddressContainer.css';
import { v4 as uuid } from "uuid";

const defaultForm = {
    name: "",
    address: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phoneNo: "",
    addressType: "home",
    setAsDefault: false
}

const AddressContainer = () => {
    const { state, dispatch: generalDispatch } = useGeneral();
    const { showAddressBox } = state;
    const { dispatch, form, setForm } = useData();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        form.hasOwnProperty('_id') ? 
            dispatch({type: "EDIT_ADDRESS", payload: form}) 
            :
            dispatch({type: "ADD_ADDRESS", payload: {...form, _id: uuid(), setAsDefault: false}});
        generalDispatch({type: "TOGGLE_ADDRESS"});    
        setForm(defaultForm);
    }

  return (
    <div className="address-container dis-flex">
        {showAddressBox && <form className="container-box dis-flex" onSubmit={(e)=>handleSubmit(e)}>
            <Textfields label="Name" name="name" type="text" value={form.name} onChange={(e)=>handleChange(e)} required/>
            <Textfields label="Address" name="address" type="text" value={form.address} onChange={(e)=>handleChange(e)} required/>
            <Textfields label="Street" name="street" type="text" value={form.street} onChange={(e)=>handleChange(e)}/>
            <Textfields label="City" name="city" type="text" value={form.city} onChange={(e)=>handleChange(e)} required/>
            <Textfields label="State" name="state" type="text" value={form.state} onChange={(e)=>handleChange(e)} required/>
            <Textfields label="Pincode" name="pincode" type="number" value={form.pincode} onChange={(e)=>handleChange(e)} required/>
            <Textfields label="Phone No." name="phoneNo" type="number" value={form.phoneNo} onChange={(e)=>handleChange(e)} required/>
            <h4>Address Type</h4>
            <div className="dis-flex address-type">
                <CheckboxRadio 
                    label="Home" 
                    name="addressType" 
                    value="home" 
                    type="radio" 
                    checked={form.addressType==="home"}
                    labelClassName="text-white"
                    forLabel="home"
                    onChange={(e)=>handleChange(e)} required/>
                <CheckboxRadio 
                    label="Work" 
                    name="addressType" 
                    value="work" 
                    type="radio" 
                    checked={form.addressType==="work"}
                    labelClassName="text-white"
                    forLabel="work"
                    onChange={(e)=>handleChange(e)} required/>
                <CheckboxRadio 
                    label="Other" 
                    name="addressType" 
                    value="other" 
                    type="radio" 
                    checked={form.addressType==="other"}
                    labelClassName="text-white"
                    forLabel="other"
                    onChange={(e)=>handleChange(e)} required/>        
            </div>     
            <div className="dis-flex address-actions">
                <Button buttonText="Save" type="submit" buttonBorder={true} size="large"/>
                <Button buttonText="Cancel" size="large" type="reset" onClick={()=>{
                    generalDispatch({type: "TOGGLE_ADDRESS"})
                    setForm(defaultForm)}}/>
            </div>
        </form>}
    </div>
  )
}

export {AddressContainer};

//rzp_test_pGTlvnfaSbN597
//loc6RtFaiYAFhUGrV0l5OmIv