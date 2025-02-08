import React from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri";
const RatingStar = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>{i <= rating ? <RiStarFill /> : <RiStarLine />}</span>
    );
  }

  return (
    <span className="product_rating ">
      {stars}({rating})
    </span>
  );
};

export default RatingStar;
