import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://cdn.icon-icons.com/icons2/1130/PNG/512/numberoneinacircle_80030.png",
      title: "SQI소프트",
      desc:
        "키오스크 설치 및 아침 방송 관리",
      img:
        "https://cdn.ready-market.com/106/4e186a11//Templates/pic/Interactive-Kiosk.jpg?v=b14be40b",
      day:"2018.12 ~ 2019.11"
      },
    {
      id: "2",
      icon: "https://cdn.icon-icons.com/icons2/1130/PNG/512/numbertwoinacircle_80299.png",
      title: "구디아카데미",
      desc:
        `교육과정 : 빅데이터 플랫폼 개발자 양성과정 수료`,
      img:
        "https://fpost.co.kr/board/data/editor/2109/5a7f94599dc81c5f7f9ea8b5eaf0184d_1632557064_2498.jpg",
      day:"2020.02 ~ 2020.09"
      },
    {
      id: "3",
      icon: "https://cdn.icon-icons.com/icons2/1130/PNG/512/numberthreeinacircle_80289.png",
      title: "데이타게이트코리아",
      desc:
        "서버 보안 솔루션개발",
      img:
        "https://cdn.pixabay.com/photo/2018/04/08/21/03/genomic-privacy-3302478_960_720.png",
      day:"2020.12 ~ 2021.11"
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
        src="https://jeounghyun.github.io/react_portfolio/assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="https://jeounghyun.github.io/react_portfolio/assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}