import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    fullName: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <p className="register-label">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="facebook-btn" type="button">
            {" "}
            <i className="fab fa-facebook-square"></i> Log In with facebook
          </button>

          <div className="separator-component">
            <div className="separator-line"></div>
            <div className="separator-text">OR</div>
            <div className="separator-line"></div>
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Phone number, username or email address"
          />
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            placeholder="Full Name"
          />
          <input
            type="text"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            placeholder="User Name"
          />
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="Password"
          />
          <p className="service-text">
            People who use our service may have uploaded your contact
            information to Instagram. <span> Learn more </span>
          </p>
          <p className="condition-text">
            By signing up, you agree to{" "}
            <span className="text-bold">Our Terms</span> ,{" "}
            <span className="text-bold">Privacy Policy </span> and{" "}
            <span className="text-bold"> Cookies Policy</span> .
          </p>
          <button type="submit">Sign Up</button>
        </form>

        <div className="forget-password">Forgotten your Password?</div>
      </div>
    </div>
  );
};

export default Register;
