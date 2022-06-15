import React from 'react';
import { useNavigate } from 'react-router-dom';
import './House.css';

const House = ({image, text, linkPath}) => {
  const navigate = useNavigate();
  return (
    <div className="housepane">
      <img src={image} alt="House" className="house" />
      <button className="house-button" onClick={()=>navigate(`${linkPath}/${text.toLowerCase()}`, { replace: true })}>
        {text}
      </button>
    </div>
  )
}

export { House };