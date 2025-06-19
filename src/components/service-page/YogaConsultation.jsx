import ServiceImg from "/service-yt-2.jpg";
import ServiceImg2 from "/service-yt-3.jpg";

import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import TalkToDoctor from "../home-page/home-components/TalkToDoctor";
import OurDoctors from "../doctors-section/OurDoctors";
import { useEffect } from "react";
import EnquiryService from "./service-components/EnquiryService";

function YogaConsultations() {
  const Title = "Yoga Consultation";

  useEffect(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={"Yoga Consultation"}
        BgClass={"service-yt-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Yoga Consultation"}
        Length={"30 mins"}
        Price={"₹ 650"}
      />
      <AboutService
        AboutTitle={<>What to Expect from Our Online Yoga Consultations</>}
        AboutTitleMobile={
          <>
            What to Expect from Our Online
            <br />
            Yoga Consultations
          </>
        }
        AboutContent={
          "At Antara, we believe in the transformative power of yoga, catering to individuals seeking a holistic approach to health, wellness, and inner peace. Our online yoga consultation service is designed to bring the benefits of yoga directly to you, wherever you are in the world."
        }
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BgColor="bg-white"
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
      <TalkToDoctor
        isServicePage={true}
        AlterWhatsApp={false}
        Title={"Get Started Today:"}
        TitleMobile={"Get Started Today:"}
        Content1={
          "Embark on a journey towards improved well-being and balance. Book your online yoga consultation session today and take the first step toward a healthier, more mindful lifestyle."
        }
        Content2={
          "Join Antara Yoga club and experience the transformative benefits of yoga from the comfort of your own space."
        }
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default YogaConsultations;
