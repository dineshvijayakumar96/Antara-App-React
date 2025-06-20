// Images
import DrawnCircle from "/drawn-circle.svg";
import GrandLaunch from "/grand-launch.png";

import OwlCarousel from "react-owl-carousel"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function HomePage() {

    const options = {
        center: true,
        margin:150,
        touchDrag:true,
        loop:true,
        autoplaySpeed: 1000,
        autoplay:false,
        autoplayTimeout:2500,
        autoplayHoverPause:false,
        items: 1,
        autoWidth: true
    }

  return (
    <div>
      <div className="section-carousel vh-100">
        <section className="home-sec1">
          <div className="home-section1">
            <div className="home-title">
              <div className="home-title-box">
                <div className="">
                  <div className="home-title-height">
                    <h1 className="no-d-desktop no-d-mobile">
                      Welcome to Antara, Your Naturopath from India.
                    </h1>
                    <div className="home-sec-1-title text-white text-center mb-0 px-3 pt-3">
                      Customised cares
                    </div>
                    <OwlCarousel
                      id="owl-carousel"
                      className="carousel-single owl-carousel owl-drag owl-theme"
                      { ...options }
                    >
                      <div className="item">
                        <span className="p-circle">
                          <span className="home-sec-1-title text-white home-sec1-p text-center fw-normal mb-0 px-3 pt-2 slider-service">
                            Weight management
                          </span>
                          <img
                            className="p-circle-1"
                            src={DrawnCircle}
                            alt="Drawn Circle"
                          />
                        </span>
                      </div>
                      <div className="item">
                        <span className="p-circle">
                          <span className="home-sec-1-title text-white home-sec1-p text-center fw-normal mb-0 px-3 pt-2 slider-service">
                            PCOD/ PCOS
                          </span>
                          <img
                            className="p-circle-1"
                            src={DrawnCircle}
                            alt="Drawn Circle"
                          />
                        </span>
                      </div>
                      <div className="item">
                        <span className="p-circle">
                          <span className="home-sec-1-title text-white home-sec1-p text-center fw-normal mb-0 px-3 pt-2 slider-service">
                            Skin Health
                          </span>
                          <img
                            className="p-circle-1"
                            src={DrawnCircle}
                            alt="Drawn Circle"
                          />
                        </span>
                      </div>
                      <div className="item">
                        <span className="p-circle">
                          <span className="home-sec-1-title text-white home-sec1-p text-center fw-normal mb-0 px-3 pt-2 slider-service">
                            Allergies
                          </span>
                          <img
                            className="p-circle-1"
                            src={DrawnCircle}
                            alt="Drawn Circle"
                          />
                        </span>
                      </div>
                      <div className="item">
                        <span className="p-circle">
                          <span className="home-sec-1-title text-white home-sec1-p text-center fw-normal mb-0 px-3 pt-2 slider-service">
                            Mental Health
                          </span>
                          <img
                            className="p-circle-1"
                            src={DrawnCircle}
                            alt="Drawn Circle"
                          />
                        </span>
                      </div>
                    </OwlCarousel>
                    <span className="font-avenir-light text-white home-sec1-p text-center fw-normal px-3 pt-2 slider-p">
                      Curated by our doctors
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="scroll-btn">
          <div className="scroll-down">
            <a className="text-dark" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faChevronDown} className="animate-arrow" />
            </a>
          </div>
        </div>
        <div className="grand-ribbon">
          <img
            className="img-fluid grand-ribbon-img"
            src={GrandLaunch}
            alt="Grand Launch Jan 01.2024"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
