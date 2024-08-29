import React from "react";
import "./SignIn.css";
import Input from "../../../componets/Input/Input";

const SignIn = () => {
  return (
    <div className="sing_in_page">
      <div className="sign_in_form_container">
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603578/bistro-boss/others/authentication2_rkeeo3.png" />
        <form>
          <h3>Sign In</h3>
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Type here"}
          ></Input>
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            placeholder={"Enter your password"}
          ></Input>
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            placeholder={"Type here"}
          ></Input>
          <Input></Input>
          <h3>Reload Captcha</h3>
          <Input type={"text"} placeholder={"Type here"}></Input>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
