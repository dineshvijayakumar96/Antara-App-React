import { useLocation } from "react-router-dom";

function OurDoctorsCard({ Image, Name, Position, Description }) {

  const location = useLocation();

  const noDescription = location.pathname === "/about-us";

  return (
    <div>
      <div className="card card-shadow mb-3 card-doctor">
        <div className="card-service-img-h">
          <div className={`card-service-img ${ Image }`}></div>
        </div>
        <div className="card-body">
          <h3 className="card-title text-center mt-3">{Name}</h3>
          <p className="home-sec4-para text-dark text-center">{Position}</p>
          { !noDescription ? <><p className="home-sec4-para text-dark text-center">{Description}</p></> : <></> }
        </div>
      </div>
    </div>
  );
}

export default OurDoctorsCard;
