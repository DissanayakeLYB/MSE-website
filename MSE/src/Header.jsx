import './Header.css'; // Import the custom CSS file

function Header() {
    return (
        <header className="header-container">
            <div className="logo-container">
                <img src="path-to-logo.png" alt="MSE logo" className="logo" />
            </div>
            <nav className="navbar navbar-expand-lg">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Facilities</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News & Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SOMES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
