import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-5 border-b-2">
      <h2 className="logo text-2xl font-semibold">Blazing Burger</h2>
      <ul className="links flex gap-10 font-semibold">
        <li>
          <Link to="/" className="hover:text-orange-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/burgers" className="hover:text-orange-500">
            Burgers
          </Link>
        </li>
        <li>
          <Link to="/orders" className="hover:text-orange-500">
            Orders
          </Link>
        </li>
        <li>
          <Link
            to="/eat-now"
            className="bg-orange-500 py-2 px-5 rounded-full text-white  hover:bg-slate-900 font-semibold"
          >
            Eat Now
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
