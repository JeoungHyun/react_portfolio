import "./testmonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "월리엄 셰익스피어",
      title: "극작가, 1564-1616",
      img:
        "https://blog.kakaocdn.net/dn/EVp61/btq2KwvlwV9/No6WLHyMvOKl5ladyOaUqk/img.png",
      icon: "https://t1.daumcdn.net/cfile/blog/9933174E5BC71AC803",
      desc:
        "결코 끌 수 없는 열정으로 삶을 살아라.",
    },
    {
      id: 2,
      name: "아리스토텔레스",
      title: "철학자, 기원전384-322",
      img:
        "https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTqE1mtped62BJfdsQc13Y0715JFp8r-V99U5bNzbtjVPj8iIwzwurFSW2IdIEY",
      icon: "assets/youtube.png",
      desc:
        "시작이 반이다.",
      featured: true,
    },
    {
      id: 3,
      name: "맹자",
      title: "철학자, 기원전372-289",
      img:
        "https://www.readersnews.com/news/photo/first/201105/img_26100_1.jpg",
      icon: "assets/linkedin.png",
      desc:
        "일은 해보면 쉬운 법이다. 그럼에도 시작은 하지 않고 어렵다고만 생각하기에 할 수 있는 일들을 놓친다.",
    },
  ];
  return (
    <div className="testmonials" id="testmonials">
      <h1>My Motto</h1>
      <div className="container">
        {data.map((d,index) => (
          <div className={d.featured ? "card featured" : "card"} key={index}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" style={{background:'color'}} />
              <img
                className="user"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}