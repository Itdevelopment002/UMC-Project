import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./components/AboutPage/AboutPage";
import WhatsAppChat from "./components/WhatsAppChat/WhatsAppChat";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <WhatsAppChat />
      <Footer />
    </Router>
  );
}

export default App;
