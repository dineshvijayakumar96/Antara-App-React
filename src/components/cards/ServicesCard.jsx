

import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function ServicesCard({ BgSandal, isDesktop, Image, Link, Title, Description }) {

    const [ desktopClass, setdesktopClass ] = useState("");
    const [ bgClass, setbgClass ] = useState("");

    useEffect(() => {
        if (isDesktop) {
        setdesktopClass("mb-3")
        } else {
        setdesktopClass("")
        }
    }, [isDesktop])

    useEffect(() => {
        if (BgSandal) {
        setbgClass("bg-sandal")
        } else {
        setbgClass("bg-white")
        }
    }, [BgSandal])

  return (
    <div>
        <div className={ `card ${ bgClass } card-shadow ${ desktopClass }` }>
            <NavLink className="card-service-img-h" to={ Link }><div className={ `card-service-img ${ Image }` }></div></NavLink>
            <div className="card-body">
                <div className="card-title text-center mt-3">{ Title }</div>
                <p className="home-sec4-para min-h-para text-dark text-center">{ Description }</p>
                <NavLink to={ Link } className="service-btn"><span style={ { zIndex: "1", position: "relative" } }>View Details</span></NavLink>
            </div>
        </div>
    </div>
  )
}

export default ServicesCard