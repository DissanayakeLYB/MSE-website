import { Routes, Route } from 'react-router-dom';
import WhatIsMSE from './WhatIsMSE';
import OurStaff from './OurStaff';
import './About.css';

function About() {
    return (
        <Routes>
            <Route path="/" element={<WhatIsMSE />} />
            <Route path="/what-is-mse" element={<WhatIsMSE />} />
            <Route path="/staff" element={<OurStaff />} />
        </Routes>
    );
}

export default About;
