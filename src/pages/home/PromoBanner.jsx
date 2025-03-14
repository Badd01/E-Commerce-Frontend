import {
  RiTruckLine,
  RiExchangeDollarLine,
  RiUserVoiceFill,
} from "react-icons/ri";

const PromoBanner = () => {
  return (
    <section className="max-w-maxi text-xl mx-auto min-h-50 text-center bg-gray-200 py-8 mt-8 rounded-xl grid grid-cols-1 sm:grid-cols-3 items-center gap-8 ">
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiTruckLine />
        </span>
        <h4 className="text-secondary font-semibold">Free Shipping</h4>
        <p>With order over $100</p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiExchangeDollarLine />
        </span>
        <h4 className="text-secondary font-semibold">Free Return</h4>
        <p>Within 3 days after purchase.</p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiUserVoiceFill />
        </span>
        <h4 className="text-secondary font-semibold">Strongly Support</h4>
        <p>For 24/7</p>
      </div>
    </section>
  );
};

export default PromoBanner;
