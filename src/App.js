import './App.css';
import CitizenServices from './components/CitizenServices/CitizenServices';
import GalleryAndCommunication from './components/GalleryAndCommunication/GalleryAndCommunication';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <CitizenServices />
      <GalleryAndCommunication />
      <Footer/>
    </>
  );
}

export default App;
