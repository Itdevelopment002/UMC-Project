import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import History from "./components/History/History";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";
import StickyFeedback from "./components/StickyFeedback/StickyFeedback"; // Import the StickyFeedback component
import Location from "./components/Location/Location";
import Commissioner from "./components/Commissioner/Commissioner";

function App() {
  return (
    <Router>
      <Header />
      <StickyFeedback /> {/* Add StickyFeedback component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/location" element={<Location />} />
        <Route path="/commissioner" element={<Commissioner />} />
      </Routes>
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
