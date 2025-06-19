import AboutUsImg from "/about-us-4.png";
import ServiceImg from "/service-ww-2.jpg";
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

function WomensWellness() {
  const Title = "Women's Wellness";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={<>Women Wellness</>}
        BgClass={"service-ww-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Women's Wellness"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={
          <>
            Naturopathic Women's Wellness Consultation:
            <br />
            Nurturing Health at Every Stage
          </>
        }
        AboutTitleMobile={
          <>
            Naturopathic Women's
            <br />
            Wellness Consultation:
            <br />
            Nurturing Health at Every Stage
          </>
        }
        AboutContent={
          "At Antara, we understand the unique health needs of women and offer specialized naturopathic consultations focused on promoting holistic well-being throughout all stages of life. Our team of naturopathic doctors is dedicated to providing personalized and comprehensive care that addresses women's health concerns naturally and effectively."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={
          <>
            Why Choose Naturopathic Care for
            <br />
            Women's Wellness?
          </>
        }
        TitleMobile={
          <>
            Why Choose
            <br />
            Naturopathic Care for Women's Wellness?
          </>
        }
        Image={AboutUsImg}
        Content={
          "Naturopathic medicine takes a whole-person approach to women's health, considering physical, emotional, and hormonal factors that may impact well-being. Our consultations integrate traditional naturopathic therapies with modern scientific knowledge, empowering women to achieve optimal health and vitality."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={
          <>
            What to Expect from Our Naturopathic <br />
            Women's Wellness Consultation:
          </>
        }
        BriefTitleMobile={
          <>
            What to Expect from Our
            <br />
            Naturopathic Women's Wellness
            <br />
            Consultation:
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Evaluation:</strong> Our
            experienced naturopathic doctors conduct a thorough assessment of
            your health history, lifestyle, nutritional status, hormonal
            balance, reproductive health, and any specific concerns or symptoms
            you may have.
          </>,
          <>
            <strong className="brown">Personalized Health Plan: :</strong> Based
            on your assessment, we create a tailored health plan that may
            include dietary recommendations, nutritional supplements, herbal
            medicine, hormonal balancing techniques, lifestyle adjustments,
            stress management strategies, and more.
          </>,
          <>
            <strong className="brown">Hormonal Health Support:</strong> We
            provide natural approaches to support hormonal balance, and address
            menstrual irregularities, menopausal symptoms, fertility concerns,
            and other hormonal imbalances affecting women's health.
          </>,
          <>
            <strong className="brown">Holistic Wellness:</strong> Our approach
            emphasizes overall wellness, encompassing physical, emotional, and
            mental health. We aim to support women in achieving balance,
            vitality, and optimal health in every aspect of their lives.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={
          <>
            Benefits of Naturopathic Women's Wellness
            <br />
            Care:
          </>
        }
        BriefTitleMobile={
          <>
            Benefits of Naturopathic Women's
            <br />
            Wellness Care:
          </>
        }
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Personalized Care:</strong> Tailored plans
            to address individual health needs.
          </>,
          <>
            <strong className="brown">Hormonal Balance:</strong> Natural
            approaches to support hormonal health and balance.
          </>,
          <>
            <strong className="brown">Empowerment:</strong> Equipping women with
            tools for managing various life stages.
          </>,
          <>
            <strong className="brown">Whole-Person Care:</strong> Considering
            emotional, mental, and physical well-being.
          </>,
          <>
            <strong className="brown">Preventative Focus:</strong> Strategies to
            promote long-term health and wellness.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Experience personalized care that nurtures your well-being at every stage of life. Schedule a naturopathic women's wellness consultation at Antara and embark on a journey towards vibrant health and vitality."
        }
        Content2={""}
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default WomensWellness;
