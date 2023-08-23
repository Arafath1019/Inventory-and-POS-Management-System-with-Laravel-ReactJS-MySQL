import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors([]);
  };

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:8000/api/login", input)
      .then((res) => {
        localStorage.email = res.data.email;
        localStorage.name = res.data.name;
        localStorage.photo = res.data.photo;
        localStorage.phone = res.data.phone;
        localStorage.token = res.data.token;
        window.location.reload();
        setIsLoading(false);
      })
      .catch((errors) => {
        if (errors.response.status === 422) {
          setErrors(errors.response.data.errors);
        }
        setIsLoading(false);
      });
  };

  return (
    <div className="container-fluid bg-theme" id="login">
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-theme">
            <div className="card-header">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <label className="w-100">
                <p>Email/Phone</p>
                <input
                  className="form-control mt-2"
                  type="text"
                  name="email"
                  value={input.email}
                  onChange={handleInput}
                />
                {errors.email && (
                  <p className="login-error-msg">{errors.email[0]}</p>
                )}
              </label>
              <label className="w-100 mt-4">
                <p>Password</p>
                <input
                  className="form-control mt-2"
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleInput}
                />
                {errors.password && (
                  <p className="login-error-msg">{errors.password[0]}</p>
                )}
              </label>
              <div className="d-grid mt-4">
                {!isLoading && (
                  <button
                    onClick={handleLogin}
                    className="btn btn-outline-warning"
                  >
                    Login
                  </button>
                )}
                {isLoading && (
                  <button
                    onClick={handleLogin}
                    className="btn btn-outline-warning"
                  >
                    <span
                      class="spinner-border spinner-border-sm mr-2"
                      aria-hidden="true"
                    ></span>
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
