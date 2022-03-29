import React from 'react';
import './CheckboxRadio.css';
const CheckboxRadio = (props) => {
  const {label, name, value, type, labelClassName, forLabel} = props;
  const Label = labelClassName.concat(" input-label")
  return (
    <div className="dis-flex box-space">
        <input 
          type={type} 
          name={name} 
          value={value} 
          id={forLabel} 
          className="checkbox-radio" {...props}/>
        <label htmlFor={forLabel} className={Label}>{label}</label>
    </div>
  )
}

export { CheckboxRadio };
