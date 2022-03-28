import React from 'react';
import { HomeWallpaper, SignUpForm, Themes, TopNav } from '../../Components';

const SignUp = () => {
  return (
    <>
      <HomeWallpaper /> 
      <TopNav showHamburger={false}/>
      <Themes />
      <SignUpForm />
    </>
  )
}

export { SignUp };