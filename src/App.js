import './App.css';
import CitizenServices from './components/CitizenServices/CitizenServices';
import GalleryAndCommunication from './components/GalleryAndCommunication/GalleryAndCommunication';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import EServices from './components/EServices/EServices';

function App() {
  return (
    <>
      <Header />
      <EServices />
      <CitizenServices />
      <GalleryAndCommunication />
      {/* <BottomSlider /> */}
      <Footer/>
    </>
  );
}

export default App;
