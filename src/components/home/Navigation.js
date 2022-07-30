import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <header>
        <nav className="flex justify-between py-4 px-12 sticky text-sm font-semibold">
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
            <li>
              <Link to="/host">HOST</Link>
            </li>
            <li>
              <Link to="/signin">SIGN IN</Link>
            </li>
            <li className="text-white bg-[#f26d21] rounded-lg px-4 py-2">
              <Link to="/signup">SIGN UP IT'S FREE</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
