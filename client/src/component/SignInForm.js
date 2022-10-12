import React from "react";

function SignInForm ( { onLogin } )
{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    } )
      .then( ( r ) =>
      {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div className="signin-pg">
      <form className="login-form" onSubmit={handleSubmit}>
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
            Login <i class="fa fa-arrow-right" aria-hidden="true"></i>
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
        <div class="form-group">
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </div>
        <div>
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
