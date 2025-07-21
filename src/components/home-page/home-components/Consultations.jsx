import ServicesCard from "../../cards/ServicesCard"


function Consultations() {
  return (
    <div>
        <section className="home-section-2 bg-white py-5">
            <div className="container-margin section1 w-100">
            <div className="row mb-5">
                <div className="col-12">
                <h2 className="home-sec7-title-t mb-0">
                    <div className="text-center text-animate"><span>Consultations</span></div>
                </h2>
                <span className="title-border title-border-ani-2"></span>
                </div>
                <div className="col-12">
                <p className="text-center text-lg-center home-sec4-para text-dark mt-4 mb-0 font-avenir-light px-3">Each health speciality has been created to achieve an optimal level of physical and mental well-being.</p>
                </div>
            </div>
            <div className="service-cards">
                <div className="d-mobile no-d-desktop">
                <div id="owl-carousel-5" className="carousel-single owl-carousel owl-drag owl-theme h-100 p-3">
                    <div className="item">
                        <ServicesCard BgSandal={true} isDesktop={false} Image={"card-service-img-1"} Link={"/our-specialities/naturopathic-consultations"} Title={"Naturopathy Consultations"} Description={"Personalized holistic consultation combining yoga, diet, and naturopathic therapies tailored to individual medical background."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={true} isDesktop={false} Image={"card-service-img-2"} Link={"/our-specialities/diet-consultations"} Title={"Diet Consultations"} Description={"Expert-led discussions focusing on suitable foods, portion control, and recipe guidance, customized to each person's medical history and preferences."}/>
                    </div>
                    <div className="item">
                        <ServicesCard BgSandal={true} isDesktop={false} Image={"card-service-img-8"} Link={"/our-specialities/yoga-consultations"} Title={"Yoga Consultations"} Description={"Tailored Consultation for 30 minutes encompassing asanas, pranayamas, and meditative techniques, curated to individual medical backgrounds."}/>
                    </div>
                </div>
                </div>
                <div className="d-desktop no-d-mobile">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <ServicesCard isDesktop={true} Image={"card-service-img-1"} Link={"/our-specialities/naturopathic-consultations"} Title={"Naturopathy Consultations"} Description={"Personalized holistic consultation combining yoga, diet, and naturopathic therapies tailored to individual medical background."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard isDesktop={true} Image={"card-service-img-2"} Link={"/our-specialities/diet-consultations"} Title={"Diet Consultations"} Description={"Expert-led discussions focusing on suitable foods, portion control, and recipe guidance, customized to each person's medical history and preferences."}/>
                    </div>
                    <div className="col-lg-4">
                        <ServicesCard isDesktop={true} Image={"card-service-img-8"} Link={"/our-specialities/yoga-consultations"} Title={"Yoga Consultations"} Description={"Tailored Consultation for 30 minutes encompassing asanas, pranayamas, and meditative techniques, curated to individual medical backgrounds."}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Consultations