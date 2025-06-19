function ServiceDetails( { isExclusive, Title, Length, Price } ) {

    const lengthDetails = Length ? <>
        <div className="px-0 pe-3 px-lg-3 service-border">
            <p className="font-avenir-light service-t">LENGTH</p>
            <p className="mb-0 service-p">{ Length }</p>
        </div>
    </> : <></>;

    const priceDetails = Price ? <>
        <div className="px-0 ps-3 px-lg-3">
            <p className="font-avenir-light service-t">PRICE</p>
            <p className="mb-0 service-p d-flex flex-lg-row flex-column px-0 macbook">{ Price }</p>
        </div>
    </> : <></>;

  return (
    <div>
        <div className="service-tab-bg">
            <div className="service-outer-box">
                <div className="service-box">
                    <div className="row justify-content-center">
                        <div className={ `${ isExclusive ? "col-lg-6 justify-content-end" : "col-lg-7" } d-flex align-items-center flex-column flex-lg-row` }>
                            <div
                                className={ `${ isExclusive ? "mb-2 mb-lg-0" : "service-border-2" } service-name pe-0 pe-lg-3 d-flex align-items-center text-start text-lg-center font-avenir-light fw-light` }>
                                { Title } </div>
                            <div className="flex-row mx-0 my-3 my-lg-0 align-items-center">
                                { lengthDetails }
                                { priceDetails }
                            </div>
                        </div>
                        <div className={ `${ isExclusive ? "col-lg-6 justify-content-start" : "col-lg-5 justify-content-center justify-content-lg-end" } d-flex flex-column align-items-center flex-lg-row p-0` }>
                            <a href="https://wa.me/917845518010" title="Chat with us on Whatsapp" className="home-enq-appointment-2 me-0 me-lg-1 mb-2 mb-lg-0"><span className="z-index-1"><i className="fa-brands fa-whatsapp"></i> Whatsapp</span></a>
                            { !isExclusive && <a href="https://antaracares1.zohobookings.in/#/book-appointment" title="Make an appointment" className="home-enq-appointment-2"><span className="z-index-1"><i
                                className="fa-regular fa-calendar-check pe-2"></i> Online Consultation</span></a> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails