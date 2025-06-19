import Calender from "/calendar.png"
import Email from "/email.png"
import CrediCard from "/credit-card.png"
import Confirmation from "/confirmation.png"
import Url from "/url.png"
import BookSteps from "../../cards/BookSteps"
import OwlCarousel from "react-owl-carousel"

function StepsToBook() {

    const options = {
        stagePadding: 0,
        // singleItem:true,
        loop:false,
        nav:false,
        lazyLoad: true,
        margin: 10,
        responsiveClass: true,
        // autoHeight: true,
        items: 1
    }

  return (
    <div>
        <section className="home-section-7-book bg-sandal pt-3">
            <div className="container-margin section2 w-100">
                <div className="home-sec7-title">
                    <h2 className="home-sec7-title-t mb-5">
                        <div className="d-desktop no-d-mobile text-animate">
                            <span>STEPS TO BOOK THE CONSULTATION</span>
                        </div>
                        <div className="text-center d-mobile no-d-desktop text-animate">
                            STEPS TO BOOK<br/>THE CONSULTATION
                        </div>
                    </h2>
                    <span className="title-border title-border-ani-5"></span>
                </div>
                <div className="booking-steps pt-0 pt-lg-5">
                    <div className="d-mobile no-d-desktop">
                        <OwlCarousel id="owl-carousel-2" className="owl-carousel owl-theme p-3" { ...options }>
                            <div className="item">
                                <BookSteps isBgSuccess={false} Icon={ Calender } IconAlt={"Calender Icon"} StepNo={"1"} Content={"Choose your date and time"}/>
                            </div>
                            <div className="item">
                                <BookSteps isBgSuccess={false} Icon={ Email } IconAlt={"Email Icon"} StepNo={"2"} Content={"Enter your details"}/>
                            </div>
                            <div className="item">
                                <BookSteps isBgSuccess={false} Icon={ CrediCard } IconAlt={"ATM Card Icon"} StepNo={"3"} Content={"Make your payment"}/>
                            </div>
                            <div className="item">
                                <BookSteps isBgSuccess={false} Icon={ Confirmation } IconAlt={"Confirmation Icon"} StepNo={"4"} Content={"Check your email for confirmation and video link for the consultation"}/>
                            </div>
                            <div className="item">
                                <BookSteps isBgSuccess={false} Icon={ Url } IconAlt={"Click URL Icon"} StepNo={"5"} Content={"Click the link at least 5 mins prior to your appointment for your video consultation"}/>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="d-desktop no-d-mobile">
                        <div className="row justify-content-between g-3 g-lg-0">
                            <div className="col-lg-2">
                                <BookSteps isBgSuccess={true} Icon={ Calender } IconAlt={"Calender Icon"} StepNo={"1"} Content={"Choose your date and time"}/>
                            </div>
                            <div className="col-lg-2">
                                <BookSteps isBgSuccess={true}s Icon={ Email } IconAlt={"Email Icon"} StepNo={"2"} Content={"Enter your details"}/>
                            </div>
                            <div className="col-lg-2">
                                <BookSteps isBgSuccess={true} Icon={ CrediCard } IconAlt={"ATM Card Icon"} StepNo={"3"} Content={"Make your payment"}/>
                            </div>
                            <div className="col-lg-2">
                                <BookSteps isBgSuccess={true} Icon={ Confirmation } IconAlt={"Confirmation Icon"} StepNo={"4"} Content={"Check your email for confirmation and video link for the consultation"}/>
                            </div>
                            <div className="col-lg-2">
                                <BookSteps isBgSuccess={true} Icon={ Url } IconAlt={"Click URL Icon"} StepNo={"5"} Content={"Click the link at least 5 mins prior to your appointment for your video consultation"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default StepsToBook