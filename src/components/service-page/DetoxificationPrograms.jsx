import AboutUsImg from "/service-sc-2.jpg";
import ServiceImg from "/service-dt-2.jpg";
import ServiceImg2 from "/service-dt-3.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import OurDoctors from "../doctors-section/OurDoctors";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";
import EnquiryService from "./service-components/EnquiryService";

function DetoxificationPrograms() {
  const Title = "Detoxification Programs";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={<>Detoxification Programs</>}
        BgClass={"service-dp-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Detoxification Programs"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={<>Rejuvenate Your Health Naturally</>}
        AboutTitleMobile={
          <>
            Rejuvenate Your Health
            <br />
            Naturally
          </>
        }
        AboutContent={
          "At Antara, we recognize the importance of detoxifying the body to promote optimal health and vitality. Our online naturopathic detoxification consultations offer personalized guidance and support to help you embark on a transformative journey towards renewed well-being from the comfort of your own home."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={
          <>
            Why Choose
            <br />
            <span>
              Online Naturopathic Detoxification
              <br />
              Consultations?
            </span>
          </>
        }
        TitleMobile={
          <>
            Why Choose Online Naturopathic
            <br />
            Detoxification Consultations?
          </>
        }
        Image={AboutUsImg}
        Content={
          "Our online consultations provide a convenient and accessible platform to explore detoxification programs that focus on eliminating toxins, supporting the body's natural cleansing processes, and rejuvenating your health. Our experienced naturopathic practitioners offer personalized guidance to help you achieve a balanced and revitalized state."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={
          <>
            What to Expect from Our Online Naturopathic <br />
            Detoxification Programs Consultation:
          </>
        }
        BriefTitleMobile={
          <>
            What to Expect from Our Online
            <br />
            Detoxification Programs
            <br />
            Consultation:
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Evaluation:</strong> During
            the virtual consultation, our skilled naturopathic practitioners
            will conduct a thorough evaluation of your health history, lifestyle
            habits, dietary patterns, toxin exposure, and specific
            detoxification goals.
          </>,
          <>
            <strong className="brown">Personalized Detox Plan:</strong> Based on
            the assessment, we create a customized detoxification plan tailored
            to your individual needs. This plan may include dietary
            recommendations, nutritional support, herbal remedies, lifestyle
            adjustments, and techniques to support the body's natural detox
            pathways.
          </>,
          <>
            <strong className="brown">Guidance and Support:</strong> Our
            practitioners will guide you through the detox process, providing
            education, resources, and ongoing support to help you navigate the
            program effectively and safely.
          </>,
          <>
            <strong className="brown">Holistic Well-being:</strong> Our approach
            focuses not only on detoxifying the body but also on supporting
            overall wellness. We aim to empower you with tools for maintaining a
            healthy lifestyle beyond the detox program.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={
          <>
            Benefits of Online Naturopathic Detoxification
            <br />
            Programs:
          </>
        }
        BriefTitleMobile={
          <>
            Benefits of Online Naturopathic
            <br />
            Detoxification Programs:
          </>
        }
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Convenience:</strong> Access
            detoxification programs and support from anywhere with internet
            access.
          </>,
          <>
            <strong className="brown">Personalized Approach:</strong> Tailored
            detox plans to address your unique health and detoxification goals.
          </>,
          <>
            <strong className="brown">Toxin Elimination:</strong> Supporting the
            body's natural processes to eliminate toxins.
          </>,
          <>
            <strong className="brown">Renewed Vitality:</strong> Promoting
            increased energy, clearer skin, improved digestion, and overall
            well-being.
          </>,
          <>
            <strong className="brown">Empowerment:</strong> Equipping you with
            tools for maintaining a toxin-free lifestyle.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Begin your journey towards renewed health and vitality. Schedule an online naturopathic detoxification consultation at Antara and experience the transformative benefits of natural detoxification from the comfort of your home."
        }
        Content2={""}
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default DetoxificationPrograms;
