import React from "react";
import images from "../../assets/images";

const DealsSection = () => {
  return (
    <section className="section_container deals_container">
      <div className="deals_image">
        <img src={images.deals} alt="deals image" />
      </div>

      <div className="deals_content">
        <h5 className="uppercase">get up to 30% discount</h5>
        <h4>Deals Of This Month</h4>
        <p>
          Don't miss out on amazing discounts! Explore our top-quality products
          at unbeatable prices. Grab your favorites before the offer ends!
        </p>
        <div className="deals_countdown flex-wrap">
          <div className="deals_countdown_card">
            <h4>10</h4>
            <p>Days</p>
          </div>
          <div className="deals_countdown_card">
            <h4>10</h4>
            <p>Hours</p>
          </div>
          <div className="deals_countdown_card">
            <h4>10</h4>
            <p>Mins</p>
          </div>
          <div className="deals_countdown_card">
            <h4>10</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
