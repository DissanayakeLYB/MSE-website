import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
// Import your pages
import AboutUs from './pages/AboutUs';
import CareerPaths from './pages/CareerPaths';
import JobOpportunities from './pages/JobOpportunities';
import AcademicStaff from './pages/AcademicStaff';
import NonAcademicStaff from './pages/NonAcademicStaff';
import ResearchFacilities from './pages/ResearchFacilities';
import UndergraduateResearch from './pages/UndergraduateResearch';
import PostgraduateResearch from './pages/PostgraduateResearch';
import ProjectProposals from './pages/ProjectProposals';
import UndergraduatePrograms from './pages/UndergraduatePrograms';
import PostgraduatePrograms from './pages/PostgraduatePrograms';
import WhatIsSOMES from './pages/WhatIsSOMES';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career-paths" element={<CareerPaths />} />
        <Route path="/job-opportunities" element={<JobOpportunities />} />
        <Route path="/staff/academic" element={<AcademicStaff />} />
        <Route path="/staff/non-academic" element={<NonAcademicStaff />} />
        <Route path="/research-facilities" element={<ResearchFacilities />} />
        <Route path="/undergrad-research" element={<UndergraduateResearch />} />
        <Route path="/postgrad-research" element={<PostgraduateResearch />} />
        <Route path="/project-proposals" element={<ProjectProposals />} />
        <Route path="/undergrad-programs" element={<UndergraduatePrograms />} />
        <Route path="/postgrad-programs" element={<PostgraduatePrograms />} />
        <Route path="/what-is-somes" element={<WhatIsSOMES />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
