import React from 'react';
import './Signup.css';

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="email">
            email
            <input
              name="email"
              type="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              id="password"
              required
            />
          </label>
          <label htmlFor="password-confirm">
            Password Confirmation
            <input
              name="password-confirm"
              type="password"
              id="password-confirm"
              required
            />
          </label>
          <button className="signup-submit" type="submit">Submit</button>
        </form>
      </div>
      <div className="signup-login">
        Already have an account? Log in
      </div>
    </div>
  );
}
