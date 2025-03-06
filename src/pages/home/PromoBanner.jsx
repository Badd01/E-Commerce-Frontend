import {
  RiTruckLine,
  RiExchangeDollarLine,
  RiUserVoiceFill,
} from "react-icons/ri";

const PromoBanner = () => {
  return (
    <section className="max-w-maxi mx-auto text-center bg-gray-200 py-8 mt-8 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-8 ">
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiTruckLine />
        </span>
        <h4 className="text-secondary font-semibold">Giao hàng miễn phí</h4>
        <p>Với đơn hàng trên 500.000VNĐ</p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiExchangeDollarLine />
        </span>
        <h4 className="text-secondary font-semibold">Hỗ trợ hoàn trả</h4>
        <p>Trong vòng 3 ngày sau khi mua hàng.</p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-primary text-4xl">
          <RiUserVoiceFill />
        </span>
        <h4 className="text-secondary font-semibold">Hỗ trợ nhiệt tình</h4>
        <p>Phục vụ từ 8h-22h.</p>
      </div>
    </section>
  );
};

export default PromoBanner;
