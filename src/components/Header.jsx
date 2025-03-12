import React from "react";
import logo from "../assets/quran.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full bg-gray-50 py-4 shadow mb-10 sticky top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="w-14">
            <img src={logo} className="w-full" alt="image" />
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
            <NavLink
              to="/"
              className="text-md md:text-xl border-[1px] rounded-full border-bg-gray-200 px-2 py-1 md:px-4 md:py-2 hover:bg-black/90 hover:text-white transition-all duration-300 ease-linear"
            >
              المرتل
            </NavLink>
            <NavLink
              to="/bigReaders"
              className="text-md md:text-xl border-[1px] rounded-full border-bg-gray-200 px-2 py-1 md:px-4 md:py-2 hover:bg-black/90 hover:text-white transition-all duration-300 ease-linear"
            >
              كبار القراء
            </NavLink>
            <NavLink
              to="/alharam"
              className="text-md md:text-xl border-[1px] rounded-full border-bg-gray-200 px-2 py-1 md:px-4 md:py-2 hover:bg-black/90 hover:text-white transition-all duration-300 ease-linear"
            >
              الحرم المكي
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
