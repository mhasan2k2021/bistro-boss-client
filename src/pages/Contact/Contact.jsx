import "./Contact.css";
import Form from "./Form/Form";
import Location from "./Location/Location";
import Thumbnail from "./Thumbnail/Thumbnail";

const Contact = () => {
  return (
    <div className="contact_container">
      <Thumbnail></Thumbnail>
      <Location></Location>
      <Form></Form>
    </div>
  );
};

export default Contact;
