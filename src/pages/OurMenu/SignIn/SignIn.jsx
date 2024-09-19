import React, { useContext, useEffect, useState } from "react";
import "./SignIn.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Input from "../../../componets/Input/Input";
import { AuthContext } from "../../../context/AuthProvider";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

const SignIn = () => {
  const labelStyle = { fontSize: "14px" };
  const style = { height: "35px", marginBottom: "10px" };
  const { userSignIn } = useContext(AuthContext);
  const [errorText, setErrorText] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6, "yellow");
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = form.captcha.value;
    console.log(validateCaptcha(captcha));
    if (validateCaptcha(captcha) === true) {
      userSignIn(email, password)
        .then((result) => {
          const currentUser = result.user;
          console.log(currentUser);
          alert("Successfully Sign In. Thank You.");
          navigate(from, { replace: true });
        })
        .catch((error) => console.error(error.message));
    } else {
      setErrorText(true);
    }
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
              must={true}
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
            {errorText ? (
              <>
                <div className="wrong_captcha">
                  <small>Wrong captcha</small>
                </div>
              </>
            ) : (
              <div className="wrong_captcha"></div>
            )}
            <button>Sign In</button>
          </form>
          <div className="other_log_in">
            <Link to="/sign-up">New here? Create a New Account</Link>
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
