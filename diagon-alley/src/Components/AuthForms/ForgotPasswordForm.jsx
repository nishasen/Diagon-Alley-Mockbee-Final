import React from 'react';
import { Textfields, Button } from '..';
import './Auth.css';

const ForgotPasswordForm = () => {
  return (
    <div className="main centered">
        <form className="auth-card" onSubmit={(e)=>SubmitHandler(e)}>
            <h2 className="text-header align-header">Change your password</h2>
            <Textfields fieldLabel={"New Password"} fieldName={"password"} fieldType={"password"} fieldValue={""}/>
            <Textfields fieldLabel={"Confirm Password"} fieldName={"confirm-password"} fieldType={"password"} fieldValue={""}/>
            <div className="text-span centered"><b>Error</b></div>
            <div className="centered">
                <Button buttonText={"Reset password"} size={"large"} buttonBorder={true} type="submit"/>
            </div>
        </form>
    </div>
  )
}

export { ForgotPasswordForm };
