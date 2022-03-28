import React from 'react';
import { ForgotPasswordForm, HomeWallpaper, Themes, TopNav } from '../../Components';

const ForgotPassword = () => {
  return (
    <>
      <HomeWallpaper /> 
      <TopNav showHamburger={false}/>
      <Themes />
      <ForgotPasswordForm />
    </>
  )
}

export { ForgotPassword };
