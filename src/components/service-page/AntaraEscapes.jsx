import AboutUsImg from "/about-us-escapes.jpg";
import ServiceImg from "/escapes-img-3.jpg";
import ServiceImg2 from "/escapes-img-5.jpg";
import ServiceImg3 from "/escapes-img-6.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";

function AntaraEscapes() {
  const Title = "Antara Escapes";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection Title={""} BgClass={"service-escapes-section1"} />
      <ServiceDetails
        isExclusive={true}
        Title={"Antara Escapes"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={
          <>
            Antara Escapes
            <br />
            Transform Your Body, Mind, and Spirit
          </>
        }
        AboutTitleMobile={
          <>
            Antara Escapes
            <br />
            Transform Your Body, Mind,
            <br />
            and Spirit
          </>
        }
        AboutContent={
          "Immerse yourself in the restorative power of nature, guided by experts dedicated to your complete well-being."
        }
      />
      <HomePageAbout
        isAlterPosition={true}
        Title={""}
        TitleMobile={""}
        Image={AboutUsImg}
        Content={
          "Escape the ordinary and immerse yourself in a world of holistic rejuvenation. Our meticulously designed escapes seamlessly blend stunning destinations, transformative practices, and expert guidance for a rejuvenation experience tailored to your unique needs and goals."
        }
        Content2={
          "From personalized wellness goals to the finest travel details, we curate an escape that exceeds your expectations. Experience the pinnacle of transformative travel, where deep relaxation, renewed vitality, and ultimate well-being await."
        }
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BriefTitle={<>What Sets Us Apart</>}
        BriefTitleMobile={<>What Sets Us Apart</>}
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Expertly Designed & Guided:</strong> Our
            escapes are meticulously crafted by a team including naturopathic
            doctors, dieticians, yoga instructors, performance coaches, and
            luxury travel experts. These experts may also accompany you on your
            trip, ensuring each element contributes to your physical, mental,
            and emotional well-being, and every detail of your travel experience
            is seamless and luxurious.
          </>,
          <>
            <strong className="brown">Personalized Approach:</strong> We
            understand that wellness and luxury are deeply individual. We offer
            guidance and experiences tailored to your unique needs, goals, and
            preferences.
          </>,
          <>
            <strong className="brown">Destinations That Inspire:</strong>{" "}
            Explore stunning natural landscapes that have the power to quiet the
            mind and awaken the soul.
          </>,
        ]}
      />
      <ServiceInBrief
        BgColor="bg-white"
        isBriefAlterPosition={true}
        isListDotted={true}
        BriefTitle={<>Your Wellness Journey:</>}
        BriefTitleMobile={<>Your Wellness Journey:</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Mindful Movement & Yoga:</strong>{" "}
            Experience the revitalizing power of yoga, guided by experienced
            instructors in inspiring settings.
          </>,
          <>
            <strong className="brown">
              Nourishing Cuisine & Culinary Delights:
            </strong>{" "}
            Delight in healthy, flavorful meals created with fresh, local
            ingredients and designed to support your well-being. Our team of
            dieticians can personalize your menu to meet your specific needs.
          </>,
          <>
            <strong className="brown">
              Performance Coaching Introduction:
            </strong>{" "}
            Get a taste of performance coaching with personalized assessments
            and guidance from our experts to kickstart your journey.
          </>,
          <>
            <strong className="brown">Restorative Practices:</strong> Discover
            the healing power of meditation, nature immersion, and other
            practices designed to promote deep relaxation and inner peace.
          </>,
          <>
            <strong className="brown">Empowering Education:</strong> Gain
            valuable insights and tools from our experts to take home with you,
            continuing your wellness journey long after your escape ends.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        isListDotted={true}
        BriefTitle={<>Benefits of Your Journey</>}
        BriefTitleMobile={<>Benefits of Your Journey</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>Renewed energy and vitality</>,
          <>Deep relaxation and stress reduction</>,
          <>Improved physical health and fitness</>,
          <>Mental clarity and emotional balance</>,
          <>Tools and practices for continued well-being at home</>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        isListDotted={true}
        BgColor="bg-white"
        BriefTitle={<>Destinations Designed for Transformation</>}
        BriefTitleMobile={<>Destinations Designed for Transformation</>}
        BriefImg={ServiceImg3}
        BriefContents={[
          <>
            Our team of experts meticulously handpicks destinations with your
            ultimate wellness in mind, considering your individual needs and
            health history.
          </>,
          <>
            Explore surprising destinations chosen to maximize your
            transformative experience.
          </>,
          <>
            Experience the unique wellness benefits of each carefully chosen
            location.
          </>,
          <>Stay tuned for the big reveal</>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={true}
        Title={"Reach Us Through:"}
        TitleMobile={"Reach Us Through:"}
        Content1={""}
        Content2={""}
      />
    </div>
  );
}

export default AntaraEscapes;
