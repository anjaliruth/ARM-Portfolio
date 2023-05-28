// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../../Media/Trivia.png";
import image2 from "../../Media/TipSplitter2.png";
import image3 from "../../Media/CurrencyConverter.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComp() {
  const lists = [
    {
      title: "Trivia Game",
      description:
        "Test your knowledge in a thrilling Trivia Game. Users get to choose from over 20 categories, varying difficulty levels and game length. Earn points for correct answers and reset the game at anytime.",
      image: image1,
      githubUrl: "https://github.com/anjaliruth/TRIVIA/blob/main/README.md",
      pageUrl: "https://anjaliruth.github.io/TRIVIA/",
    },
    {
      title: "Tip Splitter",
      description:
        "Need to figure out exactly how much to tip?  \nTry out this tip splitter.  \nDining as a group and want to split the bill? We got that covered too.",
      image: image2,
      githubUrl:
        "https://github.com/anjaliruth/TipSplitter/blob/main/README.md",
      pageUrl: "https://anjaliruth.github.io/TipSplitter/",
    },
    {
      title: "Currency Converter",
      description:
        "Input your base currency and amount, and instantly obtain the converted value in your desired target currency. It's quick, accurate, and convenient for all your currency conversion needs.",
      image: image3,
      githubUrl:
        "https://github.com/anjaliruth/CorrencyConverter/blob/master/README.md",
      pageUrl: "https://anjaliruth.github.io/CorrencyConverter/",
    },
  ];
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {lists.map((list, i) => (
          <SwiperSlide key={i}>
            <div className="carousel-item">
              <img
                className="carousel-item-image"
                alt="project-pic"
                src={list.image}
              />
              <div className="carousel-content">
                <h2 className="carousel-item-title">{list.title}</h2>
                <p className="carousel-item-text">{list.description}</p>
                <div className="carousel-buttons">
                  <button onClick={list.goToPage}>URL</button>
                  <button onClick={list.goToGithub}>Github</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
