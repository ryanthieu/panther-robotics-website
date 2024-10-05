import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Scrollbar from './pages/homepage/homescroll';
//import {Homepage} from './pages/homepage/homepage'
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import {LearnMore} from './pages/learnmore/learnmore';
import {AboutUs} from './pages/aboutus/aboutus';
import {Awards} from './pages/awards/awards'
import {First} from './pages/first/first'
import {Outreach} from './pages/outreach/outreach'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scrollbar />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/robot" element={<LearnMore />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/first" element={<First />} />
          <Route path="/outreach" element={<Outreach />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
