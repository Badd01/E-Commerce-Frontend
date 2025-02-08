import React from "react";
import {
  RiTruckLine,
  RiExchangeDollarLine,
  RiUserVoiceFill,
} from "react-icons/ri";

const PromoBanner = () => {
  return (
    <section className="section_container banner_container">
      <div className="banner_card">
        <span>
          <RiTruckLine />
        </span>
        <h4>Free Delivery</h4>
        <p>Shop anytime, anywhere.</p>
      </div>
      <div className="banner_card">
        <span>
          <RiExchangeDollarLine />
        </span>
        <h4>100% Money Back Guaranty</h4>
        <p>Risk-free shopping experience.</p>
      </div>
      <div className="banner_card">
        <span>
          <RiUserVoiceFill />
        </span>
        <h4>Strong Support</h4>
        <p>Always here to assist you.</p>
      </div>
    </section>
  );
};

export default PromoBanner;
