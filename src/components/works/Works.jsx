import { useState } from "react";
import "./works.css";

const Works = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: "./assets/mobile.png",
      title: "Web Development",
      desc: "Web development is about continually learning, adapting, and evolving.",
      img: "./assets/works1.jpg",
    },
    {
      id: 2,
      icon: "./assets/globe.png",
      title: "App Development",
      desc: "The true power of a mobile application lies in its ability to seamlessly integrate technology with human experiences.",
      img: "./assets/works2.jpg",
    },
  ];

  const handlClick = (way) => {
    way === "left"
      ? setCurrentSlider(
          currentSlider > 0 ? currentSlider - 1 : data.length - 1
        )
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                  </div>
                  {/* <span>projects</span> */}
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow leftarrow"
        alt=""
        onClick={() => handlClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow rightarrow"
        alt=""
        onClick={() => handlClick("right")}
      />
    </div>
  );
};

export default Works;
