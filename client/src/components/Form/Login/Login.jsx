import React, { useState } from "react";
import "./login.css";
import * as api from "../../../api/index";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ userEmail: "", userPassword: "" });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.userEmail.length < 6) {
      setEmailError("Length should be 6");
      return false;
    } else {
      setEmailError("");
    }
    if (formData.userPassword.length < 6) {
      setPasswordError("Length should be 6");
      return false;
    } else {
      setPasswordError("");
    }
    if (formData.userEmail.length > 5 && formData.userPassword.length > 5) {
      try {
        const { status } = await api.createUser(formData);
        if (status === 201) {
          setFormData({ userEmail: "", userPassword: "" });
          alert("User has been registered");
          navigate("/welcome");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={formData.userEmail}
            onChange={(e) =>
              setFormData({ ...formData, userEmail: e.target.value })
            }
            placeholder="Phone number, username or email address"
          />
          <span className="error">{emailError}</span>

          <input
            type="password"
            value={formData.userPassword}
            onChange={(e) =>
              setFormData({ ...formData, userPassword: e.target.value })
            }
            placeholder="Password"
          />
          <span className="error">{passwordError}</span>

          <button type="submit">Log In</button>
        </form>

        <div className="separator-component">
          <div className="separator-line"></div>
          <div className="separator-text">OR</div>
          <div className="separator-line"></div>
        </div>
        <div className="fb-container">
          <i className="fab fa-facebook-square"></i>
          <span>Log In with Facebook</span>
        </div>
        <div className="forget-password">Forgotten your Password?</div>
      </div>
    </div>
  );
};

export default Login;
