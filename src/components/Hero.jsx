import React from "react";
import { Container } from "react-bootstrap";
// import "./Hero.css"; // Include your custom CSS here

const Hero = () => {
  return (
    <Container className="text-center my-5">
      <div className="feature-buttons d-inline-flex align-items-center">
        <button className="feature-btn me-2">New feature</button>
        <button className="dashboard-btn">
          Check out the team dashboard →
        </button>
      </div>
      <h1 className="display-4 fw-bold my-3">
        Beautiful analytics to grow smarter
      </h1>
      <p className="text-muted">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="buttons-container mt-4">
        <button className="demo-btn me-3">▶️ Demo</button>

        <button className="sign-up-btn">Sign up</button>
      </div>
    </Container>
  );
};

export default Hero;
