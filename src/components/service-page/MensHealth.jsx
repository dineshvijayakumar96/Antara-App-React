import ServiceImg from "/service-mh-3.jpg";
import ServiceImg2 from "/service-mh-2.jpg";
import ServiceImg3 from "/service-hh-3.jpg";

import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import OurDoctors from "../doctors-section/OurDoctors";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";
import EnquiryService from "./service-components/EnquiryService";

function MensHealth() {
  const Title = "Men's Health";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection Title={<>Men's Health</>} BgClass={"service-cc-section1"} />
      <ServiceDetails
        isExclusive={false}
        Title={"Men's Health"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={
          <>
            Welcome to Antara’s
            <br />
            Men's Health Consultation
          </>
        }
        AboutTitleMobile={
          <>
            Welcome to Antara’s Men's
            <br />
            Health Consultation
          </>
        }
        AboutContent={
          "At Antara, we combine the principles of naturopathic medicine with a focus on men's health to provide holistic and personalized consultations. Our online platform aims to address men's health concerns using natural and integrative approaches for optimal well-being."
        }
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={<>Why Choose Our Men's Health Consultation Services?</>}
        BriefTitleMobile={
          <>
            Why Choose Our Men's Health
            <br />
            Consultation Services?
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Naturopathic Expertise:</strong> Our team
            consists of qualified naturopathic doctors specialized in men's
            health. They emphasize natural healing methods, including herbal
            medicine, nutrition, lifestyle modifications, and mind-body
            techniques.
          </>,
          <>
            <strong className="brown">Comprehensive Approach:</strong> We take a
            comprehensive view of men's health, addressing various aspects such
            as hormonal balance, sexual health, mental well-being, digestive
            health, and more using natural remedies.
          </>,
          <>
            <strong className="brown">Personalized Care:</strong> Each
            consultation is tailored to your individual needs. Our naturopathic
            doctors take the time to understand your health concerns, history,
            and goals to create a customized treatment plan.
          </>,
          <>
            <strong className="brown">Accessible and Convenient:</strong> Access
            our services conveniently from anywhere. Our online consultations
            eliminate the need for travel and waiting rooms, allowing you to
            connect with our experts at your convenience.
          </>,
          <>
            <strong className="brown">Empowerment Through Education:</strong> We
            believe in empowering men to take charge of their health. Our
            consultations include guidance on lifestyle modifications, dietary
            choices, supplements, and self-care practices.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={"Services Offered:"}
        BriefTitleMobile={<>Services Offered:</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Hormonal Balance:</strong> Address issues
            related to testosterone levels, adrenal health, thyroid function,
            and other hormonal imbalances using natural approaches.
          </>,
          <>
            <strong className="brown">Sexual Health:</strong> Seek natural
            solutions for erectile dysfunction, libido concerns, prostate
            health, and other sexual health issues through our specialized
            consultations.
          </>,
          <>
            <strong className="brown">Digestive Wellness:</strong> Discover
            natural approaches to improve gut health, manage digestive
            disorders, and enhance overall wellness through naturopathic
            recommendations.
          </>,
          <>
            <strong className="brown">Mental Well-being:</strong> Explore
            natural methods to manage stress, anxiety, and depression, and
            enhance mental resilience for better overall health.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={<>How Our Consultation Works:</>}
        BriefTitleMobile={<>How Our Consultation Works:</>}
        BriefImg={ServiceImg3}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Assessment:</strong> Our
            naturopathic doctors conduct a thorough evaluation, considering your
            health history, current symptoms, lifestyle, and goals.
          </>,
          <>
            <strong className="brown">Individualized Treatment Plan:</strong>{" "}
            Based on the assessment, a personalized treatment plan is crafted,
            incorporating natural therapies, dietary recommendations, herbal
            remedies, and lifestyle modifications.
          </>,
          <>
            <strong className="brown">Follow-up and Support:</strong> Engage in
            follow-up consultations to track progress, make adjustments to the
            treatment plan, and receive ongoing support on your wellness
            journey.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Prioritize your health and vitality. Book your health consultation session today and embark on a journey towards natural wellness and vitality."
        }
        Content2={
          "Join Antara to embrace natural solutions for optimal men's health."
        }
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default MensHealth;
