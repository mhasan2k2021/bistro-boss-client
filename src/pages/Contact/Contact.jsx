import "./Contact.css";
import Location from "./Location/Location";
import Thumbnail from "./Thumbnail/Thumbnail";

const Contact = () => {
  return (
    <div className="contact_container">
      <Thumbnail></Thumbnail>
      <Location></Location>
    </div>
  );
};

export default Contact;
