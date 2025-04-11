import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    Cookies.remove("userEmail");
    Cookies.remove("isLoggedIn");
    dispatch(logout());
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-pink-200 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:opacity-90">
          UrbanSuraksha
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn && user ? (
            <div className="flex items-center space-x-4">
              <span className="text-black font-medium cursor-pointer">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-gray-50 text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200 cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={goToLogin}
              className="bg-white text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200 cursor-pointer"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden flex justify-evenly mt-2 w-full rounded-lg p-4`}
      >
        {isLoggedIn && user ? (
          <div className="flex items-center space-x-4">
            <span className="text-black font-medium">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={goToLogin}
            className="relative mb-4 bg-white text-[#023c73] py-2 px-4 rounded-full font-medium shadow-md hover:bg-gray-200"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
