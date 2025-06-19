import AboutUsImg from "/yogaclub-img-2.jpeg";
import AboutUsImg2 from "/yogaclub-img-4.jpg";
import ServiceImg from "/yogaclub-img-3.jpg";
import ServiceImg2 from "/yogaclub-img-5.jpg";

import HomePageAbout from "../home-page/home-components/About";
import AboutService from "./service-components/AboutService";
import ServiceInBrief from "./service-components/ServiceInBrief";
import ServiceDetails from "./service-components/ServiceDetails";
import TitleSection from "./service-components/TitleSection";
import MakeAnAppointment from "../home-page/home-components/MakeAnAppointment";
import { useState } from "react";

function YogaClub() {
  const Title = "Yoga Club";

  useState(() => {
    document.title = `${Title} | Antara | Online consultation`;
  }, []);

  return (
    <div>
      <TitleSection Title={""} BgClass={"service-yogaclub-section1"} />
      <ServiceDetails
        isExclusive={true}
        Title={"Yoga Club"}
        Length={""}
        Price={""}
      />
      <AboutService
        AboutTitle={
          <>
            Welcome to Antara’s Signature Yoga Club,
            <br />
            your Pathway to long-term Wellness
          </>
        }
        AboutTitleMobile={
          <>
            Welcome to Antara’s Signature
            <br />
            Yoga Club, your Pathway to
            <br />
            long-term Wellness
          </>
        }
        AboutContent={
          "Discover the perfect balance between mind, body, and spirit with our exclusive Yoga Club. Whether you're seeking personalized monthly sessions or the camaraderie of group practice, our offerings cater to your individual journey towards holistic well-being."
        }
      />
      <HomePageAbout
        isAlterPosition={true}
        Title={
          <>
            Private Yoga Sessions
            <br />
            Embrace the Flexibility
            <br />
            of Your Schedule
          </>
        }
        TitleMobile={
          <>
            Private Yoga Sessions
            <br />
            Embrace the Flexibility
            <br />
            of Your Schedule
          </>
        }
        Image={AboutUsImg}
        Content={
          "In today's fast-paced world, finding time for self-care can be a challenge. Our private yoga sessions are tailored to fit seamlessly into your busy lifestyle. As a working professional, you understand the value of time. With our private sessions, you have the freedom to choose the time slot that suits you best, every single day. Whether it's early morning before work, a midday break, or a relaxing evening wind-down, our expert instructors are here to guide you through rejuvenating practices designed to align your body and mind."
        }
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BriefTitle={<>Main Benefits</>}
        BriefTitleMobile={<>Main Benefits</>}
        BriefImg={ServiceImg}
        BriefContents={[
          <>
            <strong className="brown">Convenience:</strong> Choose sessions that
            align with your availability, enhancing consistency and commitment
            to your practice. You have the freedom to choose the time slot that
            suits you best, every single day.
          </>,
          <>
            <strong className="brown">Personalized Attention:</strong> Receive
            tailored instruction and adjustments according to your personal
            health history, ensuring maximum benefit from each session.
          </>,
          <>
            <strong className="brown">Stress Relief:</strong> Decompress from
            the demands of work and life, promoting relaxation and mental
            clarity.
          </>,
          <>
            <strong className="brown">Progressive Growth:</strong> Work at your
            own pace, advancing through asanas and techniques under the guidance
            of experienced instructors.
          </>,
          <>
            <strong className="brown">Exclusive Access & Priority:</strong> As a
            club member, receive priority booking and special offers for our
            transformative Antara Escapes.
          </>,
        ]}
      />
      <HomePageAbout
        isAlterPosition={true}
        Title={
          <>
            Group Sessions
            <br />
            Join a Community,
            <br />
            Elevate Your Practice
          </>
        }
        TitleMobile={""}
        Image={AboutUsImg2}
        Content={
          "For those who thrive in a supportive group environment, our monthly group sessions offer a sense of belonging and encouragement at a fixed time slot every day. Surround yourself with like-minded individuals on a similar wellness journey as you bond over the shared experience of yoga practice. These sessions are perfect for individuals seeking motivation, accountability, and the camaraderie of a cohort."
        }
        Content2={""}
      />
      <ServiceInBrief
        isBriefAlterPosition={true}
        BriefTitle={<>Main Benefits</>}
        BriefTitleMobile={<>What Sets Us Apart</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Community:</strong> Connect with fellow
            practitioners, fostering a sense of belonging and support at a fixed
            time slot every day.
          </>,
          <>
            <strong className="brown">Motivation:</strong> Draw inspiration from
            group energy and shared goals, enhancing commitment to your
            practice.
          </>,
          <>
            <strong className="brown">Variety:</strong> Explore diverse yoga
            styles and techniques in a collaborative setting, enriching your
            overall experience.
          </>,
          <>
            <strong className="brown">Accountability:</strong> Stay on track
            with your wellness goals through regular attendance and
            encouragement from peers.
          </>,
          <>
            <strong className="brown">Social Engagement:</strong> Cultivate
            meaningful relationships while nurturing your mind, body, and
            spirit.
          </>,
          <>
            <strong className="brown">Exclusive Access & Priority:</strong> As a
            club member, receive priority booking and special offers for our
            transformative Antara Escapes.
          </>,
        ]}
      />
      <ServiceInBrief
        isBriefAlterPosition={false}
        BgColor="bg-white"
        BriefTitle={<>How we work</>}
        BriefTitleMobile={<>Benefits of Your Journey</>}
        BriefImg={ServiceImg2}
        BriefContents={[
          <>
            <strong className="brown">Initial Assessment:</strong> We begin with
            a comprehensive evaluation to understand your goals, health records,
            fitness level, physical limitations, and preferences.
          </>,
          <>
            <strong className="brown">Customized Plan:</strong> Based on the
            assessment, we create a personalized yoga plan tailored specifically
            to meet your needs and aspirations.
          </>,
          <>
            <strong className="brown">Regular Monthly Sessions:</strong> Engage
            in scheduled online sessions with your dedicated instructor,
            receiving continuous support and guidance throughout your yoga
            journey.
          </>,
          <>
            <strong className="brown">Progress Tracking:</strong> We track your
            progress, making necessary adjustments to ensure you're consistently
            moving towards your goals.
          </>,
        ]}
      />
      <MakeAnAppointment
        isServicePage={true}
        AlterWhatsApp={false}
        Title={"Get Started Today:"}
        TitleMobile={"Get Started Today:"}
        Content1={
          "At Antara’s Yoga Club, whether you prefer the intimacy of private sessions or the vibrancy of group practice, our experienced instructors are dedicated to guiding you towards optimal health and vitality."
        }
        Content2={
          "Join us today and embark on a transformative path towards holistic well-being."
        }
      />
    </div>
  );
}

export default YogaClub;
