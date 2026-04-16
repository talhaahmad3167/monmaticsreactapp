import { Link, useLocation  } from "react-router-dom";
import "../assets/navbar.css";
import "../assets/layoutcssfile/login.css";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="navbar navbar-expand-md navbar-light custom-navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img
            src="assets/site logo-bm16FFqM.png"
            alt="Logo"
            style={{ height: "30px", marginLeft: "20px" }}
          />

<button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mainNavbar"
      aria-controls="mainNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

          
        </Link>

        <div className="collapse navbar-collapse ms-5" id="mainNavbar">
          
          <ul className="navbar-nav me-auto" style={{ marginLeft: "150px" }}>
            <li className="nav-item" style={{ marginRight: "60px" }}>
            <Link to="/" className={`nav-link ${isActive("/") ? "active-link" : ""}`}>
              Home
            </Link>
            </li>
            <li className="nav-item dropdown" style={{ marginRight: "60px" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="appsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Apps & Features
              </a>
              <ul className="dropdown-menu" aria-labelledby="appsDropdown">
                <li>
                  <Link className="dropdown-item" to="/apps/Features">
                    {" "}
                    Apps & Features
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item" style={{ marginRight: "60px" }}>
              <Link className={`nav-link ${isActive("/about") ? "active-link" : ""}`} to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link  className={`nav-link ${isActive("/contact") ? "active-link" : ""}`} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-3 me-3">
            {/* Sign In */}
            <Link to="/loginpage" className="signin-btn">
              Sign In
            </Link>
            {/* Get Started */}
            <Link
              to="/get-started"
              className="getstratedbtn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
