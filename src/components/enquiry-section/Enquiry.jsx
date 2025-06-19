import { useLocation } from "react-router-dom";
import ContactForm from "../forms/ContactForm";
import { useState } from "react";

function Enquiry() {

  const location = useLocation();

  const isFullScreenEnquiry = location.pathname === "/about-us";

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div>
      <section className={ `${ isFullScreenEnquiry ? "py-5" : "home-enquiry-section" } d-flex align-items-center justify-content-center` }>
        <div className={ `container-margin mt-0 ${ isFullScreenEnquiry ? "mt-lg-5" : "" }` }>
          <div className={ `home-enq-form mt-0 ${ isFullScreenEnquiry ? "mt-lg-5" : "" }` }>
            <div className="row justify-content-center">
              <div className={ `${ isFormSubmitted ? "col-lg-12" : "col-lg-6" } order-lg-1 order-2` }>
                <div className="home-enq-title">
                  <h4 className="home-enq-title-t mb-4 text-center text-animate">
                    Enquire <span>Us</span>
                  </h4>
                  <span className="title-border title-border-ani-6"></span>
                </div>
                <ContactForm SubmitFunc={ setIsFormSubmitted }/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enquiry;
