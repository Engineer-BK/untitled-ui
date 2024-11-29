import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import boltshift from "../assets/boltshift.png";
import feather from "../assets/feather.png";

const Dashboard = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} className="px-4">
          <Image
            src="https://cdn.prod.website-files.com/649349a353c8cc558f3dcdbd/6528d455d496beba9b7d8a15_dashboard-mockup-01-p-800.png"
            alt="Dashboard"
            className="border border-dark border-5 mb-4 rounded-top"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Col>
      </Row>

      <Container className="text-center my-5">
        <h6>Join 4,000+ companies already growing</h6>
        <Row className="mt-3">
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src={boltshift}
                alt="Boltshift"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">Boltshift</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src="https://boxtudio.in/cdn/shop/files/1_c6802a07-3a39-4b43-a083-42edd4a445c8.jpg?v=1724751475&width=360"
                alt="Lightbox"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">Lightbox</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src={feather}
                alt="FeatherDev"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">
                FeatherDev
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src="https://png.pngtree.com/templates/20180929/simple-3d-vector-illustration-logo-design-element-png_34487.jpg"
                alt="Spherule"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">Spherule</span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src="https://pbs.twimg.com/profile_images/1658337741330079745/yf2T3pZg_400x400.jpg"
                alt="GlobalBank"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">
                GlobalBank
              </span>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2}>
            <div className="d-flex align-items-center justify-content-center">
              <Image
                src="https://static9.depositphotos.com/1245125/1192/v/600/depositphotos_11924368-stock-illustration-vector-illustration-of-sun.jpg"
                alt="Nietzsche"
                roundedCircle
                width="30"
                height="30"
              />
              <span className="ms-2 font-weight-bold text-dark">Nietzsche</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Dashboard;
