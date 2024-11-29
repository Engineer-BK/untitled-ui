import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Comp5 = () => {
  return (
    <Container className="my-5 text-center">
      <h6 className="text-primary fw-bold mb-2">Features</h6>
      <h2 className="fw-bold mb-4">
        Analytics that feels like it’s from the future
      </h2>
      <p className="text-muted mb-5">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <Row className="gy-4">
        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-inbox-fill text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Share team inboxes</h5>
          <p className="text-muted">
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-lightning-fill text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Deliver instant answers</h5>
          <p className="text-muted">
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-graph-up-arrow text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Manage your team with reports</h5>
          <p className="text-muted">
            Measure what matters with Untitled's easy-to-use reports. You can
            filter, export, and drill down on the data in a couple clicks.
          </p>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-chat-dots-fill text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Connect with customers</h5>
          <p className="text-muted">
            Solve a problem or close a sale in real-time with chat. If no one is
            available, customers are seamlessly routed to email without
            confusion.
          </p>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-link-45deg text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Connect the tools you already use</h5>
          <p className="text-muted">
            Explore 100+ integrations that make your day-to-day workflow more
            efficient and familiar. Plus, our extensive developer tools.
          </p>
        </Col>

        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <i
              className="bi bi-people-fill text-primary"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>
          <h5 className="fw-bold">Our people make the difference</h5>
          <p className="text-muted">
            We’re an extension of your customer service team, and all of our
            resources are free. Chat to our friendly team when you need help.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Comp5;
