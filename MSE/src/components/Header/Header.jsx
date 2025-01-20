import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../assets/images/MSE_Logo.png'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className={`header-container ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''}`}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="MSE Logo"
                            className="logo"
                        />
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggler"
                        aria-controls="navbarToggler"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink 
                                    className={({isActive}) => 
                                        `nav-link ${isActive ? 'active' : ''}`
                                    } 
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                            {/* About Us Dropdown */}
                            <li className="nav-item dropdown">
                                <NavLink
                                    className={({isActive}) => 
                                        `nav-link dropdown-toggle ${isActive ? 'active' : ''}`
                                    }
                                    to="/about"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    About Us
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/about/what-is-mse">
                                            What is MSE?
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/about/staff">
                                            Our Staff
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            {/* Facilities Dropdown */}
                            <li className="nav-item dropdown">
                                <NavLink
                                    className={({isActive}) => 
                                        `nav-link dropdown-toggle ${isActive ? 'active' : ''}`
                                    }
                                    to="/facilities"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    Facilities
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/facilities/microscopic-laboratory">
                                            Microscopic Laboratory
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/facilities/polymer-laboratory">
                                            Polymer Laboratory
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/facilities/heat-treatment-laboratory">
                                            Heat Treatment Laboratory
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            {/* News & Events Dropdown */}
                            <li className="nav-item dropdown">
                                <NavLink
                                    className={({isActive}) => 
                                        `nav-link dropdown-toggle ${isActive ? 'active' : ''}`
                                    }
                                    to="/news-events"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                >
                                    News & Events
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/news-events/latest-news">
                                            Latest News
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/news-events/upcoming-events">
                                            Upcoming Events
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/news-events/media-gallery">
                                            Media Gallery
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink 
                                    className={({isActive}) => 
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/research"
                                >
                                    Research
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({isActive}) => 
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/somes"
                                >
                                    SOMES
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className={({isActive}) => 
                                        `nav-link ${isActive ? 'active' : ''}`
                                    }
                                    to="/contact"
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
