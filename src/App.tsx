import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Scrollbar from './pages/homepage/homescroll';
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';
import {LearnMore} from './pages/learnmore/learnmore';
import {AboutUs} from './pages/aboutus/aboutus';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scrollbar />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
