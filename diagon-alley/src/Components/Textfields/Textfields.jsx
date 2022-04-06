import React from 'react';
import './Textfields.css';

const Textfields = (props) => {
  const {label, name, type, value} = props;
  return (
    <div className="basic-textfield-outlined textfield-label ">
        <label htmlFor={name} className="text-label">{label}</label>
        <input 
          type={type} 
          name={name} 
          value={value} 
          className="field-size" {...props}/>
    </div>
  )
}

export { Textfields };