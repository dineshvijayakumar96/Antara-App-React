import ServicesCard from "../../cards/ServicesCard"
import OwlCarousel from "react-owl-carousel"

function SpecialedCares() {

    const options = {
        touchDrag:true,
        loop:true,
        margin:10,
        items: 1
    }

  return (
    <div>
        <section className="home-section-2 bg-sandal py-5">
            <div className="container-margin section1 w-100">
            <div className="row mb-5">
                <div className="col-12">
                <h2 className="home-sec7-title-t mb-0">
                    <div className="text-center text-animate"><span>Specialised Cares</span></div>
                </h2>
                <span className="title-border title-border-ani-2"></span>
                </div>
                <div className="col-12">
                <p className="text-center text-lg-center home-sec4-para text-dark mt-4 mb-0 font-avenir-light px-3">Your monthly long-term treatment plan comprises an initial consultation, regular diet counselling, naturopathy therapies, private yoga sessions, and weekly follow-ups with your doctor, all meticulously designed to cater to your unique health requirements and objectives.</p>
                </div>
            </div>
            <div className="service-cards">
                <div className="d-mobile no-d-desktop">
                <OwlCarousel id="owl-carousel-3" className="carousel-single owl-carousel owl-drag owl-theme h-100 p-3" { ...options }>
                    <div className="item">
                        <ServicesCard BgSandal={false} isDesktop={false} Image={"card-service-img-4"} Link={"/our-specialised-cares/mens-health"} Title={"Men's Health"} Description={"Tailored online Naturopathic treatment plan addressing Men's health holistically and effectively."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={false} isDesktop={false} Image={"card-service-img-5"} Link={"/our-specialised-cares/women-wellness"} Title={"Women Wellness"} Description={"Empowering women's wellness through personalized online treatment plan for a holistic health."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={false} isDesktop={false} Image={"card-service-img-6"} Link={"/our-specialised-cares/weight-management-&-obesity"} Title={"Weight Management & Obesity"} Description={"Customized online naturopathic treatment plan for effective weight management and obesity."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={false} isDesktop={false} Image={"card-service-img-7"} Link={"/our-specialised-cares/senior-care"} Title={"Senior Care"} Description={"Comprehensive treatment plan designed for senior care, promoting holistic wellness with personalized attention and expertise."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={false} isDesktop={false} Image={"card-service-img-9"} Link={"/our-specialised-cares/detoxification-programs"} Title={"Detoxification Programs"} Description={"Revitalize with our online detoxification programs, offering personalized treatment plan for a refreshed body and rejuvenated spirit."}/>
                    </div>
                </OwlCarousel>
                </div>
                <div className="d-desktop no-d-mobile">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-4">
                        <ServicesCard BgSandal={false} isDesktop={true} Image={"card-service-img-4"} Link={"/our-specialised-cares/mens-health"} Title={"Men's Health"} Description={"Tailored online Naturopathic treatment plan addressing Men's health holistically and effectively."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard BgSandal={false} isDesktop={true} Image={"card-service-img-5"} Link={"/our-specialised-cares/women-wellness"} Title={"Women Wellness"} Description={"Empowering women's wellness through personalized online treatment plan for a holistic health."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard BgSandal={false} isDesktop={true} Image={"card-service-img-6"} Link={"/our-specialised-cares/weight-management-&-obesity"} Title={"Weight Management & Obesity"} Description={"Customized online naturopathic treatment plan for effective weight management and obesity."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard BgSandal={false} isDesktop={true} Image={"card-service-img-7"} Link={"/our-specialised-cares/senior-care"} Title={"Senior Care"} Description={"Comprehensive treatment plan designed for senior care, promoting holistic wellness with personalized attention and expertise."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard BgSandal={false} isDesktop={true} Image={"card-service-img-9"} Link={"/our-specialised-cares/detoxification-programs"} Title={"Detoxification Programs"} Description={"Revitalize with our online detoxification programs, offering personalized treatment plan for a refreshed body and rejuvenated spirit."}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default SpecialedCares