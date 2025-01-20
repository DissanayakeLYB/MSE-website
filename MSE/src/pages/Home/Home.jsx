import './Home.css';
import img1 from '../../assets/images/MSE_Logo.png';
import img2 from '../../assets/images/SOMES_Logo.png';
import img3 from '../../assets/images/MSE_Logo.png';

function Home() {
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 hero-image" alt="MSE Logo" />
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100 hero-image" alt="SOMES Logo" />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 hero-image" alt="Another MSE Logo" />
                </div>
            </div>
            <div className="carousel-caption constant-caption">
                <h1 className="hero-title">Welcome to Sri Lanka's only</h1>
                <p className="hero-description">Department of Material Science and Engineering</p>
            </div>
        </div>
    );
}

export default Home;
