import Banner from "./Banner";
import Categories from "./Categories";
// import NewestProducts from "./NewestProducts";
import PromoBanner from "./PromoBanner";
// import PopularProducts from "./PopularProduct";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      {/* <NewestProducts />
      <PopularProducts /> */}
      <PromoBanner />
    </>
  );
};

export default Home;
