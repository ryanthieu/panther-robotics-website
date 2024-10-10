import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Scrollbar from './pages/homepage/homescroll';
import AboutUsScrollbar from './pages/aboutus/aboutusscroll';
import AwardsScrollbar from './pages/awards/awardscroll';
import OutreachScrollbar from './pages/outreach/outreachscroll';
import FirstScrollbar from './pages/first/firstscroll';
import RobotScrollbar from './pages/robot/robotscroll';
//import {Homepage} from './pages/homepage/homepage'
import {Navbar} from './components/navbar';
import {Footer} from './components/footer';

//import {AboutUs} from './pages/aboutus/aboutus';
//import {Awards} from './pages/awards/awards'
//import {First} from './pages/first/first'
//import {Outreach} from './pages/outreach/outreach'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scrollbar />} />
          <Route path="/awards" element={<AwardsScrollbar />} />
          <Route path="/robot" element={<RobotScrollbar />} />
          <Route path="/aboutus" element={<AboutUsScrollbar />} />
          <Route path="/first" element={<FirstScrollbar />} />
          <Route path="/outreach" element={<OutreachScrollbar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
