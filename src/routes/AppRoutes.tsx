import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/AboutUs/History';
import FuturePlans from '../pages/AboutUs/FuturePlans';
import Finance from '../pages/AboutUs/Finance';
import Organization from '../pages/AboutUs/Organization';
import Events from '../pages/Events';
import Media from '../pages/Media';
import Tax from '../pages/Information/Tax';
import Lecture1 from '../pages/Information/JobAcademy/Lecture1';
import TaxSuggestion from '../pages/Information/Suggestions/Tax';
import MemberLogin from '../pages/MemberLogin';
import DonateNow from '../pages/DonateNow';
import Volunteer from '../pages/GetInvolved/Volunteer';

const AppRoutes = () => (
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
);

export default AppRoutes;
