function ServiceInBrief( { isBriefAlterPosition, isListDotted, BgColor = "light-brown", BriefTitle, BriefTitleMobile, BriefImg, BriefContents = [] } ) {
  return (
    <div>
        <section className={ `home-section-6 ${ BgColor }` }>
            <div className="container-margin section3">
                <div className="row align-items-center g-0 g-lg-5">
                    <div className={ `col-lg-7 col-12 ${ isBriefAlterPosition ? "order-lg-2 order-2" : "order-lg-1 order-2" } mb-5 mb-lg-0` }>
                        <div className="home-sec-6-top">
                            <h4 className="home-sec6-title mt-1 mb-0">
                                <div className="text-animate d-desktop no-d-mobile">{ BriefTitle }</div>
                            </h4>
                            <div className="d-desktop no-d-mobile">
                                <span className="title-border-l title-border-ani-2"></span>
                            </div>
                            <ul className={ `${ isListDotted ? "" : "service-list" } mt-5 font-avenir-light` }>
                                {BriefContents.map((content, index) => (
                                    <li key={index}>
                                    <p className="home-sec6-para mt-3 mb-0">{content}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={ `col-lg-5 col-12 ${ isBriefAlterPosition ? "order-lg-1 order-1" : "order-lg-2 order-1" }` }>
                        <div className="service-card-img">
                            <div className="home-sec6-title mt-1 mb-0 text-animate text-center d-mobile no-d-desktop">{ BriefTitleMobile }</div>
                            <div className="d-mobile no-d-desktop">
                                <span className="title-border title-border-ani-3"></span>
                            </div>
                            <div className="home-sec6-img">
                                <img width="400" className="img-fluid" src={ BriefImg } alt={ `${ BriefTitle } Image` }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ServiceInBrief