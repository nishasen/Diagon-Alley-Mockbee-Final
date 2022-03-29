import React from 'react';
import { useTheme } from '../../Context';
import { setButtonColor } from '../../ThemeSetFunctions';
import './Button.css';

const Button = (props) => {

  const { state } = useTheme();
  const buttonColor = setButtonColor(state);

  const {size, buttonText, buttonBorder, errorButton} = props;
    const buttonSize = size === 'large' ? "big-btn" : "";
    const addBorder = buttonBorder ? "button-border" : "";
    const disableButton = errorButton ? "disable-button" : "";
  return (
        <button className={`button btn-md ${buttonSize} ${buttonColor} ${addBorder} ${disableButton}`} {...props}>
            {buttonText}
        </button>
  )
}

export { Button };