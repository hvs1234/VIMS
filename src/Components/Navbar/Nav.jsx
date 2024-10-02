// import React from 'react'
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import Handlers from "../../Services/Handlers";
import "./Nav.css";
import logo from "/Images/logo.png";

const Nav = () => {
  const { handleOnClick, navlinkdata, toggleNavbar, isActive } = Handlers();

  return (
    <>
      <header
        className={`header flex justify-between fixed w-[100%] h-[auto] top-0 left-0 items-center px-[2rem] py-[2rem] max-md:py-[3rem] shadow-sm z-[1001] max-md:justify-between ${
          isActive ? "active" : ""
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full transition-all duration-[0.2s] ease-linear bg-[black] opacity-[0.6]`}
        ></div>
        <Link
          to={"/"}
          onClick={"/"}
          className="flex items-center gap-[1rem] justify-start relative"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[10%] rounded-full px-[0.2rem] py-[0.2rem] relative"
          />
        </Link>
        <nav className="navbar flex justify-end items-center w-[100%] max-[768px]:w-[auto]">
          <ul className="flex justify-end items-center gap-[1rem] relative w-[100%]">
            {navlinkdata.map((e) => {
              return (
                <Link
                  key={e.id}
                  to={e.to}
                  onClick={handleOnClick(e.to)}
                  className={`${e.class} max-md:text-[1.6rem]`}
                >
                  {e.title}
                </Link>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-end items-center px-[2rem] relative text-[white]">
          <HiMenu
            size={26}
            className="cursor-pointer nav-btn"
            onClick={toggleNavbar}
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
