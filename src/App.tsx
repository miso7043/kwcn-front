import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Media from './pages/Media';
import MemberLogin from './pages/MemberLogin';
import DonateNow from './pages/DonateNow';
import History from './pages/AboutUs/History';
import FuturePlans from './pages/AboutUs/FuturePlans';
import Finance from './pages/AboutUs/Finance';
import Organization from './pages/AboutUs/Organization';
import Tax from './pages/Information/Tax';
import Lecture1 from './pages/Information/JobAcademy/Lecture1';
import TaxSuggestion from './pages/Information/Suggestions/Tax';
import Volunteer from './pages/GetInvolved/Volunteer';

const App = () => (
  <Router>
    <Navbar />
    <div style={{ padding: '2rem' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/history" element={<History />} />
        <Route path="/about/future" element={<FuturePlans />} />
        <Route path="/about/finance" element={<Finance />} />
        <Route path="/about/organization" element={<Organization />} />
        <Route path="/events" element={<Events />} />
        <Route path="/media" element={<Media />} />
        <Route path="/info/tax" element={<Tax />} />
  <Route path="/info/jobacademy/lecture1" element={<Lecture1 />} />
  <Route path="/info/suggestions/tax" element={<TaxSuggestion />} />
        <Route path="/getinvolved/volunteer" element={<Volunteer />} />
        <Route path="/login" element={<MemberLogin />} />
        <Route path="/donate" element={<DonateNow />} />
      </Routes>
    </div>
  </Router>
);

export default App;
