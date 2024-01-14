import React, { useState } from "react";
import "./Login.css";
import Notification from "../shared/Notification";
import authService from "../service/AuthService";
const Login = () => {
  const [loginform, seLoiginForm] = useState({ username: "", passoword: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // username: "mor_2314",
  // password: "83r5^_"

  const handelInput = async (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    seLoiginForm({ ...loginform, [name]: value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (loginform.username.trim() === "" && loginform.passoword.trim() === "") {
      setError("Please fill in the required field before proceeding");
    } else {
      try {
        const response = await authService.validLogin(
          loginform.username,
          loginform.passoword
        );
        localStorage.setItem("token", response);
        setSuccess("Login success!");
        setError(null);
      } catch (error) {
        setError(error.response.data);
        setSuccess(null);
      }
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="login-form">
          <h2>Login form</h2>
          <form onSubmit={handelSubmit}>
            {error && <Notification type="error" message={error} />}
            {success && <Notification type="success" message={success} />}
            <div className="mb-3 mt-3">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter username"
                name="username"
                value={loginform.username}
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pwd" className="mb-2">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="passoword"
                value={loginform.passoword}
                onChange={handelInput}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
