import './App.css';
import CitizenServices from './components/CitizenServices/CitizenServices';
import GalleryAndCommunication from './components/GalleryAndCommunication/GalleryAndCommunication';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import EServices from './components/EServices/EServices';
import Carousel from './components/Carousel/Carousel';
import CurrentUpdate from './components/CurrentUpdate/CurrentUpdate';
import Info from './components/Info/Info';


function App() {
  return (
    <>
      <Header />
    <Carousel />
      <CurrentUpdate />
      <Info />
      <EServices />
      <CitizenServices />
      <GalleryAndCommunication />
      {/* <BottomSlider /> */}
      <Footer/>
    </>
  );
}

export default App;
