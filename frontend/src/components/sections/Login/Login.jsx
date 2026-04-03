
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignup = location.pathname === '/signup';

  // Placeholder Google login handler
  const handleGoogleLogin = () => {
    alert('Google login clicked! (Replace with real OAuth logic)');
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="eco-badge">Eco-Conscious Shopping</div>
        <h1>Join the movement for a <span className="green">greener planet.</span></h1>
        <p>Access curated sustainable products that are kind to you and the Earth.</p>
        <div className="login-image">
        </div>
      </div>
      <div className="login-right">
        <h2>{isSignup ? 'Create Account' : 'Welcome Back'}</h2>
        <p>{isSignup ? 'Sign up to start your eco-friendly journey.' : 'Please enter your details to sign in to your account.'}</p>
        <form className="login-form">
          {isSignup && (
            <>
              <label htmlFor="signup-fullname">Full Name</label>
              <input 
                type="text" 
                id="signup-fullname"
                placeholder="Your Name" 
                className="styled-input"
                autoComplete="name"
                required
              />
            </>
          )}
          <label>Email Address</label>
          <input type="email" placeholder="name@example.com" />
          <label>
            Password
            {!isSignup && <span className="forgot">Forgot password?</span>}
          </label>
          <div className="password-wrapper">
            <input type="password" placeholder="Password" />
          </div>
          {!isSignup && (
            <div className="login-options">
              <input type="checkbox" id="keep-logged-in" />
              <label htmlFor="keep-logged-in">Keep me logged in</label>
            </div>
          )}
          <button className="sign-in-btn" type="submit">
            {isSignup ? 'Sign Up →' : 'Sign In →'}
          </button>
        </form>
        <div className="social-login">
          <span>OR CONTINUE WITH</span>
          <div className="social-buttons">
            <button className="google-btn" type="button" onClick={handleGoogleLogin}>Google</button>
          </div>
        </div>
        <div className="create-account">
          {isSignup ? (
            <span>
              Already have an account?{' '}
              <a href="#" onClick={e => { e.preventDefault(); navigate('/login'); }}>Sign in</a>
            </span>
          ) : (
            <span>
              Don't have an account?{' '}
              <a href="#" onClick={e => { e.preventDefault(); navigate('/signup'); }}>Create an account</a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
