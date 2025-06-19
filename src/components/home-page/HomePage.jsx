// Images
import YogaClubImg from "/yogaclub-img-home.jpg"
import YogaClubImgM from "/yogaclub-img-home-m.jpg"
import EscapeImg from "/escapes-img-1.jpg"
import EscapeImgM from "/escapes-img-1-m.jpg"
import HomeAbout from "/home-about.jpg"

import About from './home-components/About'
import Consultations from './home-components/Consultations'
import OurDoctors from '../doctors-section/OurDoctors'
import Slider from './home-components/Slider'
import YogaClubAndEscape from './home-components/YogaClub'
import SpecialedCares from "./home-components/SpecialedCares"
import StepsToBook from "./home-components/StepsToBook"
import Rates from "./home-components/Rates"
import TalkToDoctor from "./home-components/TalkToDoctor"
import Testimonials from "./home-components/Testimonials"
import MakeAnAppointment from "./home-components/MakeAnAppointment"
import Enquiry from "../enquiry-section/Enquiry"

function HomePage() {
  return (
    <div>
        <Slider/>
        <About
          isAlterPosition={false}
          Title={ "At Antara," }
          TitleMobile={ "At Antara," }
          Image={ HomeAbout }
          Content={ "We believe in the power of nature to heal and rejuvenate the body, mind and spirit. Our approach to wellness combines traditional Naturopathic principles with modern scientific knowledge, providing comprehensive and personalized care to support your journey towards optimal health. " }
          Content2={ "" }
        />
        <OurDoctors/>
        <Consultations/>
        <YogaClubAndEscape
          Link={"/yoga-club"}
          DesktopImg={YogaClubImg}
          MobileImg={YogaClubImgM}
          Title={"Yoga club"}
          Description={"Discover the perfect balance between mind, body, and spirit with our exclusive Yoga Club. Whether you're seeking personalized monthly sessions or the camaraderie of group practice, our offerings cater to your individual journey towards holistic well-being."}
        />
        <YogaClubAndEscape
          Link={"/escape"}
          DesktopImg={EscapeImg}
          MobileImg={EscapeImgM}
          Title={"Antara Escapes"}
          Description={"Escape the ordinary and immerse yourself in a world of holistic rejuvenation. Our meticulously designed escapes seamlessly blend stunning destinations, transformative practices, and expert guidance for a rejuvenation experience tailored to your unique needs and goals."}
        />
        <SpecialedCares/>
        <Rates/>
        <StepsToBook/>
        <TalkToDoctor
          isServicePage={false}
          Title={ "Are you ready for change?" }
          TitleMobile={ "Are you ready for change?" }
          Content1={ "Imagine feeling the kind of confidence that comes with knowing that you’re in control of your own body. Imagine your symptoms no longer control your mood or energy." }
          Content2={ "Our team at Antara is ready to support and guide you on your journey to living a healthy life, regaining your confidence and well-being so that you can get back to living your life to its fullest" }
        />
        <Testimonials/>
        <MakeAnAppointment
          isServicePage={false}
          AlterWhatsApp={false}
          Title={ <>Your next step towards<br/>a healthier lifestyle<br/>starts today</> }
          TitleMobile={ "" }
          Content1={ "" }
          Content2={ "" }
        />
        <Enquiry/>
    </div>
  )
}

export default HomePage