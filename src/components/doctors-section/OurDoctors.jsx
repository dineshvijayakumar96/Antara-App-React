import OurDoctorsCard from "../cards/OurDoctorsCard"
import OwlCarousel from "react-owl-carousel"

function OurDoctors() {

    const options = {
        touchDrag:true,
        loop:true,
        margin:10,
        items: 1
    }

  return (
    <div>
        <section className="home-section-2 py-5">
            <div className="container-margin section1 w-100">
            <div className="row mb-0 mb-lg-5">
                <div className="col-12">
                <h2 className="home-sec7-title-t mb-0">
                    <div className="text-center text-animate"><span>Our Doctors</span></div>
                </h2>
                <span className="title-border title-border-ani-2"></span>
                </div>
            </div>
            <div className="service-cards">
                <div className="d-mobile no-d-desktop">
                <OwlCarousel id="owl-carousel-3-3" className="carousel-single owl-carousel owl-drag owl-theme h-100 p-3" { ...options }>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-2"} Name={"Dr. Preethi (BNYS)"} Position={"Consulting Physician"} Description={"As the dedicated Director of Antara Cares, Dr. Preethi leads our mission with compassion and expertise, ensuring holistic health for all."}/>
                    </div>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-3"} Name={"Dr. Ramya Babu (BNYS, AFMCP)"} Position={"Consulting Physician"} Description={"Specializing in Women's Wellness, Dr. Ramya combines expertise with empathy to address unique health needs, fostering supportive healthcare experiences."}/>
                    </div>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-6"} Name={"Dr. Amirthaselvarajan (BNYS)"} Position={"Consulting Physician"} Description={"Renowned for crafting personalized care plans, Dr. Amirthaselvarajan excels in treating Parkinson's and musculoskeletal disorders, enhancing mobility and quality of life."}/>
                    </div>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-5"} Name={"Dr. Gousika Vasudevan (BNYS)"} Position={"Consulting Physician"} Description={"A seasoned expert in weight management, Dr. Gousika empowers individuals with personalized strategies for achieving and maintaining optimal weight and health."}/>
                    </div>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-1"} Name={"Dr. Hamid (BNYS)"} Position={"Consulting Physician"} Description={"A versatile consultant specializing in gut health and autoimmune disorders, Dr. Hamid offers tailored solutions for holistic well-being."}/>
                    </div>
                    <div className="item">
                        <OurDoctorsCard Image={"card-doctor-img-8"} Name={"Dr. Durai Viswa (BNYS)"} Position={"Consulting Physician"} Description={"With expertise in lifestyle disorders, Dr. Durai Viswa guides individuals on personalized journeys towards sustained well-being, fostering positive transformations in health and lifestyle."}/>
                    </div>
                </OwlCarousel>
                </div>
                <div className="d-desktop no-d-mobile">
                <div className="row justify-content-center g-5">
                    <div className="col-lg-4">
                    <OurDoctorsCard Image={"card-doctor-img-2"} Name={"Dr. Preethi (BNYS)"} Position={"Consulting Physician"} Description={"As the dedicated Director of Antara Cares, Dr. Preethi leads our mission with compassion and expertise, ensuring holistic health for all."}/>
                    </div>
                    <div className="col-lg-4">
                    <OurDoctorsCard Image={"card-doctor-img-3"} Name={"Dr. Ramya Babu (BNYS, AFMCP)"} Position={"Consulting Physician"} Description={"Specializing in Women's Wellness, Dr. Ramya combines expertise with empathy to address unique health needs, fostering supportive healthcare experiences."}/>
                    </div>
                    <div className="col-lg-4">
                    <OurDoctorsCard Image={"card-doctor-img-6"} Name={"Dr. Amirthaselvarajan (BNYS)"} Position={"Consulting Physician"} Description={"Renowned for crafting personalized care plans, Dr. Amirthaselvarajan excels in treating Parkinson's and musculoskeletal disorders, enhancing mobility and quality of life."}/>
                    </div>
                    <div className="col-lg-4">
                    <OurDoctorsCard Image={"card-doctor-img-5"} Name={"Dr. Gousika Vasudevan (BNYS)"} Position={"Consulting Physician"} Description={"A seasoned expert in weight management, Dr. Gousika empowers individuals with personalized strategies for achieving and maintaining optimal weight and health."}/>
                    </div>
                    <div className="col-lg-4">
                        <OurDoctorsCard Image={"card-doctor-img-1"} Name={"Dr. Hamid (BNYS)"} Position={"Consulting Physician"} Description={"A versatile consultant specializing in gut health and autoimmune disorders, Dr. Hamid offers tailored solutions for holistic well-being."}/>
                    </div>
                    <div className="col-lg-4">
                        <OurDoctorsCard Image={"card-doctor-img-8"} Name={"Dr. Durai Viswa (BNYS)"} Position={"Consulting Physician"} Description={"With expertise in lifestyle disorders, Dr. Durai Viswa guides individuals on personalized journeys towards sustained well-being, fostering positive transformations in health and lifestyle."}/>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  )
}

export default OurDoctors