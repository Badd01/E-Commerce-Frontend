import React from "react";
import images from "../../assets/images";

const cards = [
  {
    id: 1,
    image: images.card_1,
    title: "Womens Shirt",
    trend: "2025 Trend",
  },
  {
    id: 2,
    image: images.card_2,
    title: "Womens Dresses",
    trend: "2025 Trend",
  },
  {
    id: 3,
    image: images.card_3,
    title: "Womens Casuals",
    trend: "2025 Trend",
  },
];

const HeroSection = () => {
  return (
    <>
      <div className="section_container hero_container">
        {cards.map((card) => (
          <div className="hero_card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <div className="hero_content">
              <p>{card.trend}</p>
              <h4>{card.title}</h4>
              <a href="#">Discover More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HeroSection;
