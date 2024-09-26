import React, { useContext } from "react";
import "./SignUp.css";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa6";
import Input from "../../componets/Input/Input";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const labelStyle = { fontSize: "14px" };
  const style = { height: "35px", marginBottom: "10px" };
  const { userSignUp, userUpdate, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUpForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    if (user) {
      alert(
        `${user.displayName} already sign in. Please sign Out before create new account`
      );
      return;
    } else {
      userSignUp(email, password)
        .then((result) => {
          navigate("/");
          console.log(result.user);
          userUpdate(name, photoURL)
            .then((result) => {})
            .catch((error) => console.error(error.message));
          form.reset();
        })
        .catch((error) => console.log(error.message));

      alert(`Thank you Mr/Mrs ${name}. Successfully Sign Up`);
    }
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
              label={"Photo URL"}
              name={"photoURL"}
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
            <Link to={"/sign-in"}>Already registered? Go to Sign In</Link>
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
