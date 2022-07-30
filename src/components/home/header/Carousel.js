import React from "react";
import { Link } from "react-router-dom";

function Carousel({ heading, para, btnText, btnLink, img }) {
  return (
    <>
      <div className=" relative h-full">
        <div className="bg-[#F6F7F9] w-1/2  flex flex-col  justify-center items-start  px-8">
          <div className="w-3/4 h-[62vh] mt-12 ">
            <h1 className="text-5xl text-[#444] font-bold">{heading}</h1>
            <p className="mt-8 mb-10 text-xl ">{para}</p>
            <Link
              className="text-white text-lg  font-semibold bg-[#f26d21] rounded-lg px-4 py-2"
              to={btnLink}
            >
              {btnText}
            </Link>

            {/* <button onClick={playPause}>hi</button> */}
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="right-0 top-10 rounded-tl-xl  rounded-bl-xl  shadow-2xl shadow-[rgb(0 0 0 / 20%)] h-full bg-no-repeat bg-cover bg-[center_top] w-[calc(50%+87px)] absolute"
        ></div>
      </div>
    </>
  );
}

export default Carousel;
