import { NavLink } from "react-router-dom";
import TermsAntara from "/Terms_ANTARA.pdf"
import AntaraBookingCancellationPolicy from "/ANTARA_booking_Cancellation policy.pdf"

function Footer() {
  return (
    <div>
        <footer>
            <div className="edubest-footer font-avenir-light">
                <div className="container-margin-footer">
                    <div className="row g-0 g-lg-5">
                        <div className="col-lg-3 col-6">
                            <ul className="footer-menu p-0 ms-0 ms-lg-4">
                                <li><NavLink className="footer-link" type="button" to={ "/about-us" }>About Us</NavLink></li>
                                <li className="nav-item dropdown d-desktop no-d-mobile">
                                    <button className="nav-link dropdown-toggle footer-link" id="navbarDarkDropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Consultations
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialities/yoga-consultations" }>Yoga Consultation</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialities/naturopathic-consultations" }>Naturopathic Consultation</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialities/nutrition-and-diet-consultations" }>Nutrition and Diet Consultation</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown d-desktop no-d-mobile">
                                    <button className="nav-link dropdown-toggle footer-link" id="navbarDarkDropdownMenuLink"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Specialised Cares
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialised-cares/mens-health" }>Men’s Health</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialised-cares/womens-wellness" }>Women Wellness</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialised-cares/weight-management-and-obesity" }>Weight Management and Obesity</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialised-cares/senior-care" }>Senior Care</NavLink></li>
                                    <li className="mb-0"><NavLink className="dropdown-item" type="button" to={ "/our-specialised-cares/detoxification-programs" }>Detoxification Programs</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink className="footer-link" type="button" to={ "/yoga-club" }>Yoga Club</NavLink></li>
                                <li><NavLink className="footer-link" type="button" to={ "https://antaracares1.zohobookings.in/#/book-appointment" }>Online Consult</NavLink></li>
                                <li><NavLink className="footer-link" type="button" to={ "/antara-escapes" }>Escapes</NavLink></li>
                                <li><NavLink className="footer-link" type="button" to={ "/contact-us" }>Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-9 col-6">
                            <div className="row g-0 g-lg-5">
                                <div className="col-lg-4">
                                    <h5 className="footer-header">Address:</h5>
                                    <p className="footer-description">Samruddhi Resort and Farms<br/>Agodapali<br/>Kelamangalam road,<br/>Hosur, Tamil Nadu 635110</p>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <h5 className="footer-header">Phone No:</h5>
                                    <a type="button" href="tel:+917845518010" className="footer-description footer-desc-link">+91 78 45 518 010</a>
                                </div>
                                <div className="col-lg-4">
                                    <h5 className="footer-header">Email</h5>
                                    <a type="button" href="mailto:antaracares@gmail.com" className="footer-description footer-desc-link">antaracares@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edubest-footer-bottom">
            <div className="container-margin-footer d-flex">
                <div className="edubest-footer-logo d-flex me-auto">
                    <NavLink type="button" to={ TermsAntara } target="_blank" className="me-3" title="Download PDF file">Terms and conditions</NavLink>
                    <NavLink type="button" to={ AntaraBookingCancellationPolicy } target="_blank" title="Download PDF file">Booking and cancellation policy</NavLink>
                </div>
                <div className="edu-best-footer-cr font-avenir-light">
                <p className="edu-best-footer-cr-p">© 2023 Antara</p>
                </div>
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer