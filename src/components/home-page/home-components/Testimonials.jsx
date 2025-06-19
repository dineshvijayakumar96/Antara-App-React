import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Thumbs, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

import { useState, useRef } from "react";

// Static Images
import Testimonial1 from "/testimonial-1.jpg";
import Testimonial2 from "/testimonial-2.jpg";
import Testimonial3 from "/testimonial-1.jpg";
import Testimonial4 from "/testimonial-2.jpg";
import Quote from "/quote.png";

function Testimonials() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const images = [Testimonial1, Testimonial2, Testimonial3, Testimonial4];

  const handleSlideChange = (swiper) => {
    if (thumbsSwiper) {
      thumbsSwiper.slideTo(swiper.activeIndex);
    }
  };

  return (
    <div>
      <section className="spacer bg-sandal py-5">
        <div className="testimonial-section">
          <div>
            <h2 className="home-sec7-title-t mb-0">
              <div className="text-center text-animate">
                <span>Testimonials</span>
              </div>
            </h2>
            <span className="title-border title-border-ani-4"></span>
          </div>

          <div className="testi-user-img d-desktop no-d-mobile">
            <Swiper
              modules={[EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              allowTouchMove={false}
              onSwiper={setThumbsSwiper}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="gallery-thumbs"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    className={`u${idx + 1}`}
                    src={img}
                    alt={`Testimonial ${idx + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="container user-saying bg-transparent">
            <Swiper
              modules={[Autoplay, Pagination]}
              ref={mainSwiperRef}
              onSlideChange={handleSlideChange}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              direction="vertical"
              speed={1000}
              spaceBetween={50}
              className="swiper-container testimonial"
            >
              {images.map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="quote">
                    <img className="quote-icon" src={Quote} alt="Quote Icon" />
                    <p>
                      “Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.“
                    </p>
                    <div className="name">-Ramkishor Verma-</div>
                    <div className="designation">
                      {idx % 2 === 0 ? "Student" : "Working Professional"}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination swiper-pagination-white"></div>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
