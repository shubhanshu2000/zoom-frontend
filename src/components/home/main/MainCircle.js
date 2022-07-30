import React, { useState } from "react";
import MainCircleSvg from "./MainCircleSvg";

function MainCircle() {
  const linkArr = [
    "https://st1.zoom.us/static/6.2.7600/image/new/home/meetings.png",
    "https://st2.zoom.us/static/6.2.7600/image/new/home/phone2.png",
    "https://st2.zoom.us/static/6.2.7600/image/new/home/developer.png",
    "https://st1.zoom.us/static/6.2.7600/image/new/home/zoomforhome.png",
    "https://st1.zoom.us/static/6.2.7600/image/new/home/onzoom.png",
    "https://st2.zoom.us/static/6.2.7600/image/new/home/marketplace.png",
    "https://zoom.us/docs/image/icon-zoom-events.svg",
    "https://st1.zoom.us/static/6.2.7600/image/new/home/zoomrooms.png",
    "https://st1.zoom.us/static/6.2.7600/image/new/home/chat.png",
  ];
  // const dataArr = ["name", "place", "time", "date", "price", "description"];

  return (
    <>
      <div className="relative mt-40 w-1/2">
        <div>
          <MainCircleSvg />
          <ul className="absolute  top-0">
            {linkArr.map((link, index) => (
              <li key={index}>
                <img src={link} alt="no" />
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default MainCircle;
