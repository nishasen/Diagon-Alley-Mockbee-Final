import React from 'react'
import { TopNav, HomeWallpaper, AllHouses, Themes, HeroImage, BigCategoryButton, Footer } from '../../Components';

const LandingPage = () => {

  return (
    <>
      <HomeWallpaper />
      <HeroImage />
      <TopNav showHamburger={false}/>
      <Themes />  
      <AllHouses />
      <BigCategoryButton />
      <Footer />
    </>
  )
}

export { LandingPage } 