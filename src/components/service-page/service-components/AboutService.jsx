function AboutService( { AboutTitle, AboutTitleMobile, AboutContent } ) {
  return (
    <div>
        <section id="our-partners" className="home-section-2 pb-5">
            <div className="container-margin section1">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="home-sec7-title-t mb-0">
                            <div className="text-center d-desktop no-d-mobile text-animate"><span>{ AboutTitle }</span></div>
                        </h2>
                        <div className="home-sec7-title-t mb-0">
                            <div className="text-center no-d-desktop d-mobile text-animate"><span>{ AboutTitleMobile }</span></div>
                        </div>
                        <div className="d-desktop no-d-mobile">
                            <span className="title-border title-border-ani-1"></span>
                        </div>
                        <div className="d-mobile no-d-desktop">
                            <span className="title-border title-border-ani-1"></span>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <p className="text-start text-lg-center home-sec4-para text-dark mt-4 font-avenir-light">{ AboutContent }</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutService