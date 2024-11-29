import React from "react";
import ffgwsd from "../assets/ffgwsd.jpg";

const Comp7 = () => {
  return (
    <section className="features-section text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <span className="badge bg-light text-dark mb-2">Features</span>
            <h2 className="fw-bold">
              Cutting-edge features for advanced analytics
            </h2>
            <p className="text-muted">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
          </div>
        </div>

        <div className="row my-5 justify-content-center">
          <div className="col-md-10">
            <img
              src={ffgwsd}
              alt="Analytics"
              className="img-fluid shadow rounded"
            />
          </div>
        </div>

        <div className="row text-start">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start">
              <i className="bi bi-chat-left-text fs-3 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Share team inboxes</h5>
                <p className="text-muted">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </p>
                <a href="#learn-more" className="text-primary">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start">
              <i className="bi bi-lightning-fill fs-3 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Deliver instant answers</h5>
                <p className="text-muted">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </p>
                <a href="#learn-more" className="text-primary">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-start">
              <i className="bi bi-graph-up-arrow fs-3 text-primary me-3"></i>
              <div>
                <h5 className="fw-bold">Manage your team with reports</h5>
                <p className="text-muted">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple of
                  clicks.
                </p>
                <a href="#learn-more" className="text-primary">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comp7;
