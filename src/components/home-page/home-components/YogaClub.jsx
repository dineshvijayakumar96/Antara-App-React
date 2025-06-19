import { NavLink } from "react-router-dom"

function YogaClub( { Link, DesktopImg, MobileImg, Title, Description } ) {
  return (
    <div>
        <section className="yoga-club bg-white pb-5">
            <div className="container-margin d-flex flex-column align-items-center align-content-center bg-sandal p-5">
            <h3 className="card-title text-center mt-3">{ Title }</h3>
            <p className="home-sec4-para min-h-para text-dark text-center">{ Description }</p>
            <div className="img-border overflow-hidden">
                <NavLink className="card-service-img-h" to={Link}>
                <img className="img-fluid d-desktop no-d-mobile" src={ DesktopImg } alt="Yoga Consultations"/>
                <img className="img-fluid d-mobile no-d-desktop" src={ MobileImg } alt="Yoga Consultations"/>
                </NavLink>
            </div>
            <NavLink to={Link} className="service-btn mt-3"><span style={ { zIndex: "1", position: "relative" } }>Know more</span></NavLink>
            </div>
        </section>
    </div>
  )
}

export default YogaClub