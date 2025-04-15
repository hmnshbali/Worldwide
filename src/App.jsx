import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import { CitiesProvider } from './contexts/CitiesContext';

function App() {
  
  return (
   <CitiesProvider>
      <Router>
        <>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          
          </Routes>
        </>
      </Router>
      </CitiesProvider>
  );
}

export default App;
