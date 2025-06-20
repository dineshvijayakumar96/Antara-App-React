import React, { useState, useEffect, useRef } from "react";

// Images
import Logo from "/logo.svg";
import LogoWhite from "/logo-w.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const sidenavRef = useRef(null);

  const location = useLocation();

  const isStyledWhite2 = 
    location.pathname == "/";

  function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
      const handler = (event) => setMatches(event.matches);

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return matches;
  }

  const isMobile = useMediaQuery("(max-width: 640px)");

  const [ navBarOverflow, letNavBarOverflow ] = useState("");

  useEffect(() => {
    if (isNavOpen) {
      letNavBarOverflow("hidden");
    } else {
      letNavBarOverflow("visible");
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav style={ { overflow: navBarOverflow } } className="navbar position-absolute w-100 navbar-expand-lg navbar-light bg-transparent align-items-center edu-nav z-index-2 p-0">
        <div className={ `container-margin d-flex align-items-center p-0 w-100 ${ !isStyledWhite2 ? "border-b" : "border-b-b" }` }>
          <NavLink
            to={"/"}
            className="navbar-brand me-lg-0 me-auto mb-0 mb-lg-2"
            onClick={handleNavClick}
          >
            <img
              title="Antara"
              className="img-fluid logo-img"
              src={ !isStyledWhite2 ? LogoWhite : Logo }
              alt="Antara Online Naturopathy Consultation"
            />
          </NavLink>
          <div
            id="opennav"
            className={`burger ${isNavOpen ? "active" : ""}`}
            onClick={toggleNav}
            role="button"
            aria-label="Toggle Navigation"
          >
            <div className={ `strip-w ${ !isStyledWhite2 ? "" : "strip-b" } burger-strip` }>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div
            ref={sidenavRef}
            className={`navbar-collapse justify-content-center sidenav transition-all ${isNavOpen ? "open" : "closed"}`}
            style={ { width: isNavOpen || !isMobile ? "100%" : "0%", opacity: isNavOpen || !isMobile ? "1" : "0" } }
            id="mySidenav"
          >
            <ul className={ `navbar-nav ${ !isStyledWhite2 ? "" : "edu-nav-link-b-b" } mb-2 mb-lg-0` }>
              <li>
                <NavLink
                    to={"/about-us"}
                  className="nav-link edu-nav-link edu-nav-link-b"
                  type="button"
                  onClick={handleNavClick}
                >
                  About Us
                </NavLink>
              </li>
              <div className="btn-group edu-nav-drop">
                <button
                  type="button"
                  className="edu-nav-link edu-nav-link-b mx-0 px-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Consultations <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end edu-nav-dropdown">
                  <li className="edu-drop-padding">
                    <NavLink
                        to={"/our-specialities/yoga-consultations"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Yoga Consultation
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                        to={"/our-specialities/naturopathic-consultations"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Naturopathic Consultation
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                        to={"/our-specialities/nutrition-and-diet-consultations"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Nutrition and Diet Consultation
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="btn-group edu-nav-drop">
                <button
                  type="button"
                  className="edu-nav-link edu-nav-link-b mx-0 px-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Specialised Cares <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end edu-nav-dropdown">
                  <li className="edu-drop-padding">
                    <NavLink
                      to={"/our-specialised-cares/mens-health"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Men’s Health
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                      to={"/our-specialised-cares/womens-wellness"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Women Wellness
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                      to={"/our-specialised-cares/weight-management-and-obesity"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Weight Management and Obesity
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                      to={"/our-specialised-cares/senior-care"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Senior Care
                    </NavLink>
                  </li>
                  <li className="edu-drop-padding">
                    <NavLink
                      to={"/our-specialised-cares/detoxification-programs"}
                      className="dropdown-item p-0 edu-nav-drop-link"
                      type="button"
                      onClick={handleNavClick}
                    >
                      Detoxification Programs
                    </NavLink>
                  </li>
                </ul>
              </div>
              <li>
                <NavLink
                  className="nav-link edu-nav-link edu-nav-link-b"
                  to={"/yoga-club"}
                  type="button"
                  onClick={handleNavClick}
                >
                  Yoga Club
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link edu-nav-link edu-nav-link-b"
                  to={"https://antaracares1.zohobookings.in/#/book-appointment"}
                  type="button"
                  onClick={handleNavClick}
                >
                  Online Consult
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link edu-nav-link edu-nav-link-b"
                  to={"/antara-escapes"}
                  type="button"
                  onClick={handleNavClick}
                >
                  Escapes
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link edu-nav-link edu-nav-link-b"
                  to={"/contact-us"}
                  type="button"
                  onClick={handleNavClick}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
