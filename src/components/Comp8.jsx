import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Comp8 = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Frequently asked questions</h2>
          <p className="text-muted">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse1"
                aria-expanded="true"
                aria-controls="faqCollapse1"
              >
                Is there a free trial available?
              </button>
            </h2>
            <div
              id="faqCollapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="faqHeading1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse2"
                aria-expanded="false"
                aria-controls="faqCollapse2"
              >
                Can I change my plan later?
              </button>
            </h2>
            <div
              id="faqCollapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can change your plan at any time to suit your needs.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse3"
                aria-expanded="false"
                aria-controls="faqCollapse3"
              >
                What is your cancellation policy?
              </button>
            </h2>
            <div
              id="faqCollapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can cancel your subscription at any time. No questions
                asked.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse4"
                aria-expanded="false"
                aria-controls="faqCollapse4"
              >
                Can other info be added to an invoice?
              </button>
            </h2>
            <div
              id="faqCollapse4"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading4"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you can customize your invoices with additional information
                as needed.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse5"
                aria-expanded="false"
                aria-controls="faqCollapse5"
              >
                How does billing work?
              </button>
            </h2>
            <div
              id="faqCollapse5"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading5"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Billing is simple and straightforward. You’ll be charged based
                on your plan.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 bg-light py-4 rounded">
          <img
            src="https://otrs.com/wp-content/uploads/Customer-Support-Team.jpg"
            alt="Support Team"
            className="mb-3 rounded-circle shadow"
            style={{ width: "80px", height: "80px" }}
          />
          <h5 className="fw-bold">Still have questions?</h5>
          <p className="text-muted">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="btn btn-primary">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default Comp8;
