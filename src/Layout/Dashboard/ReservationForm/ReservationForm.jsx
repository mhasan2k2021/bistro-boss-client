import Heading from "../../../componets/Heading/Heading";
import ShortHeading from "../../../componets/ShortHeading/ShortHeading";
import "./ReservationForm.css";
import { FaLocationDot, FaPhoneVolume, FaStopwatch } from "react-icons/fa6";

const ReservationForm = () => {
  const style = {
    fontSize: "32px",
    padding: "10px",
  };
  return (
    <div className="reservation-container">
      <div className="reservation-form">
        <ShortHeading shortHading={"---Reservation---"}></ShortHeading>
        <Heading heading={"Book A Table"} style={style} />
        <form>
          <div className="form-row date_time">
            <div className="reservation_input">
              <label htmlFor="date">Date*</label>
              <input type="date" id="date" name="date" required />
            </div>
            <div className="reservation_input">
              <label htmlFor="time">Time*</label>
              <input type="time" id="time" name="time" required />
            </div>
            <div className="reservation_input">
              <label htmlFor="guest">Guest*</label>
              <select id="guest" name="guest" required>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
              </select>
            </div>
          </div>
          <div className="form-row name_email">
            <div className="reservation_input">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="reservation_input">
              <label htmlFor="phone">Phone*</label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="reservation_input">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Book A Table
          </button>
        </form>
      </div>
      <div className="location-section">
        <ShortHeading shortHading="---Visit Us---" />
        <Heading heading="OUR LOCATION" style={style} />
        <div className="location-info">
          <div>
            <FaPhoneVolume />
            <div className="info_details">
              <p>PHONE</p>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div>
            <FaLocationDot />
            <div className="info_details">
              <p>ADDRESS</p>
              <p>+38 (012) 34 56 789</p>
            </div>
          </div>
          <div>
            <FaStopwatch />
            <div className="info_details">
              <p>WORKING HOURS</p>
              <p>
                Mon - Fri: 08:00 - 22:00
                <br />
                Sat - Sun: 10:00 - 23:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
