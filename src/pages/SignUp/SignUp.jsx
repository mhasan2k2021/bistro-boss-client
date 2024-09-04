import React, { useContext } from "react";
import "./SignUp.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import Input from "../../componets/Input/Input";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  const labelStyle = { fontSize: "14px" };
  const style = { height: "35px", marginBottom: "10px" };
  const { userSignUp } = useContext(AuthContext);
  const handleSignUpForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignUp(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
      })
      .catch((error) => console.log(error.message));

    console.log(email);
  };
  return (
    <div className="sing_up_page">
      <div className="sign_up_form_container">
        <div className="sign_up_section">
          <form onSubmit={handleSignUpForm} className="sign_up_form">
            <h3>Sign Up</h3>
            <Input
              labelStyle={labelStyle}
              style={style}
              label={"Name"}
              name={"name"}
              type={"text"}
              placeholder={"Type here"}
            ></Input>
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

            <button>Sign Up</button>
          </form>
          <div className="other_log_up">
            <p>Already registered? Go to log in</p>
            <p>Or sign up with</p>
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
        <img src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1715603578/bistro-boss/others/authentication2_rkeeo3.png" />
      </div>
    </div>
  );
};

export default SignUp;
