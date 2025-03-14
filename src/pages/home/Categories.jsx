import images from "../../assets/images";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    {
      name: "Bags",
      path: "bags",
      image: images.category_1,
    },
    {
      name: "Belts",
      path: "Belts",
      image: images.category_2,
    },
    {
      name: "Eyewear",
      path: "eyewear",
      image: images.category_3,
    },
  ];

  const cards = [
    {
      _id: 1,
      image: images.card_1,
      title: "2025 Collection",
      description: "New season, new style",
    },
    {
      _id: 2,
      image: images.card_2,
      title: "2024 Collection",
      description: "Old season, but still fashionable",
    },
  ];

  return (
    <section className="max-w-maxi mx-auto text-center">
      <h4 className=" mt-8 py-4 bg-dark-2 rounded-xl font-bold text-xl text-primary">
        Categories
      </h4>
      <div className=" mt-4 grid grid-cols-2 gap-8 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`categories/${category.path}`}
            className=" mx-auto "
          >
            <img
              className="border-2 border-gray-300 w-50 h-50 object-cover mb-4 rounded-full hover:scale-105 transition"
              src={category.image}
              alt={category.name}
            />
            <h4 className="font-semibold">{category.name}</h4>
          </Link>
        ))}
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {cards.map((card) => (
          <div className="relative mx-auto" key={card._id}>
            <img
              className="max-w-[500px] rounded-xl"
              src={card.image}
              alt={card.title}
            />
            <div className="absolute top-1/4 left-1/2">
              <h4 className="text-secondary font-semibold text-xl mb-2">
                {card.title}
              </h4>
              <p className="text-dark-2 mb-2">{card.description}</p>
              <Link
                className=" underline font-semibold hover:text-primary transition"
                to="/shop"
              >
                Discover more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
