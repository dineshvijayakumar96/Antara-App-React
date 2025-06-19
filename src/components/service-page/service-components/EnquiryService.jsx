import EnquiryImg from "/home-enq-img.png"

import ContactForm2 from "../../forms/ContactForm2"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function EnquiryService() {
  return (
    <div>
        <section id="contact-us" className="home-enquiry-section d-grid align-items-center">
            <div className="container-margin-l container-margin-enq mt-4">
                <div className="home-enq-title">
                    <h4 className="home-enq-title-t text-animate">Enquire <span>Us</span></h4>
                    <span className="title-border-l title-border-ani-8"></span>
                </div>
                <div className="home-enq-form mt-5">
                    <div className="row">
                        <div className="col-lg-7 order-lg-1 order-2">

                            <ContactForm2/>

                            <div className="enq-footer mt-5">
                                <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row">
                                    <NavLink to="https://wa.me/917845518010" target="_blank" title="Chat with us on Whatsapp" className="home-enq-appointment-2 mb-3 mb-lg-0"><span className="z-index-1"><FontAwesomeIcon
                                        className="pe-2" icon={ faWhatsapp }></FontAwesomeIcon> Whatsapp</span></NavLink>
                                    <NavLink to="https://antaracares1.zohobookings.in/#/book-appointment" target="_blank" title="Make an appointment" className="home-enq-appointment-2"><span className="z-index-1"><FontAwesomeIcon
                                        className="pe-2" icon={ faCalendarCheck }></FontAwesomeIcon> Online Consultation</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 order-lg-2 order-1 g-0 d-desktop no-d-mobile">
                            <div className="home-enq-img text-end">
                                <img className="img-fluid home-enq-img-1" src={ EnquiryImg } alt="Enquiry Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default EnquiryService;