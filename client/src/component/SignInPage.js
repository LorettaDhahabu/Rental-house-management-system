import React from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function SignInPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
          <SignInForm onLogin={onLogin} />
          <Divider />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <Divider />
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </div>
  );
}

export default SignInPage