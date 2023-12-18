import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://cdn.icon-icons.com/icons2/1130/PNG/512/numberoneinacircle_80030.png",
      title: "데이타게이트코리아",
      desc:
        "서버 보안 솔루션개발",
      img:
        "https://cdn.pixabay.com/photo/2018/04/08/21/03/genomic-privacy-3302478_960_720.png",
      
        day:"2020.12 ~ 2021.11"
      },
      {
        id: "2",
        icon: "https://cdn.icon-icons.com/icons2/1130/PNG/512/numbertwoinacircle_80299.png",
        title: "세연아이넷",
        desc:
          "웹개발 + RPA개발",
        img:
          "https://img.freepik.com/free-vector/office-background-style_23-2148649783.jpg",
        day:"2022.05 ~ 2023.10"
        },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                 <span>{d.day}</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://jeounghyun.github.io/react_portfolio/assets/arrow2.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://jeounghyun.github.io/react_portfolio/assets/arrow2.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}