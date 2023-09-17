import React, { useState } from 'react';
import { loginUser } from '../api';
import { openSignUpForm } from './SignUpForm'; // Import your API functions here
import './LoginForm.css'; // Import the CSS file

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
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
      <button type="submit">Submit</button>
      <div class="col">
        <a href="#" class="link-to-bottom-right">Forgot password?</a>
      </div>
      <a href="#" onClick={openSignUpForm}>Sign-Up</a>
    </form>
  );
}

export default LoginForm;
