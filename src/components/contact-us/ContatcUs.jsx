import AboutUsImg from "/about-us-5.jpg"

import { useEffect } from "react";
import PageTitleSection from "../title-sections/PageTitleSection";
import Enquiry from "../enquiry-section/Enquiry";
import HomePageAbout from "../home-page/home-components/About";

function ContatcUs() {

    const Title = "Contact us";
                
    useEffect(() => {
      document.title = `${ Title } | Antara | Online consultation`;
    }, []);

  return (
    <div>
        <PageTitleSection Content={ <>Your Journey to wellness<br/>starts here.</> }/>
        <HomePageAbout
            isAlterPosition={true}
            bgColor={ "bg-sandal" }
            Title={ "" }
            TitleMobile={ "" }
            Image={ AboutUsImg }
            Content={ "Experience the healing power of nature with Antara. Whether you seek relief from chronic conditions, desire preventative care, or simply want to enhance your overall well-being, desire preventative care, or simply want to enhance your overall well-being, Antara is here to support you. Contact us today to schedule a consultation and take the first step towards a healthier, more balanced life." }
            Content2={""}
        />
        <Enquiry/>
    </div>
  )
}

export default ContatcUs