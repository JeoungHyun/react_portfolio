import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { frontEnd, backEnd ,certificate} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("frontEnd");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "frontEnd",
      title: "FrontEnd",
    },
    {
      id: "backEnd",
      title: "BackEnd",
    },
    {
      id: "certificate",
      title: "Certificate",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "frontEnd":
        setData(frontEnd);
        break;
      case "backEnd":
        setData(backEnd);
        break;
      case "certificate":
        setData(certificate);
        break;
      default:
        setData(frontEnd);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>My skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
