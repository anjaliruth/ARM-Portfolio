import { Carouselitem } from "../CarouselItem/carouselitem";
import image1 from "../../Media/Trivia.png";
import image2 from "../../Media/Trivia.png";
import image3 from "../../Media/Trivia.png";
import React, { useState } from "react";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > lists.length) {
      newIndex = lists.length - 1;
    }
    setActiveIndex(newIndex);
  };
  const lists = [
    {
      title: "Trivia Game",
      description: "Test your knowledge in a thrilling Trivia Game. Users get to choose from over 20 categories, varying difficulty levels and game length. Earn points for correct answers and reset the game at anytime.",
      image: image1,
      githubUrl:"https://github.com/anjaliruth/TRIVIA/blob/main/README.md", 
      pageUrl: "https://anjaliruth.github.io/TRIVIA/"
    },
    {
      title: "Trivia Game",
      description: "Test your knowledge in a thrilling Trivia Game. Users get to choose from over 20 categories, varying difficulty levels and game length. Earn points for correct answers and reset the game at anytime.",
      image: image2,
      githubUrl:"https://github.com/anjaliruth/TRIVIA/blob/main/README.md", 
      pageUrl: "https://anjaliruth.github.io/TRIVIA/"
    },
    {
      title: "Trivia Game",
      description: "Test your knowledge in a thrilling Trivia Game. Users get to choose from over 20 categories, varying difficulty levels and game length. Earn points for correct answers and reset the game at anytime.",
      image: image3,
      githubUrl:"https://github.com/anjaliruth/TRIVIA/blob/main/README.md", 
      pageUrl: "https://anjaliruth.github.io/TRIVIA/"
    },
  ];
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {lists.map((list, i) => (
          <Carouselitem
            key={i}
            title={list.title}
            image={list.image}
            description={list.description} width={"100%"}
            githubUrl={list.githubUrl}
            pageUrl={list.pageUrl}
          />
        ))}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrows"
        >
          {" "}
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {lists.map((list, i) => {
            return (
              <button
                onClick={() => {
                  updateIndex(i);
                }}
                className="indicator-buttons"
              >
                <span className={`material-symbols-outlined ${i===activeIndex ? "indicator-symbol-active":"indicator-symbol"}`}>
                 
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrows"
        >
          {" "}
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
}
