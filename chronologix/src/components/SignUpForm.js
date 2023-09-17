import React, { useState } from 'react';
import { signUpUser } from '../api';
import './SignUpForm.css'; 

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(username, password, email);
      // Handle successful sign-up
    } catch (error) {
      // Handle sign-up error
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export const openSignUpForm = () => {
  // Your code to open the sign-up form goes here
};

export default SignUpForm;
