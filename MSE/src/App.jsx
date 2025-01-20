import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import Facilities from './pages/Facilities/Facilities';
// import Research from './pages/Research/Research';
// import NewsEvents from './pages/NewsEvents/NewsEvents';
// import SOMES from './pages/SOMES/SOMES';
// import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/*" element={<About />} />
            {/* <Route path="/facilities/*" element={<Facilities />} /> */}
            {/* <Route path="/news-events/*" element={<NewsEvents />} /> */}
            {/* <Route path="/research" element={<Research />} /> */}
            {/* <Route path="/somes" element={<SOMES />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
