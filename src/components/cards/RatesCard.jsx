import { useEffect, useState } from "react";


function RatesCard({ isMobile, Image, Title, Rate, Description }) {

    const [ spacingClass, setspacingClass ] = useState("mb-3");
    
    useEffect(() => {
        if (isMobile) {
            setspacingClass("mb-3")
        } else {
            setspacingClass("mb-5")
        }
    }, [isMobile])

  return (
    <div>
        <div className="card bg-sandal card-shadow card-anime mb-3">
            <a className="card-service-img-h d-flex justify-content-center" style={ { alignItems: "flex-start" } } href="https://antaracares1.zohobookings.in/#/book-appointment" target="_blank"><img className="img-fluid rates-icon p-3" src={ Image } alt="Icon"/></a>
            <div className="card-body rates-body">
                <div className="card-title text-center mt-3">{ Title }</div>
                <p className="home-sec4-para text-dark text-center">{ Description }</p>
                <p className={ `card-title text-center ${ spacingClass }` }>{ Rate }</p>
                <a href="https://antaracares1.zohobookings.in/#/book-appointment" target="_blank" className="service-btn"><span style={ { zIndex: "1", position: "relative" } }>Appointment</span></a>
            </div>
        </div>
    </div>
  )
}

export default RatesCard