import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="text-center my-5">
      <h6>Join 4,000+ companies already growing</h6>
      <Row className="mt-3">
        <Col>
          <img src="logo1.png" alt="Boltshift" />
        </Col>
        <Col>
          <img src="logo2.png" alt="Lightbox" />
        </Col>
        <Col>
          <img src="logo3.png" alt="FeatherDev" />
        </Col>
        <Col>
          <img src="logo4.png" alt="Spherule" />
        </Col>
        <Col>
          <img src="logo5.png" alt="GlobalBank" />
        </Col>
        <Col>
          <img src="logo6.png" alt="Nietzsche" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
