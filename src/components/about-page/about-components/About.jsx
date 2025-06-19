function About( { isAlterPosition, isBgSandal, Image, ImageAlt, Title, TitleMobile, Content1, Content2, Content3 } ) {

    const position1 = isAlterPosition ? "order-1" : "order-2";
    const position2 = isAlterPosition ? "order-2" : "order-1";

  return (
    <div>
        <section id="home-scroll" className={ `home-section-6 ${ isBgSandal ? "bg-sandal" : "bg-white" }` }>
            <div className="container-margin section4 py-5">
                <div className="row align-items-center g-0 g-lg-5">
                    <div className={ `col-lg-5 col-12 order-lg-1 ${ position1 } mt-5 mt-lg-0` }>
                        <div className="home-sec-6-top">
                            <div className="d-desktop no-d-mobile">
                                <h4 className="home-sec1-title text-center mt-1 mb-0">
                                   <div className="text-animate">{ Title }</div>
                                </h4>
                                <span className="title-border title-border-ani-1"></span>
                            </div>
                            <p className="our-story-para font-avenir-light text-start text-lg-center">{ Content1 }</p>
                            <p className="our-story-para font-avenir-light text-start text-lg-center mb-0">{ Content2 }</p>
                            { Content3 ? <><p className="our-story-para font-avenir-light text-start text-lg-center mb-0">{ Content3 }</p></> : <></> }
                        </div>
                    </div>
                    <div className={ `col-lg-7 col-12 order-lg-2 ${ position2 } mt-0` }>
                        <div className="d-mobile no-d-desktop">
                            <div className="home-sec1-title text-center mt-1 mb-0">
                                <div className="text-animate">{ TitleMobile }</div>
                            </div>
                            <span className="title-border title-border-ani-2"></span>
                        </div>
                        <div className="home-sec6-img">
                            <img width="700" className="img-fluid" src={ Image } alt={ ImageAlt }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About