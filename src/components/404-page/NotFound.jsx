import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"


function NotFound() {
  return (
    <div>
      <section className="our-story-sec1">
          <div className="home-section3">
              <div className="about-title" style={ { backgroundColor: "linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgb(0 11 21 / 30%) 39%, rgb(0 11 21 / 40%) 100%)" } }>
                  <div className="service-title-box">
                      <div className="service-title-box-bg d-flex flex-column justify-content-center">
                          <h1 className="home-sec-1-title display-1 text-center py-3 px-3 text-animate-2">404<br/>Ooops!</h1>
                          <p className="font-avenir-light text-center text-white">Page not found</p>
                          <NavLink to="/" className="home-enq-appointment-2 me-0 me-lg-1 mb-2 mb-lg-0" style={ { backgroundColor: "#fff1e9" } }><span className="z-index-1"><FontAwesomeIcon icon={ faHouse }></FontAwesomeIcon> Go Back Home</span></NavLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default NotFound