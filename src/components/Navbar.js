import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-700">
          Score 
          Keeper
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            {/* <Link
              to="/GameHazari"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Hazari (360)
            </Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
