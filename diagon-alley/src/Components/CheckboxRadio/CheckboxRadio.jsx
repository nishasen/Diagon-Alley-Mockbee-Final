import React from 'react';
import './CheckboxRadio.css';
const CheckboxRadio = (props) => {
  const {fieldLabel, fieldName, fieldValue, fieldType, fieldLabelClassName, fieldForLabel} = props;
  const Label = fieldLabelClassName.concat(" input-label")
  return (
    <div className="dis-flex box-space">
        <input 
          type={fieldType} 
          name={fieldName} 
          value={fieldValue} 
          id={fieldForLabel} 
          className="checkbox-radio" {...props}/>
        <label htmlFor={fieldForLabel} className={Label}>{fieldLabel}</label>
    </div>
  )
}

export { CheckboxRadio };
