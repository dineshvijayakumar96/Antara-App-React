function HomePageAbout( { isAlterPosition, bgColor="bg-white", Title, TitleMobile, Image, Content, Content2 } ) {
  return (
    <div>
        <section id="home-scroll" className={ `home-section-6 ${ bgColor } py-3` }>
        <div className="container-margin section4">
        <div className="row align-items-center">
            <div className={ `col-lg-5 col-12 ${ isAlterPosition ? "order-lg-1 order-2" : "order-lg-2 order-2" } mt-5 mt-lg-0` }>
            <div className="home-sec-6-top">
                <div className="d-desktop no-d-mobile">
                <h2 className="home-sec1-title text-center mt-1 mb-0">
                    <div className="text-animate">{ Title }</div>
                </h2>
                <span className="title-border title-border-ani-1"></span>
                </div>
                { Content && <p className="font-avenir-light text-center">{ Content }</p> }
                { Content2 && <p className="font-avenir-light text-center">{ Content2 }</p> }
            </div>
            </div>
            <div className={ `col-lg-7 col-12 ${ isAlterPosition ? "order-lg-2 order-1" : "order-lg-1 order-1" }` }>
            <div className="d-mobile no-d-desktop">
                <div className="home-sec1-title text-center mt-1 mb-0">
                <div className="text-animate">{ TitleMobile }</div>
                </div>
                <span className="title-border title-border-ani-2"></span>
            </div>
            <div className="home-sec6-img">
                <img width="700" className="img-fluid" src={ Image } alt="About Naturopathy"/>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}

export default HomePageAbout