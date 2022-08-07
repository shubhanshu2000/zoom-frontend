import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <header className="">
        <nav className="fixed bg-white top-0 w-full z-[99] flex  justify-between border-b-[1px] py-4 px-12 opacity-95 border-[#e7e7e7]   text-sm font-semibold">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                className="  w-3/4"
                src="https://st1.zoom.us/static/6.2.7552/image/new/ZoomLogo.png"
                alt="logo"
              />
            </Link>
            <ul className="flex items-center text-[#777]  justify-between w-full">
              <li className="">
                <Link to="/">SOLUTIONS</Link>
              </li>
              <li>
                <Link to="/plans&pricing">PLANS & PRICING</Link>
              </li>
              <li>
                <Link to="/contact-us">CONTACT US</Link>
              </li>
              <li>
                <Link to="/resources">RESOURCES</Link>
              </li>
            </ul>
          </div>
          <ul className="flex justify-between items-center text-[#0c63ce]  w-1/4">
            <li>
              <Link to="/join">JOIN</Link>
            </li>
            <li
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setTimeout(() => setVisible(false), 500)}
            >
              <div className="relative py-2">
                <span className="cursor-pointer flex">
                  HOST
                  <span className="text-[0.6rem] ml-1">&#9660;</span>
                </span>
                <ul
                  style={{ visibility: visible ? "visible" : "hidden" }}
                  className="hover-join mt-1 text-[#333] font-normal right-0 left-auto bg-[#fff] leading-6  border-[1px] rounded-md bg- w-[9.4rem] shadow-xl py-1   absolute"
                >
                  <li className="hover:bg-[#0c63ce] cursor-pointer py-1 block px-4 w-full hover:text-white">
                    <Link className="block " to="/signin">
                      With Video Off
                    </Link>
                  </li>
                  <li className="hover:bg-[#0c63ce] cursor-pointer block py-1 px-4 w-full hover:text-white">
                    <Link className="block " to="/signin">
                      With Video On
                    </Link>
                  </li>
                  <li className="hover:bg-[#0c63ce] block px-4 cursor-pointer py-1 w-full hover:text-white">
                    <Link className="block " to="/signin">
                      Screen Share Only
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/signin">SIGN IN</Link>
            </li>
            <li className="text-white   ">
              <Link className="px-4 py-2 rounded-xl bg-[#f26d21]" to="/signup">
                SIGN UP IT'S FREE
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
