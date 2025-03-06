import {
  RiFilePaperLine,
  RiShoppingCartLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router";

const AdminSidebar = () => {
  const items = [
    {
      icon: <RiShoppingCartLine size={24} />,
      name: "Product",
      path: "/admin",
    },
    {
      icon: <RiUserLine size={24} />,
      name: "Users",
      path: "/admin/users",
    },
    {
      icon: <RiFilePaperLine size={24} />,
      name: "Orders",
      path: "/admin/orders",
    },
  ];

  return (
    <aside className="bg-gray-500  text-white p-5">
      <ul className="text-xl space-y-5 font-medium">
        {items.map((item, index) => (
          <li key={index}>
            <Link className="flex items-center" to={item.path}>
              <span>{item.icon}</span>
              <span className="hidden sm:flex ml-4">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AdminSidebar;
