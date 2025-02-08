import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartModal from "../pages/shop/CartModal";
import { RiSearchLine, RiUser3Line, RiShoppingCartLine } from "react-icons/ri";
import Overlay from "./Overlay";
import LoginModal from "../pages/auth/LoginModal";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleLoginToggle = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <header>
      <nav className="max-w-maxi mx-auto px-4 flex justify-between items-center">
        {/* nav links */}
        <ul className="nav_links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/pages">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* logo */}
        <div className="nav_logo">
          <Link to="/">
            EComm<span>.</span>
          </Link>
        </div>

        {/* nav icons */}
        <div className="nav_icons relative">
          <span>
            <Link to="/search">
              <RiSearchLine />
            </Link>
          </span>

          <span>
            <button
              onClick={handleCartToggle}
              className="hover:text-primary flex items-center"
            >
              <RiShoppingCartLine />
              <sup className="text-sm px-1 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>

          <span>
            <button
              onClick={handleLoginToggle}
              className="flex items-center gap-1 bg-primary hover:bg-primary-dark rounded-sm p-2 text-white"
            >
              <RiUser3Line />
              <span>Login</span>
            </button>
          </span>
        </div>
      </nav>

      <Overlay isOpen={isLoginOpen} isForm={true}>
        <LoginModal isOpen={isLoginOpen} onClose={handleLoginToggle} />
      </Overlay>

      <Overlay isOpen={isCartOpen} isForm={false}>
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      </Overlay>
    </header>
  );
};

export default Navbar;
