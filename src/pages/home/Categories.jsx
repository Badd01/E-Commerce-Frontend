import images from "../../assets/images";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    {
      name: "Accessories",
      path: "accessories",
      image: images.category_1,
    },
    {
      name: "Dress Collection",
      path: "dress",
      image: images.category_2,
    },
    {
      name: "Jewellery",
      path: "jewellery",
      image: images.category_3,
    },
    {
      name: "Cosmetics",
      path: "cosmetics",
      image: images.category_4,
    },
  ];
  return (
    <div className="categories_grid">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`categories/${category.path}`}
          className=" categories_card"
        >
          <img src={category.image} alt={category.name} />
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
