import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem, CarouselCaption } from "reactstrap";
import naruto from "./Images/naruto.jpg";
import onePiece from "./Images/onePiece.jpg";
import bleach from "./Images/bleach.jpg";
import fairyTail from "./Images/fairyTail.jpg";
import swordArtOnline from "./Images/swordArtOnline.jpg";
const items = [
  {
    id: 1,
    img: naruto,
    caption: "Naruto",
  },
  {
    id: 2,
    img: onePiece,
    caption: "One Piece",
  },
  {
    id: 3,
    img: bleach,
    caption: "Bleach",
  },
  {
    id: 4,
    img: fairyTail,
    caption: "Fairy Tail",
  },
  {
    id: 5,
    img: swordArtOnline,
    caption: "Sword Art Online",
  },
];

const AnimeGalery = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      next()
    }, 5000);
  }, []);

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          alt={item.caption}
          style={{ width: 500, height: 400 }}
          src={item.img}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
};

export default AnimeGalery;
