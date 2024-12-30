import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;

