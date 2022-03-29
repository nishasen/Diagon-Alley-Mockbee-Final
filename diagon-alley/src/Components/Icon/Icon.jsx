import React from 'react';
import { useTheme } from '../../Context';
import { setIconButton } from '../../ThemeSetFunctions';
import './Icon.css';

const Icon = (props) => {
  const {showBadge, children, items} = props
  const { state } = useTheme();
    const iconButton = setIconButton(state);
    const {iconColor, badgeColor} = iconButton
  return (
    <div className="badge-icon badge-wrapper">
        <button className={`btn icon-size ${iconColor}`} {...props}>
            {children}
        </button>
        {showBadge && <span className={`badge-number ${badgeColor}`}>{items}</span>}
    </div>
  )
}

export {Icon};