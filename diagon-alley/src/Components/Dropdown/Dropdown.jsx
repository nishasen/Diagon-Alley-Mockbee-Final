import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../../Context';
import './Dropdown.css';

const Dropdown = () => {
  const { checkUserLogin, setUserLogin, response } = useAuth();
  let navigate = useNavigate();
  return (
    <div className="dropdown">
        <div>{checkUserLogin && <h4 className="text-size text-secondary">Welcome, {response.firstName}</h4>}</div>
        <button onClick={()=>navigate('/address', {replace: true})}>Address</button>
        <button onClick={()=>{ localStorage.removeItem("userToken") 
                               setUserLogin(false)
                               navigate("/",  { replace: true }) }}>Logout</button>
    </div>
  )
}

export { Dropdown };
