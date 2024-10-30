import "./App.css";
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoMdHelpCircle } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
      logo: <FaSearch />,
      name: "Search",
    },
    {
      logo: <BiSolidOffer />,
      name: "Search",
    },
    {
      logo: <IoMdHelpCircle />,
      name: "Offers",
    },
    {
      logo: <IoMdLogIn />,
      name: "Helps",
    },
    {
      logo: <FaCartShopping />,
      name: "Cart",
    },
  ];

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl text-[#686b78] sticky top-0 z-50 bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="swiggy logo.webp" className="w-full" alt="logo " />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-black">
              Phulbani
            </span>{" "}
            Kandhamal, Odisha, india{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="font-bold inline  text-[#fc8019] "
            />
          </div>
          <nav className="flex list-none gap-5 ml-auto  text-[18px] font-semibold">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="flex hover:text-[#fc8019] items-center gap-2"
                >
                  {link.logo}
                  {link.name}
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
