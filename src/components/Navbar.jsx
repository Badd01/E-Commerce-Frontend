import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
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
                <i className="ri-search-line"></i>
              </Link>
            </span>
            <span>
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            </span>
            <span>
              <button className="hover:text-primary">
                <i className="ri-shopping-cart-line"></i>
                <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary text-center">
                  0
                </sup>
              </button>
            </span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
