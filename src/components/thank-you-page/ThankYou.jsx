import { useState } from "react";

function ThankYou() {

      const Title = "Thank You";
    
      useState(() => {
          document.title = `${ Title } | Antara | Online consultation`;
        }, []);

  return (
    <div>
        <section className="our-story-sec1">
            <div className="our-story-section1">
                <div className="about-title">
                    <div className="service-title-box">
                        <div className="service-title-box-bg d-flex flex-column justify-content-center">
                            <h1 className="home-sec-1-title text-center py-3 px-3 text-animate-2">Thank you!</h1>
                            <p className="font-avenir-light text-center text-white">For submitting the form. Our team will get back to you
                                shortly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ThankYou