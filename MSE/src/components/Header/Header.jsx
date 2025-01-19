import './Header.css';
import logo from '../../assets/images/Somes_logo.jpg'

function Header() {
    return (
        <header className="header-container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt="MSE Logo"
                            className="logo"
                        />
                    </a>

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
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>

                            {/* About Us Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="aboutDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    About Us
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            What is MSE?
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Our Staff
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* Facilities Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="facilitiesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Facilities
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="facilitiesDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Microscopic Laboratory
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Polymer Laboratory
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Heat Treatment Laboratory
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* News & Events Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="newsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    News & Events
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="newsDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Latest News
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Upcoming Events
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Media Gallery
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Research
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    SOMES
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
