import React, { useState } from "react";
import "./form.css";
import Instagram from "../../assets/instagram.png";
import AppStore from "../../assets/app-store.png";
import GooglePlay from "../../assets/play-store.png";
import Login from "./Login/Login";
import Register from "./Register/Register";

const Form = () => {
  const [userTrigger, setUserTrigger] = useState(true);
  return (
    <div>
      <div className="form-container">
        <div className="form-card pt-40 pb-40">
          <img src={Instagram} alt="heading" />
          {userTrigger ? <Login /> : <Register />}
        </div>
        <div className="form-card mt-30">
          <div className="signUp-suggestion">
            {userTrigger ? (
              <p>
                {" "}
                Don't have an account ?{" "}
                <span onClick={() => setUserTrigger(false)}>Sign up</span>
              </p>
            ) : (
              <p>
                {" "}
                Have an account ?{" "}
                <span onClick={() => setUserTrigger(true)}>Log In</span>
              </p>
            )}
          </div>
        </div>

        <div className="get-app">
          <p>Get the app.</p>
          <div className="app-images">
            <img src={AppStore} alt="Apple" />
            <img src={GooglePlay} alt="PlayStore" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
