import React, { useContext, useEffect, useRef } from "react";
import "./SignIn.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import Input from "../../../componets/Input/Input";
import { AuthContext } from "../../../context/AuthProvider";

const SignIn = () => {
  const labelStyle = { fontSize: "14px" };
  const style = { height: "35px", marginBottom: "10px" };
  const { userSignIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6, "yellow");
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
      })
      .catch((error) => console.error(error.message));
  };

  // this line we will try to get captcha match

  return (
    <div className="sing_in_page">
      <div className="sign_in_form_container">
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603578/bistro-boss/others/authentication2_rkeeo3.png" />
        <div className="sign_in_section">
          <form onSubmit={handleSignIn} className="sign_in_form">
            <h3>Sign In</h3>
            <Input
              labelStyle={labelStyle}
              style={style}
              label={"Email"}
              name={"email"}
              type={"email"}
              placeholder={"Type here"}
            ></Input>
            <Input
              labelStyle={labelStyle}
              style={style}
              label={"Password"}
              name={"password"}
              type={"password"}
              placeholder={"Enter your password"}
            ></Input>
            {/* this line  we use react simple captcha */}
            <div className="captcha">
              <LoadCanvasTemplate reloadText="Reload" reloadColor="green" />
            </div>
            <Input
              labelStyle={labelStyle}
              style={style}
              type={"text"}
              placeholder={"Type here"}
              name={"captcha"}
            ></Input>
            <button>Sign In</button>
          </form>
          <div className="other_log_in">
            <p>New here? Create a New Account</p>
            <p>Or sign in with</p>
            <div className="social_icon">
              <button>
                <FaFacebookF></FaFacebookF>
              </button>
              <button>
                <FaGoogle></FaGoogle>
              </button>
              <button>
                <FaGithub></FaGithub>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
