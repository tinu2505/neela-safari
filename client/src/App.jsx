import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Safaris from './pages/Safaris';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Booknow from './pages/Booknow';
import Privacypolicy from './pages/Privacypolicy';
import Termsconditions from './pages/Termsconditions';


function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/booknow" element={<Booknow />} />
            <Route path="/privacypolicy" element={<Privacypolicy />} />
            <Route path="/termsconditions" element={<Termsconditions />} />
          </Routes>
        </main> 
        <Footer />
      </div>
    </Router>
  );
}

export default App
