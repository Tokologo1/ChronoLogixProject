import React from 'react';
import LoginForm from './LoginForm'; // Import the LoginForm component
import GoogleSignInButton from './GoogleSignInButton'; // Import the GoogleSignInButton component
import './Hero.css';

function Hero() {
  // Handle Google sign-in response
  const handleGoogleSignIn = (response) => {
    // Handle the Google sign-in response here
    console.log(response);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Welcome to ChronoLogix</h2>
        <p>Empowering Efficiency, Elevating Time.</p>
        <div className="forms">
          <LoginForm /> {/* Render the LoginForm component */}
        </div>
        <div className="google-sign-in">
          <GoogleSignInButton onGoogleSignIn={handleGoogleSignIn} />
        </div>
      </div>
    </section>
  );
}

export default Hero;



