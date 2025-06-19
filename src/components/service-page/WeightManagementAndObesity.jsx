import AboutUsImg from "/about-us-4.png";
import ServiceImg from "/service-wm-2.jpg";
import ServiceImg2 from "/service-wm-3.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import OurDoctors from "../doctors-section/OurDoctors";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";
import EnquiryService from "./service-components/EnquiryService";

function WeightManagementAndObesity() {
  const Title = "Weight Management & Obesity";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={
          <>
            Weight Management &<br />
            Obesity
          </>
        }
        BgClass={"service-kw-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Weight Management & Obesity"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={
          <>
            Welcome to Antara’s
            <br />
            curated Weight Loss programme.
          </>
        }
        AboutTitleMobile={
          <>
            Welcome to Antara’s curated
            <br />
            Weight Loss programme.
          </>
        }
        AboutContent={
          "At Antara, we understand the complexities of weight management and offer personalized solutions to help you achieve a healthier lifestyle. Our online consultation service is dedicated to supporting individuals struggling with obesity or weight-related concerns."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={<>Meet Our Expert Team:</>}
        TitleMobile={<>Meet Our Expert Team:</>}
        Image={AboutUsImg}
        Content={
          "Our team consists of Certified Ayush Doctors, Nutritionists and wellness coaches passionate about empowering individuals to overcome obesity and achieve sustainable weight management."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={
          <>
            Why Choose Our Online Weight Management & Obesity
            <br />
            Consultation Service?
          </>
        }
        BriefTitleMobile={
          <>
            Why Choose Our Online Weight
            <br />
            Management & Obesity Consultation
            <br />
            Service?
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Customized Approach:</strong> We recognize
            that weight management is not a one-size-fits-all solution. Our
            experienced team of nutritionists, dietitians, and health
            professionals develop personalized plans tailored to your body,
            metabolism, health conditions, and lifestyle.
          </>,
          <>
            <strong className="brown">Professional Guidance:</strong> Our
            experts specialize in obesity and weight management, providing
            evidence-based advice and strategies to help you reach your goals
            safely and effectively.
          </>,
          <>
            <strong className="brown">Convenience:</strong> Access our services
            from anywhere at your convenience. Whether you're at home, at work,
            or travelling, our online consultations offer flexibility without
            compromising on the quality of care.
          </>,
          <>
            <strong className="brown">Holistic Approach:</strong> We believe in
            addressing the Underlying factors and the root cause contributing to
            weight gain. Our consultations encompass dietary guidance, exercise
            recommendations, behaviour modification, and emotional support to
            foster sustainable lifestyle changes.
          </>,
          <>
            <strong className="brown">Ongoing Support:</strong> Beyond
            consultations, we offer continuous support, monitoring progress,
            making necessary adjustments, and providing motivation to keep you
            on track towards your weight management goals.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={"How Our Consultation Works:"}
        BriefTitleMobile={<>How Our Consultation Works:</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Assessment:</strong> Our
            initial assessment involves a detailed review of your medical
            history, lifestyle habits, dietary patterns, and weight-related
            concerns.
          </>,
          <>
            <strong className="brown">Personalized Plan:</strong> Based on the
            assessment, our experts create a customized plan that includes a
            balanced diet, exercise regimen, behaviour modification strategies,
            and any necessary medical interventions.
          </>,
          <>
            <strong className="brown">Regular Follow-ups:</strong> Engage in
            regular online sessions or follow-ups with our professionals to
            track progress, discuss challenges, and make necessary modifications
            to the plan.
          </>,
          <>
            <strong className="brown">Education and Support:</strong> Gain
            valuable insights into nutrition, portion control, meal planning,
            and lifestyle changes through educational resources provided by our
            team.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Take the first step toward a healthier, happier life. Book your online weight management and obesity consultation session today and let us guide you towards a more fulfilling and healthier lifestyle."
        }
        Content2={
          "Join us and embark on a journey towards long-term weight management and improved well-being."
        }
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default WeightManagementAndObesity;
