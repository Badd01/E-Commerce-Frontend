import React from "react";

const RatingStar = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`ri-star-${i <= rating ? "fill" : "line"}`}
      ></span>
    );
  }

  return (
    <>
      <span className="product_rating">
        {stars}({rating})
      </span>
    </>
  );
};

export default RatingStar;
