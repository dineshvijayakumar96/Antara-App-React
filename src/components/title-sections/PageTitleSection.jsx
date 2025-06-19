function PageTitleSection({ Content }) {
  return (
    <div>
        <section className="our-story-sec1">
            <div className="our-story-section1">
                <div className="about-title">
                    <div className="service-title-box">
                        <div className="service-title-box-bg d-flex flex-column justify-content-center">
                            <h1 className="home-sec-1-title text-center mb-0 py-3 px-3 text-animate-2">{ Content }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default PageTitleSection