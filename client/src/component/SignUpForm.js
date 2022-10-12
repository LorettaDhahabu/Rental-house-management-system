import React from "react";

function SignUpForm({ onLogin }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
        email,
        phone_number,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => onLogin(user));
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="signin-pg">
      <form className="login-form" onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Full Name</label>
          <input
            type="text"
            id="name"
            autoComplete="on"
            class="form-control"
            placeholder="enter your fullname..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label for="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
            class="form-control"
            placeholder="enter your password...."
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            autoComplete="current-email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="enter your email..."
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Phone Number</label>
          <input
            type="tel"
            autoComplete="on"
            class="form-control"
            id="exampleInputTel"
            placeholder="enter your phone number..."
            aria-describedby="telHelp"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
        {/* <div>
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div> */}
      </form>
    </div>
  );
}

export default SignUpForm;
