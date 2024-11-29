import React from "react";

const Comp6 = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-logo">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQFdYrW9T-w_Dg/company-logo_200_200/company-logo_200_200/0/1708959596093/sisyphus_energy_logo?e=2147483647&v=beta&t=edJ7sWxytL1-zbt5FlNpOVGMo84rsUk-AL8DgoH5eO8"
          alt="Sisyphus Logo"
          className="logo-image"
        />
        <strong className="logo-name">Sisyphus</strong>
      </div>

      <p className="testimonial-text">
        “We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.”
      </p>

      <div className="testimonial-author">
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          alt="Candice Wu"
          className="author-photo"
        />
        <div className="author-details">
          <h4 className="author-name">Candice Wu</h4>
          <p className="author-title">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};

export default Comp6;
