// Static Images
import ContactUs from "/contact-us.svg"

function MakeAnAppointment( { isServicePage, AlterWhatsApp, Title, TitleMobile, Content1, Content2 } ) {

  const titleHome = <>
    <h3 className="title-appointment">{ Title }</h3>
    <img className="img-fluid contact-us-img" src={ ContactUs } alt="Contact Us"/>
  </>;

  const titleHome2 = <>
    { Title ? <>
      <h4 className="home-sec7-title-t mb-3">
        <div className="d-desktop no-d-mobile text-animate">
          { Title }
        </div>
        <div className="text-center d-mobile no-d-desktop text-animate">
          { TitleMobile }
        </div>
      </h4>
      <span className="title-border title-border-ani-7"></span>
      </> : <></>
    }
    <div className="text-center mx-4">
      { Content1 && <p>{ Content1 }</p> }
      { Content2 && <p>{ Content2 }</p> }
    </div>
  </>;

  return (
    <div>
        <section id="why-edubest" className="home-section-7 home-section-7-2">
            <div className="container-margin section2 d-flex justify-content-center align-items-center">
                <div className={ `home-sec7-para mt-4 d-flex flex-column align-items-center ${ Title && !isServicePage || AlterWhatsApp ? "" : "service-footer-p" }` }>
                    { !isServicePage && titleHome }
                    { isServicePage && titleHome2 }
                    { AlterWhatsApp ?
                      <a href="https://wa.me/917845518010" title="Chat with us on Whatsapp" className="home-enq-appointment-2 me-0 me-lg-1 mb-2 mb-lg-0"><span className="z-index-1"><i className="fa-brands fa-whatsapp"></i> Whatsapp</span></a> : 
                      <a href="https://antaracares1.zohobookings.in/#/book-appointment" target="_blank" title="Make an appointment" className="home-enq-appointment-2 mt-3"><span className="z-index-1">Book Online Consultation</span></a>
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default MakeAnAppointment