import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import StickyFeedback from "./components/StickyFeedback/StickyFeedback";
import Location from "./components/Location/Location";
import BottomSlider from "./components/BottomSlider/BottomSlider";
import Commissioner from "./components/Commissioner/Commissioner";
import RTS from "./components/RTS/RTS";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Recruitment from "./components/Recruitment/Recruitment";
import VideoGallery from "./components/VideoGallery/VideoGallery";
import OnlineServices from "./components/OnlineServices/OnlineServices";

function App() {
  return (
    <Router>
      <Header />
      <StickyFeedback />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/location" element={<Location />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/commissioner" element={<Commissioner />} />
        <Route path="/online-services" element={<OnlineServices />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
        <Route path="/rts-act-2015" element={<RTS />} />
      </Routes>
      <BottomSlider />
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
