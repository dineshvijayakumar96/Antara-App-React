function TitleSection( { Title, BgClass } ) {



  return (
    <div>
        <section className="service-nc-sec1">
            <div className={ BgClass }>
                <div className="service-title">
                    <div className="service-title-box">
                        <div className="service-title-box-bg">
                            { Title && <h1 className="home-sec-1-title text-white text-center mb-0 p-3 text-animate-2">{ Title }</h1>  }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TitleSection