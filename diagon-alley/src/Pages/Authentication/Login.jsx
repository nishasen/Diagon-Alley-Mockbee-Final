import React from 'react'
import { HomeWallpaper, TopNav, LoginForm, Themes } from '../../Components';

const Login = () => {
  return (
    <>
      <HomeWallpaper /> 
      <TopNav showHamburger={false}/>
      <Themes />
      <LoginForm />
    </>
  )
}

export { Login };