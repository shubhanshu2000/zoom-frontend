import React, { useState } from "react";
import Carousel from "./Carousel";
import slides from "../data/data-header";

function Header() {
  const [current, setCurrent] = useState(0);
  // const [pausePlay, setPausePlay] = useState(false);

  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  setTimeout(() => {
    nextSlide();
  }, 4000);

  // const playPause = () => {

  // };
  // useEffect(() => {
  //   playPause();
  //   return () => {

  //   }
  // }, []);

  //       src="https://static.zoom.us/static/6.2.7600/image/new/home/button-pause.png"

  //       src="https://static.zoom.us/static/6.2.7600/image/new/home/button-play.png"

  return (
    <>
      <Carousel
        heading={slides[current].heading}
        para={slides[current].para}
        btnLink={slides[current].btnLink}
        btnText={slides[current].btnText}
        img={slides[current].img}
        // playPause={playPause}
      />
    </>
  );
}

export default Header;
