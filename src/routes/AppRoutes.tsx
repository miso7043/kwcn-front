import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import History from '../pages/AboutUs/History';
import FuturePlans from '../pages/AboutUs/FuturePlans';
import Finance from '../pages/AboutUs/Finance';
import Organization from '../pages/AboutUs/Organization';
import Events from '../pages/Events';
import Media from '../pages/Media';

// import Lecture1 from '../pages/Information/JobAcademy/Job1';
import Job1 from '../pages/Information/JobAcademy/Job1';
import Job2 from '../pages/Information/JobAcademy/Job2';
import Job3 from '../pages/Information/JobAcademy/Job3';
import Job4 from '../pages/Information/JobAcademy/Job4';
import Job5 from '../pages/Information/JobAcademy/Job5';
import Job6 from '../pages/Information/JobAcademy/Job6';
import Job7 from '../pages/Information/JobAcademy/Job7';
import Job8 from '../pages/Information/JobAcademy/Job8';
import Job9 from '../pages/Information/JobAcademy/Job9';
import Job10 from '../pages/Information/JobAcademy/Job10';
import Job11 from '../pages/Information/JobAcademy/Job11';
import Job12 from '../pages/Information/JobAcademy/Job12';
import Job13 from '../pages/Information/JobAcademy/Job13';
import Job14 from '../pages/Information/JobAcademy/Job14';

import TaxGuide from '../pages/Information/TaxInfo/BC_taxGuide';
import CoopHousing from '../pages/Information/CoopHousing/CoopHousing';
import MemberLogin from '../pages/MemberLogin';
import DonateNow from '../pages/DonateNow';
import Volunteer from '../pages/GetInvolved/Volunteer';

import GlassBoxDemo1 from '../components/ui/GlassBox/GlassBoxDemo1';
// import CardCarouselDemo from '../components/ui/Card/CardCarouselDemo';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/history" element={<History />} />
    <Route path="/about/future" element={<FuturePlans />} />
    <Route path="/about/finance" element={<Finance />} />
    <Route path="/about/organization" element={<Organization />} />
    <Route path="/events" element={<Events />} />
    <Route path="/media" element={<Media />} />
    {/* <Route path="/info/tax" element={<Tax />} /> */}
    <Route path="/info/jobacademy/job1" element={<Job1 />} />
    <Route path="/info/jobacademy/job2" element={<Job2 />} />
    <Route path="/info/jobacademy/job3" element={<Job3 />} />
    <Route path="/info/jobacademy/job4" element={<Job4 />} />
    <Route path="/info/jobacademy/job5" element={<Job5 />} />
    <Route path="/info/jobacademy/job6" element={<Job6 />} />
    <Route path="/info/jobacademy/job7" element={<Job7 />} />
    <Route path="/info/jobacademy/job8" element={<Job8 />} />
    <Route path="/info/jobacademy/job9" element={<Job9 />} />
    <Route path="/info/jobacademy/job10" element={<Job10 />} />
    <Route path="/info/jobacademy/job11" element={<Job11 />} />
    <Route path="/info/jobacademy/job12" element={<Job12 />} />
    <Route path="/info/jobacademy/job13" element={<Job13 />} />
    <Route path="/info/jobacademy/job14" element={<Job14 />} />

    <Route path="/info/coop-housing" element={<CoopHousing />} />
    <Route path="/info/taxGuide" element={<TaxGuide />} />

    <Route path="/getinvolved/volunteer" element={<Volunteer />} />
    <Route path="/login" element={<MemberLogin />} />
    <Route path="/donate" element={<DonateNow />} />

    <Route path="/temp" element={<GlassBoxDemo1 />} />
  </Routes>
);

export default AppRoutes;
