import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import CartModal from "../pages/shop/CartModal";
import { RiSearchLine, RiUser3Line, RiShoppingCartLine } from "react-icons/ri";

import {} from "react-icons/ri";
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const hanldeCartToggle = () => {
    setIsCartOpen(!isCartOpen);
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
            <Link to="/login">
              <RiUser3Line />
            </Link>
          </span>
          <span>
            <button
              onClick={hanldeCartToggle}
              className="hover:text-primary flex items-center"
            >
              <RiShoppingCartLine />
              <sup className="text-sm px-1 text-white rounded-full bg-primary text-center">
                {products.length}
              </sup>
            </button>
          </span>
        </div>
      </nav>

      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={hanldeCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
