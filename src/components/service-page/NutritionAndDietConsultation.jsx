import AboutUsImg from "/about-us-4.png";
import ServiceImg from "/service-dc-2.jpg";
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

function NutritionAndDietConsultation() {
  const Title = "Nutrition And Diet Consultation";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection
        Title={
          <>
            Nutrition and Diet
            <br />
            Consultations
          </>
        }
        BgClass={"service-ndc-section1"}
      />
      <ServiceDetails
        isExclusive={false}
        Title={"Nutrition & Diet Consultation"}
        Length={""}
        Price={"₹ 650"}
      />
      <AboutService
        AboutTitle={
          <>
            Naturopathic Nutrition Consultation: Nourishing Your Health
            <br />
            From Within
          </>
        }
        AboutTitleMobile={
          <>
            Naturopathic Nutrition
            <br />
            Consultation: Nourishing Your
            <br />
            Health From Within
          </>
        }
        AboutContent={
          "At Antara, we recognize the vital role nutrition plays in overall health and well-being. Our Nutrition Consultations are designed to empower you with personalized dietary guidance, emphasizing the healing power of food to support optimal health and vitality."
        }
      />
      <HomePageAbout
        isAlterPosition={false}
        Title={
          <>
            Why Choose
            <br />
            <span>Nutrition Consultations?</span>
          </>
        }
        TitleMobile={
          <>
            Why Choose
            <br />
            Nutrition Consultations?
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
        BriefTitle={
          <>
            What to Expect from Our Naturopathic Nutrition
            <br />
            Consultations:
          </>
        }
        BriefTitleMobile={
          <>
            What to Expect from Our Online
            <br />
            Naturopathic Consultations:
          </>
        }
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Comprehensive Dietary Assessment:</strong>{" "}
            Our experienced naturopathic nutritionists will conduct a
            comprehensive evaluation of your current diet, nutritional status,
            health concerns, lifestyle factors, and individual goals.
          </>,
          <>
            <strong className="brown">Personalized Nutrition Plan:</strong>{" "}
            Based on the assessment, we create a personalized nutrition plan
            tailored to your unique needs. This plan may include dietary
            recommendations, meal planning, nutritional supplementation, and
            guidance on incorporating wholesome, nutrient-dense foods into your
            daily routine.
          </>,
          <>
            <strong className="brown">Education and Guidance:</strong> We
            believe in empowering our clients with knowledge about the
            relationship between food and health. You'll receive education on
            optimal nutrition, label reading, healthy cooking methods, portion
            control, and strategies for maintaining a balanced and sustainable
            diet.
          </>,
          <>
            <strong className="brown">Lifestyle Integration:</strong> Our
            approach integrates nutrition into your overall lifestyle,
            considering factors like stress management, sleep quality, exercise,
            and mindfulness practices to support holistic well-being.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BgColor="bg-white"
        BriefTitle={"Benefits of Naturopathic Nutrition Consultations:"}
        BriefTitleMobile={
          <>
            Benefits of Naturopathic Nutrition
            <br />
            Consultations:
          </>
        }
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Personalized Nutrition:</strong> Tailored
            plans addressing your unique health concerns and goals.
          </>,
          <>
            <strong className="brown">Holistic Approach:</strong> Emphasizing
            the connection between nutrition and overall wellness.
          </>,
          <>
            <strong className="brown">Education and Empowerment:</strong>{" "}
            Equipping you with the knowledge to make informed dietary choices.
          </>,
          <>
            <strong className="brown">Long-Term Health:</strong> Supporting
            preventive measures and sustainable dietary habits.
          </>,
          <>
            <strong className="brown">Optimal Nutritional Support:</strong>{" "}
            Enhancing energy, immunity, and overall vitality.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={""}
        TitleMobile={""}
        Content1={
          "Experience the transformative power of personalized nutrition. Schedule a naturopathic nutrition consultation at Antara and take the first step towards nourishing your health from the inside out."
        }
        Content2={""}
      />
      <OurDoctors />
      <EnquiryService />
    </div>
  );
}

export default NutritionAndDietConsultation;
