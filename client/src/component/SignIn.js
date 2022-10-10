import React from "react";

function SignIn() {
  return (
    <div className="signin-pg">
      <form className="login-form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="enter your email/ username..."
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="enter your password...."
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
        <div >
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
