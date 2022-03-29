import React from 'react';
import DiagonAlleyLogo from '../../Assets/DiagonAlleyLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div>
    <img src={DiagonAlleyLogo} alt="Logo" className="logo"/>
    </div>
  )
}

export { Logo };