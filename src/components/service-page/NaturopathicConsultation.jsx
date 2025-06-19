import AboutUsImg from "/about-us-4.png";
import ServiceImg from "/service-nc-2.jpg";
import ServiceImg2 from "/service-ww-3.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import OurDoctors from "../doctors-section/OurDoctors";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";
import EnquiryService from "./service-components/EnquiryService";

function NaturopathicConsultation() {
  const Title = "Naturopathic Consultation";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={
          <>
            Naturopathic
            <br />
            Consultations
          </>
        }
        BgClass={"service-nc-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Naturopathic Consultations"}
        Length={""}
        Price={"₹ 1500"}
      />
      <AboutService
        AboutTitle={<>Accessing Natural Health from Anywhere</>}
        AboutTitleMobile={
          <>
            Accessing Natural Health
            <br />
            from Anywhere
          </>
        }
        AboutContent={
          "At Antara, we believe that everyone deserves access to quality naturopathic care, regardless of location. Our online naturopathic consultations offer the convenience of receiving personalized natural healthcare from the comfort of your home, ensuring you can prioritize your well-being no matter where you are."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={"Online Naturopathic Consultations?"}
        TitleMobile={
          <>
            Why Choose
            <br />
            Online Naturopathic Consultations?
          </>
        }
        Image={AboutUsImg}
        Content={
          "Our online consultations provide an effective way to access the expertise of our naturopathic doctors remotely. Through secure and interactive video sessions, we can address a wide range of health concerns, develop tailored treatment plans, and provide guidance on natural therapies, dietary recommendations, lifestyle modifications, and more."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={"Benefits of Online Yoga Consultations:"}
        BriefTitleMobile={
          <>
            Benefits of Online Yoga
            <br />
            Consultations:
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Expert-Led Sessions:</strong> Benefit from
            yoga sessions led by doctors and experienced yoga instructors,
            ensuring a holistic approach to your well-being.
          </>,
          <>
            <strong className="brown">Convenience and Flexibility:</strong>{" "}
            Enjoy the flexibility of scheduling sessions at your convenience,
            while accessing expert guidance and instruction from anywhere with
            an internet connection.
          </>,
          <>
            <strong className="brown">Tailored Practice Plans:</strong> Receive
            personalized yoga practice plans tailored to your specific needs,
            goals, and any underlying health considerations, ensuring safe and
            effective participation.
          </>,
          <>
            <strong className="brown">Comprehensive Support:</strong> Receive
            guidance, instruction, and ongoing support from our team of expert
            instructors and healthcare professionals, empowering you to progress
            confidently in your yoga journey while addressing any health
            concerns or limitations.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={"Benefits of Online Yoga Consultations:"}
        BriefTitleMobile={
          <>
            Benefits of Online Yoga
            <br />
            Consultations:
          </>
        }
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Expert-Led Sessions:</strong> Benefit from
            yoga sessions led by doctors and experienced yoga instructors,
            ensuring a holistic approach to your well-being.
          </>,
          <>
            <strong className="brown">Convenience and Flexibility:</strong>{" "}
            Enjoy the flexibility of scheduling sessions at your convenience,
            while accessing expert guidance and instruction from anywhere with
            an internet connection.
          </>,
          <>
            <strong className="brown">Tailored Practice Plans:</strong> Receive
            personalized yoga practice plans tailored to your specific needs,
            goals, and any underlying health considerations, ensuring safe and
            effective participation.
          </>,
          <>
            <strong className="brown">Comprehensive Support:</strong> Receive
            guidance, instruction, and ongoing support from our team of expert
            instructors and healthcare professionals, empowering you to progress
            confidently in your yoga journey while addressing any health
            concerns or limitations.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Experience the convenience and effectiveness of online naturopathic consultations. Schedule your virtual appointment with Antara today and embark on a natural path towards optimal health and wellness."
        }
        Content2={""}
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default NaturopathicConsultation;
