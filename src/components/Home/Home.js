import React from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel';
import CurrentUpdate from '../CurrentUpdate/CurrentUpdate';
import Info from '../Info/Info';
import EServices from '../EServices/EServices';
import CitizenServices from '../CitizenServices/CitizenServices';
import GalleryAndCommunication from '../GalleryAndCommunication/GalleryAndCommunication';
import SocialMediaSection from "../SocialMediaSection/SocialMediaSection"
import BottomSlider from '../BottomSlider/BottomSlider'
import Footer from '../Footer/Footer';


const Home = () => {
  return (
    <>
    <Header />
    <Carousel />
    <CurrentUpdate />
    <Info />
    <EServices />
     <CitizenServices />
     <GalleryAndCommunication />
     <BottomSlider />
     {/* <SocialMediaSection/> */}
     <Footer />
    </>
  )
}

export default Home