import React from "react";

const PromoBanner = () => {
  return (
    <>
      <section className="section_container banner_container">
        <div className="banner_card">
          <span>
            <i className="ri-truck-line"></i>
          </span>
          <h4>Free Delivery</h4>
          <p>Shop anytime, anywhere.</p>
        </div>
        <div className="banner_card">
          <span>
            <i className="ri-exchange-dollar-line"></i>
          </span>
          <h4>100% Money Back Guaranty</h4>
          <p>Risk-free shopping experience.</p>
        </div>
        <div className="banner_card">
          <span>
            <i className="ri-user-voice-fill"></i>
          </span>
          <h4>Strong Support</h4>
          <p>Always here to assist you.</p>
        </div>
      </section>
    </>
  );
};

export default PromoBanner;
