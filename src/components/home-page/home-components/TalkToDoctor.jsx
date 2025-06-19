import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons"

function TalkToDoctor( { isServicePage, Title, TitleMobile, Content1, Content2 } ) {

    const sectionClass = isServicePage ? "home-section-7-3" : "home-section-2";
    const sectionStyle = isServicePage ? {} : { minHeight: "70vh" };
    const title = Title || TitleMobile ? <>
        <div className="col-12">
            <h2 className="home-sec7-title-t mb-0">
                <div className="text-center d-desktop no-d-mobile text-animate"><span>{ Title }</span></div>
                <div className="text-center no-d-desktop d-mobile text-animate"><span>{ TitleMobile }</span></div>
            </h2>
            <span className="title-border title-border-ani-3"></span>
        </div>
    </> : <></>;

  return (
    <div>
        <section className={ `${ sectionClass } bg-white py-5` } style={ sectionStyle }>
            <div className="container-margin section1">
                <div className="row justify-content-center">
                    { title }
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                        { Content1 && <p className="text-center text-lg-center home-sec4-para text-dark mt-4 font-avenir-light">{ Content1 }</p> }
                        { Content2 && <p className="text-center text-lg-center home-sec4-para text-dark mt-4 font-avenir-light">{ Content2 }</p> }
                        { !isServicePage && <a href="https://antaracares1.zohobookings.in/#/book-appointment" target="_blank" title="Make an appointment" className="home-enq-appointment-2 mt-3"><span className="z-index-1"><FontAwesomeIcon className="pe-2" icon={ faCalendarCheck }></FontAwesomeIcon> Talk to doctor</span></a> }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TalkToDoctor