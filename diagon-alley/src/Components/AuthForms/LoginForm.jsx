import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiEyeCloseFill } from 'react-icons/ri';
import { HiEye } from 'react-icons/hi';
import { emailRegex, passwordRegex } from '../../RegexForValidation/Validation';
import { Textfields, CheckboxRadio, Button, Toast } from '..';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../Context';

const defaultForm = {
  email: "",
  password: "",
}

const LoginForm = () => {

  let navigate = useNavigate();
  const { setResponse } = useAuth();
  const [form, setForm] = useState(defaultForm)
  const [submitMode, setSubmitMode] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    email: {
      isError: false, 
      errorMessage: "Enter a valid mail",
    }, password: {
      isError: false, 
      errorMessage: "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one special character and one number",
    }
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const validateError = validateForm(name, value);
    setError((prevValue) => ({
      ...prevValue,
      [name]: {
        ...prevValue[name],
        isError: validateError
      }
    }));
    setForm({...form, [name]: value})
  }

  const setGuestLogin = () => {
    setForm({email: "guest@gmail.com", password: "Guest123"})
  }

  const submitHandler = async(event) => {
    event.preventDefault();
    try {
      const res = await axios.post(`/api/auth/login`, {
        email: form.email,
        password: form.password,
      });
      if(res.status===200){
        setForm(defaultForm);
        Toast("Successfully logged in", "success");
        setResponse(res.data.foundUser);
        localStorage.setItem("userToken", res.data.encodedToken);
        navigate("../", { replace: true });
      }
      // saving the encodedToken in the localStorage
    } catch (error) {
      Toast("Could not log in, try again later", "error")
      console.error(error);
    }
  }

  const validateForm = (name, value) => {
    switch (name) {
      case "email":
        return !emailRegex.test(value);
      case "password":
        return !passwordRegex.test(value); 
      default:
        return false;
    }
  };

  useEffect(() => {
    let flag = false;
    Object.entries(error).forEach((i) => {
      if (i[1].isError) {
        flag = true;
      }
    });
    setSubmitMode(flag);
  }, [error]);

  return (
    <div className="main centered">
        <form className="auth-card" onSubmit={(e)=>submitHandler(e)}>
            <h2 className="text-header align-header">Login</h2>
            <Textfields label={"Email"} 
                        name={"email"} 
                        type={"email"} 
                        value={form.email} 
                        onChange={(e)=>handleChange(e)}
                        required/>
            <div className="password-fields">
              <Textfields label={"Password"} 
                          name="password" 
                          type={showPassword ? "text" : "password"} 
                          value={form.password} 
                          onChange={(e)=>handleChange(e)} required/> 
              {showPassword ? 
                <HiEye className="eye-icon" onClick={()=>setShowPassword(!showPassword)}/> : 
                <RiEyeCloseFill className="eye-icon" onClick={()=>setShowPassword(!showPassword)}/>}
            </div> 
            <div className="card-pane dis-flex">
                <CheckboxRadio 
                label={"Remember me"} 
                forLabel={"rememberMe"} 
                name={"REMEMBER_ME"} 
                type={"checkbox"} 
                value={"rememberMe"} 
                labelClassName={"text-black"} />
                <Link to="/forgot-password" className="btn-link text-primary hover-primary forgot-password">Forgot your password?</Link>
            </div>
            {error.email.isError && <div className="error-message centered"><b>{error.email.errorMessage}</b></div>}
            {error.password.isError && <div className="error-message centered"><b>{error.password.errorMessage}</b></div>}
            <div className="centered login-button">
              <Button buttonText={"Login"} 
                      size={"large"} 
                      disabled={submitMode} 
                      buttonBorder={true} 
                      errorButton={submitMode}
                      type="submit"/>
              <Button buttonText={"Guest Login"} 
                      size={"large"}
                      buttonBorder={true} 
                      type="submit"
                      onClick={setGuestLogin}/>         
            </div>                 
            <h4 className="centered">Do not have an account?<Link to="/signup" className="text-black hover-red">Sign up</Link></h4>
        </form>
    </div>
  )
}

export { LoginForm };
