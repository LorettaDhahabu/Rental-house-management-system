import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";

function SignInForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [ isLoading, setIsLoading ] = useState( false );
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));

        navigate("/dashboard");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <>
      {/* <Header /> */}
      <div className="signin-pg">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Rental House Management </h3>
          {/* <h4>
            <em>WELCOME!</em>
          </h4> */}
          <p>Please Enter Your Username and Password</p>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              class="form-control"
              placeholder="enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              class="form-control"
              placeholder="enter your password...."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
              {isLoading ? "Loading..." : "Login"}{" "}
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          </div>
          <div class="form-group">
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
          {/* <div>
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div> */}
        </form>
      </div>
    </>
  );
}

export default SignInForm;
