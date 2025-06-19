import AboutUsImg from "/service-sc-2.jpg";
import ServiceImg from "/service-sc-3.jpg";
import ServiceImg2 from "/service-sc-4.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import OurDoctors from "../doctors-section/OurDoctors";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";
import EnquiryService from "./service-components/EnquiryService";

function SeniorCare() {
  const Title = "Senior Care";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection Title={<>Senior Care</>} BgClass={"service-sc-section1"} />
      <ServiceDetails
        isExclusive={false}
        Title={"Senior Care"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={<>Empowering Golden Years, Virtually.</>}
        AboutTitleMobile={
          <>
            Empowering Golden Years,
            <br />
            Virtually.
          </>
        }
        AboutContent={
          "At Antara, we understand the importance of accessible healthcare, especially for seniors over the 55+ age category. Our online care programmes offer personalized support and guidance to address the unique health needs of seniors, providing convenient access to quality care from the comfort of their homes."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={
          <>
            Why Choose
            <br />
            <span>Senior Care Consultations?</span>
          </>
        }
        TitleMobile={
          <>
            Why Choose
            <br />
            Senior Care Consultations?
          </>
        }
        Image={AboutUsImg}
        Content={
          "Our online consultations provide a convenient and secure platform for senior citizens to access specialized naturopathic care remotely. Through virtual sessions, our experienced naturopathic doctors offer personalized guidance to support the health and well-being of seniors, addressing age-related concerns and promoting vitality."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={
          <>
            What to Expect from Our Online Naturopathic <br />
            Senior Citizen Care Consultation:
          </>
        }
        BriefTitleMobile={
          <>
            What to Expect from Our Online
            <br />
            Naturopathic Senior Citizen Care
            <br />
            Consultation:
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Assessment:</strong> During
            the virtual consultation, our skilled naturopathic doctors will
            conduct a thorough evaluation of the senior citizen's health
            history, current health status, medications, lifestyle factors, and
            specific concerns or conditions.
          </>,
          <>
            <strong className="brown">Tailored Care Plan:</strong> Based on the
            assessment findings, we create a personalized care plan specifically
            designed to meet the unique needs of the senior citizen. This plan
            may include dietary recommendations, nutritional supplementation,
            herbal medicine, lifestyle adjustments, gentle exercises, and
            cognitive health support.
          </>,
          <>
            <strong className="brown">Holistic Wellness Approach:</strong> Our
            focus is on supporting overall well-being by addressing physical
            health, mental clarity, emotional balance, and social engagement to
            improve the senior's quality of life and independence.
          </>,
          <>
            <strong className="brown">Education and Empowerment:</strong>{" "}
            Seniors and their caregivers will receive guidance and education on
            natural approaches to manage age-related conditions, promote
            preventive health measures, and maintain an active and fulfilling
            lifestyle.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={
          <>
            Benefits of Online Naturopathic Senior Citizen
            <br />
            Care:
          </>
        }
        BriefTitleMobile={
          <>
            Benefits of Online Naturopathic
            <br />
            Senior Citizen Care:
          </>
        }
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Convenience and Accessibility:</strong>{" "}
            Access specialized care from anywhere with an internet connection.
          </>,
          <>
            <strong className="brown">Personalized Care:</strong> Tailored care
            plans addressing specific health concerns and needs.
          </>,
          <>
            <strong className="brown">Holistic Well-being:</strong> Supporting
            physical, mental, and emotional health for a balanced life.
          </>,
          <>
            <strong className="brown">Empowerment:</strong> Equipping seniors
            and caregivers with tools for proactive health management.
          </>,
          <>
            <strong className="brown">Safety and Comfort:</strong> Receive care
            in the familiar and comfortable setting of home.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Experience compassionate and comprehensive care for senior citizens. Schedule an consultation at Antara now and support your loved ones in maintaining their health and well-being, conveniently and safely from home."
        }
        Content2={""}
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default SeniorCare;
