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
              type="text"
              id="email"
              required
            />
          </label>
        </form>
      </div>
    </div>
  );
}
