import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#131139", color: "#ffffff" }} className="pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#ee5337" }}>Department of Materials Science and Engineering</h5>
            <p>
              <strong>Location:</strong> University of Moratuwa, Katubedda, Sri Lanka (10400)
            </p>
            <p>
              <strong>Office Hours:</strong> 8:00AM - 5:00PM
            </p>
            <p>
              <strong>Phone:</strong> +94 11 264 0380/2
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:info@materials.mrt.ac.lk" style={{ color: "#ee5337" }}>info@materials.mrt.ac.lk</a>
            </p>
            <div className="mt-3">
              <a href="#" className="me-3" style={{ color: "#ffffff" }}>
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="me-3" style={{ color: "#ffffff" }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3" style={{ color: "#ffffff" }}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" style={{ color: "#ffffff" }}>
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#ee5337" }}>About Us</h5>
            <p>
              The Department of Materials Science and Engineering at the University of Moratuwa is dedicated to excellence in research, teaching, and fostering partnerships with industry.
            </p>
            <a href="#" className="btn btn-outline-light btn-sm mt-2">Learn More</a>
          </div>

          <div className="col-md-4 mb-4">
            <h5 style={{ color: "#ee5337" }}>Subscribe to Our Newsletter</h5>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  style={{ backgroundColor: "#ffffff", color: "#131139" }}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacyPolicy"
                />
                <label className="form-check-label" htmlFor="privacyPolicy">
                  I agree to the privacy policy
                </label>
              </div>
              <button type="submit" className="btn" style={{ backgroundColor: "#ee5337", color: "#ffffff" }}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="text-center py-3" style={{ borderTop: "1px solid #ffffff" }}>
          <small>&copy; {new Date().getFullYear()} All Rights Reserved | Department of Materials Science and Engineering</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
