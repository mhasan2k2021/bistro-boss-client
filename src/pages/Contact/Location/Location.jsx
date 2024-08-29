import React from "react";
import "./Location.css";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import Heading from "../../../componets/Heading/Heading";
import { FaPhone, FaLocationDot, FaStopwatch } from "react-icons/fa6";

const Location = () => {
  return (
    <div className="location_section">
      <ShortHeading shortHading={"---Visit Us---"}></ShortHeading>
      <Heading heading={"OUR LOCATION"}></Heading>
      <div className="address_section">
        <div className="flex_box">
          <div className="icon_container">
            <FaPhone />
          </div>
          <div className="address_details">
            <h3>Phone</h3>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="flex_box">
          <div className="icon_container">
            <FaLocationDot />
          </div>
          <div className="address_details">
            <h3>ADDRESS</h3>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>
        <div className="flex_box">
          <div className="icon_container">
            <FaStopwatch />
          </div>
          <div className="address_details">
            <h3>WORKING HOURS</h3>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
