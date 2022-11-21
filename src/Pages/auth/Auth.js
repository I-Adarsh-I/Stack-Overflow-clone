import React, { useState } from "react";
import "./auth.css";
import icon from "../../resources/stackOverflow-icon.png";
import Aboutauth from "./Aboutauth";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

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
        <form>
          {isSignup && (
            <label htmlFor="name">
              <h4>Username</h4>
              <input type="text" name="name" id="name" />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
          <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="password">
            <div className="pass-div" style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
              <h4>Password</h4>
              {!isSignup && <h4 style ={{fontSize:"13px", color:"#007ac6"}}>Forgot Password?</h4>}
            </div>
            <input type="password" name="password" id="password" />
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
