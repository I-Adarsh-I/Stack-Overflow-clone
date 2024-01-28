import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./auth.css";
import icon from "../../resources/stackOverflow-icon.png";
import Aboutauth from "./Aboutauth";
import { signup, login } from "../../actions/auth";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  //
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please enter the email and password"); 
    }
    if (isSignup) {
      if (!name) {
        alert("Plase enter your name to continue");
      }
      dispatch(signup({ name, email, password }));
      navigate('/')
    } else {
      dispatch(login({ email, password }), navigate);
      navigate('/')
    }
  };
  //
  return (
    <section className="auth-section">
      {isSignup && <Aboutauth />}

      <div className="auth-container">
        {!isSignup && (
          <img
            src={icon}
            alt="stackoverflow..."
            className="stackoverflow-icon"
            width={50}
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Username</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div
              className="pass-div"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Password</h4>
              {!isSignup && (
                <h4 style={{ fontSize: "13px", color: "#007ac6" }}>
                  Forgot Password?
                </h4>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p
                style={{ color: "#666767", fontSize: "13px", margin: "0px" }}
                className="signup-pass-text"
              >
                Password must contain atleast 8<br /> characters, including
                atleast 1 character and 1 <br /> number{" "}
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" name="check" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to recieve occasional,
                <br />
                product updates,user research invitations,
                <br /> company announcements and digests
              </p>
            </label>
          )}

          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
          {isSignup && (
            <p
              style={{ color: "#666767", fontSize: "13px" }}
              className="signup-text"
            >
              By clicking "Sign Up", you agree to our <br />
              <span style={{ color: "#007ac6" }}>Terms of Service </span>,
              <span style={{ color: "#007ac6" }}> Privacy Policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy </span>.
              <br /> We'll occasionally send you account related emails.
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
