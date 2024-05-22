import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer py-3 bg-light">
      <hr className="my-4" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/categories"
                  onClick={scrollToTop}
                >
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/faqs"
                  onClick={scrollToTop}
                >
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 mt-3">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link px-2 py-1 mb-0 text-muted">Need Help!</p>
                <p className="nav-link px-2 py-1 mb-0 text-muted">
                  customerservice@rusticthread.com
                </p>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1 text-muted"></a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 py-1 text-muted"></a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/privacy_policy"
                  onClick={scrollToTop}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/terms_of_service"
                  onClick={scrollToTop}
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 font-size-2x nav-link"
              onClick={scrollToTop}
              aria-current="page"
              to="/"
            >
              © 2024 Rustic Threads • Ecommerce Website
            </Link>
          </div>
          <ul className="nav col-md-8 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <i className="fa-brands fa-pinterest fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
