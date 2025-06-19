import { useEffect } from "react";
import PageTitleSection from "../title-sections/PageTitleSection"
import About from "./about-components/About";
import OurDoctors from "../doctors-section/OurDoctors";

// Static Images
import AboutUsImg from "/about-us-2.jpeg"
import AboutUsImg2 from "/about-us-4.png"
import MeetOurTeam from "/meet-our-team.png"
import Enquiry from "../enquiry-section/Enquiry";

function AboutPage() {
  
  const Title = "About us";
                
  useEffect(() => {
    document.title = `${ Title } | Antara | Online consultation`;
  }, []);

  return (
    <div>
        <PageTitleSection Content={ <>Welcome to Antara,<br/>Your Naturopath from<br/>India.</> }/>
        <About isAlterPosition={false} Image={ AboutUsImg } ImageAlt={ "About Naturopathy Image" } Title={ <>Your Virtual Destination<br/>for Holistic Wellness,<br/>Rooted in Personalized<br/>Online Care.</> } TitleMobile={ <>Your Virtual Destination<br/>for Holistic Wellness,<br/>Rooted in Personalized<br/>Online Care.</> } Content1={ "Founded by a devoted team of seasoned naturopathic doctors, practitioners, and wellness enthusiasts, Antara is deeply committed to fostering holistic well-being. Our mission is to tackle health issues at their roots, promoting comprehensive wellness. At Antara, we prioritize a patient-centric approach, dedicating time to comprehend your individual health concerns, lifestyle choices, and aspirations." } Content2={ "We prioritize the most natural, least invasive and least toxic therapies and long-term goals to treat illness, and promote lifelong wellness by viewing the body as an integrated whole – Antara is all about that." } Content3={ "" }/>
        <OurDoctors/>
        <About isAlterPosition={true} Image={ AboutUsImg2 } ImageAlt={ "Naturopathy Consultation Image" } Title={ "Our Approach" } TitleMobile={ "Our Approach" } Content1={ "Listening, Understanding, and Customizing Holistic Solutions." } Content2={ "We understand that each individual is unique, and so are their health concerns. That's why we take the time to listen and understand your specific needs, lifestyle, and health goals." } Content3={ "By embracing a holistic perspective, we aim to create customized treatment plans that encompass various natural modalities, including herbal medicine, nutrition, lifestyle modifications, and more." }/>
        <About isAlterPosition={false} isBgSandal={true} Image={ MeetOurTeam } ImageAlt={ "Our Team Image" } Title={ "Meet our team" } TitleMobile={ "Meet our team" } Content1={ "Our dedicated team consists of licensed Naturopathic doctors and certified practitioners who are deeply passionate about accompanying you on your unique wellness journey. Committed to continual education and staying at the forefront of advancements in Natural medicine, our experts are devoted to providing you with the highest standard of care." } Content2={ "Recognizing the intricate interplay between our bodies, the environment, and our lifestyles, our doctors adopt a whole-person approach to health. It's through this comprehensive perspective that we aim to restore balance and vitality, promoting lasting health and well-being." } Content3={ "At Antara, our mission is to empower you to thrive in health and vitality by embracing a holistic view of wellness. We believe in the synergy between the body, mind, and spirit and strive to guide you towards achieving harmony in all aspects of your life." }/>
        <Enquiry/>
    </div>
  )
}

export default AboutPage