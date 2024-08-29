import React from "react";
import "./FormSection.css";
import Input from "../../../../componets/Input/Input";
import { FaPaperPlane } from "react-icons/fa6";

const FormSection = () => {
  const style = { width: "100%", marginBottom: "20px" };
  return (
    <div className="form_section_container">
      <form>
        <div className="name_email">
          <Input
            label={"Name*"}
            type={"text"}
            placeholder={"Enter your name"}
          ></Input>
          <Input
            label={"Email*"}
            type={"email"}
            placeholder={"Enter your email"}
          ></Input>
        </div>
        <Input
          label={"Phone*"}
          type={"number"}
          placeholder={"Enter your phone number"}
          style={style}
        ></Input>
        <div className="text_area">
          <label>Message*</label>
          <textarea
            name="massage"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button>
          Send Message <FaPaperPlane></FaPaperPlane>
        </button>
      </form>
    </div>
  );
};

export default FormSection;
