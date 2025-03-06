import images from "../../assets/images";
import { Link } from "react-router";

const Categories = () => {
  const categories = [
    {
      name: "Áo",
      path: "accessories",
      image: images.category_1,
    },
    {
      name: "Quần",
      path: "dress",
      image: images.category_2,
    },
    {
      name: "Chân váy",
      path: "jewellery",
      image: images.category_3,
    },
    {
      name: "Đầm",
      path: "cosmetics",
      image: images.category_4,
    },
  ];

  const cards = [
    {
      _id: 1,
      image: images.card_1,
      title: "Hàng ngày",
      description: "Thoải mái, gọn gàng.",
    },
    {
      _id: 2,
      image: images.card_2,
      title: "Công sở",
      description: "Thanh lịch, chuyên nghiệp.",
    },
  ];

  return (
    <section className="max-w-maxi mx-auto text-center">
      <h4 className=" mt-8 py-4 bg-dark-2 rounded-xl font-bold text-xl text-primary">
        Danh mục
      </h4>
      <div className="mt-4 grid grid-cols-2 gap-8 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`categories/${category.path}`}
            className=" text-center"
          >
            <img
              className="max-w-[150px] mx-auto mb-4 rounded-xl hover:scale-105 transition"
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
                Khám phá thêm
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
