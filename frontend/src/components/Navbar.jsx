import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-pink-200 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold hover:opacity-90">
          UrbanSuraksha
        </Link>

        {/* Right Buttons */}
        <div className="space-x-4">
          <Link
            to="/signup"
            className="font-medium bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-pink-100 transitio"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="bg-white text-pink-600 px-4 py-2 rounded-full font-semibold hover:bg-pink-100 transition"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
