import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import splitType from "split-type";

import "./App.css";
import HomePage from "./components/home-page/HomePage";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./components/about-page/AboutPage";

import { useEffect } from "react";
import YogaConsultation from "./components/service-page/YogaConsultation";
import NaturopathicConsultation from "./components/service-page/NaturopathicConsultation";
import NutritionAndDietConsultation from "./components/service-page/NutritionAndDietConsultation";
import MensHealth from "./components/service-page/MensHealth";
import WomensWellness from "./components/service-page/WomensWellness";
import WeightManagementAndObesity from "./components/service-page/WeightManagementAndObesity";
import SeniorCare from "./components/service-page/SeniorCare";
import DetoxificationPrograms from "./components/service-page/DetoxificationPrograms";
import YogaClub from "./components/service-page/YogaClub";
import AntaraEscapes from "./components/service-page/AntaraEscapes";
import ContatcUs from "./components/contact-us/ContatcUs";
import NotFound from "./components/404-page/NotFound";
import WhatsApp from "./components/floating-icon/WhatsApp";
import AdminApp from "./AdminApp";

gsap.registerPlugin(ScrollTrigger);

function App() {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/antara-admin");

  useEffect(() => {
    const createScrollAnimation = (sectionSelector) => {
      const tl = gsap.timeline();
      tl.from(sectionSelector, {
        duration: 0.5,
        ease: "power1.Out",
        xPercent: -100,
        opacity: 0,
      });
      tl.to(sectionSelector, {
        duration: 1,
        ease: "power1.Out",
        xPercent: 0,
        opacity: 1,
      });

      ScrollTrigger.create({
        trigger: sectionSelector,
        start: "top center",
        end: "center center",
        animation: tl,
      });
    };

    createScrollAnimation(".section1");
    createScrollAnimation(".section2");
    createScrollAnimation(".section3");

    const createScrollAnimation2 = (sectionSelector) => {
      const tl = gsap.timeline();
      tl.from(sectionSelector, {
        duration: 0.5,
        ease: "power1.Out",
        xPercent: 100,
        opacity: 0,
      });
      tl.to(sectionSelector, {
        duration: 1,
        ease: "power1.Out",
        xPercent: 0,
        opacity: 1,
      });

      ScrollTrigger.create({
        trigger: sectionSelector,
        start: "top center",
        end: "center center",
        animation: tl,
      });
    };

    createScrollAnimation2(".section4");

    gsap.from(".service-title-box-bg", {
      duration: 0.5,
      ease: "power1.Out",
      xPercent: -100,
    });

    gsap.to(".service-title-box-bg", {
      duration: 1,
      ease: "power1.Out",
      xPercent: 0,
    });

    const createScrollAnimation3 = (sectionSelector) => {
      const tl = gsap.timeline();
      tl.from(sectionSelector, {
        duration: 0,
        ease: "power1.Out",
        yPercent: 100,
        opacity: 0,
      });
      tl.to(sectionSelector, {
        duration: 1,
        ease: "power1.Out",
        yPercent: 0,
        opacity: 1,
      });

      ScrollTrigger.create({
        trigger: sectionSelector,
        start: "center center",
        end: "center center",
        animation: tl,
      });
    };

    const titleBorders = [
      ".title-border-ani-0",
      ".title-border-ani-1",
      ".title-border-ani-2",
      ".title-border-ani-3",
      ".title-border-ani-4",
      ".title-border-ani-5",
      ".title-border-ani-6",
      ".title-border-ani-7",
      ".title-border-ani-8",
    ];

    titleBorders.forEach(createScrollAnimation3);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const ourText = new splitType(".text-animate-2", { types: "chars" });
    gsap.fromTo(
      ourText.chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.4,
        ease: "power1.out",
        delay: 0.8,
      }
    );

    const createAnimation = (element) => {
      const instance = new splitType(element, { types: "chars" });
      return gsap.fromTo(
        instance.chars,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          duration: 0.5,
          ease: "power1.out",
          delay: 0.5,
        }
      );
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          createAnimation(entry.target).play();
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = document.querySelectorAll(".text-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollToTop />
      { !isAdminRoute && <Header /> }
      { !isAdminRoute && <WhatsApp/> }
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
          <Route path="/our-specialities/yoga-consultations" element={ <YogaConsultation/> }></Route>
          <Route path="/our-specialities/naturopathic-consultations" element={ <NaturopathicConsultation/> }></Route>
          <Route path="/our-specialities/nutrition-and-diet-consultations" element={ <NutritionAndDietConsultation/> }></Route>
          <Route path="/our-specialised-cares/mens-health" element={ <MensHealth/> }></Route>
          <Route path="/our-specialised-cares/womens-wellness" element={ <WomensWellness/> }></Route>
          <Route path="/our-specialised-cares/weight-management-and-obesity" element={ <WeightManagementAndObesity/> }></Route>
          <Route path="/our-specialised-cares/senior-care" element={ <SeniorCare/> }></Route>
          <Route path="/our-specialised-cares/detoxification-programs" element={ <DetoxificationPrograms/> }></Route>
          <Route path="/yoga-club" element={ <YogaClub/> }></Route>
          <Route path="/antara-escapes" element={ <AntaraEscapes/> }></Route>
          <Route path="/contact-us" element={ <ContatcUs/> }></Route>
          <Route path="/antara-admin/*" element={ <AdminApp/> }></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        { !isAdminRoute && <Footer /> }
    </>
  );
}

export default App;
