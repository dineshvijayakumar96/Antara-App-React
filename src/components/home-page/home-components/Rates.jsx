import RatesCard from "../../cards/RatesCard"
import NaturopathyIcon from "/naturopathy-icon.png"
import YogaIcon from "/yoga-icon.png"
import GroupIcon from "/group-icon.png"
import PrivateIcon from "/private-icon.png"
import DietIcon from "/diet-icon.png"
import OwlCarousel from "react-owl-carousel"

function Rates() {

    const options = {
        touchDrag:true,
        loop:true,
        margin:10,
        items: 1
    }

  return (
    <div>
        <section className="home-section-2 bg-white py-5">
            <div className="container-margin section1 w-100">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="home-sec7-title-t mb-0">
                            <div className="text-center text-animate"><span>Rates</span></div>
                        </h2>
                        <span className="title-border title-border-ani-2"></span>
                    </div>
                </div>
                <div className="service-cards">
                    <div className="d-mobile no-d-desktop">
                        <OwlCarousel id="owl-carousel-4" className="carousel-single owl-carousel owl-drag owl-theme h-100 p-3" { ...options }>
                            <div className="item">
                                <RatesCard isMobile={true} Image={ NaturopathyIcon } Title={"Naturopathic Consultation"} Rate={"INR 1500"} Description={"Experience our signature Naturopathy consultation for 45 minutes and our doctors will curate a personalised plan for you."}/>
                            </div>
                            <div className="item">
                                <RatesCard isMobile={true} Image={ YogaIcon } Title={"Yoga Consultations"} Rate={"INR 650"} Description={"Experience our personalized online yoga consultation for 30 minutes followed by opting for one of our monthly sessions."}/>
                            </div>
                            <div className="item">
                                <RatesCard isMobile={true} Image={ GroupIcon } Title={"Group Yoga Sessions"} Rate={"INR 5000/month"} Description={"Join our monthly online group yoga sessions for rejuvenation and well-being at our fixed time slots hosted by our doctors."}/>
                            </div>
                            <div className="item">
                                <RatesCard isMobile={true} Image={ PrivateIcon } Title={"Private Yoga Sessions"} Rate={"INR 10,000/month"} Description={"Indulge in personalized monthly private yoga sessions online for holistic well-being at your preferred timing, our doctors are here for you."}/>
                            </div>
                            <div className="item">
                                <RatesCard isMobile={true} Image={ DietIcon } Title={"Diet Consultation"} Rate={"INR 650"} Description={"Tailored online Diet consultations for holistic dietary guidance and wellness transformation for 30 minutes."}/>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="d-desktop no-d-mobile">
                        <div className="row justify-content-center g-5">
                            <div className="col-lg-4">
                                <RatesCard isMobile={false} Image={ NaturopathyIcon } Title={"Naturopathic Consultation"} Rate={"INR 1500"} Description={"Experience our signature Naturopathy consultation for 45 minutes and our doctors will curate a personalised plan for you."}/>
                            </div>
                            <div className="col-lg-4">
                                <RatesCard isMobile={false} Image={ YogaIcon } Title={"Yoga Consultations"} Rate={"INR 650"} Description={"Experience our personalized online yoga consultation for 30 minutes followed by opting for one of our monthly sessions."}/>
                            </div>
                            <div className="col-lg-4">
                                <RatesCard isMobile={false} Image={ PrivateIcon } Title={"Private Yoga Sessions"} Rate={"INR 10,000/month"} Description={"Indulge in personalized monthly private yoga sessions online for holistic well-being at your preferred timing, our doctors are here for you."}/>
                            </div>
                            <div className="col-lg-4">
                                <RatesCard isMobile={false} Image={ GroupIcon } Title={"Group Yoga Sessions"} Rate={"INR 5000/month"} Description={"Join our monthly online group yoga sessions for rejuvenation and well-being at our fixed time slots hosted by our doctors."}/>
                            </div>
                            <div className="col-lg-4">
                                <RatesCard isMobile={false} Image={ DietIcon } Title={"Diet Consultation"} Rate={"INR 650"} Description={"Tailored online Diet consultations for holistic dietary guidance and wellness transformation for 30 minutes."}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Rates