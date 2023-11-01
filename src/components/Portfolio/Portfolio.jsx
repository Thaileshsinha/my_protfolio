import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/my_web.png";
import my_money_panda from "../../img/my_money_panda.png";
import emilo_1 from "../../img/emilo_1.png";
import docsta from "../../img/docsta.png";
import agentian from "../../img/agentian.png";
import HOC from "../../img/travel_1.jpg";
// import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = [
    {
      name: Sidebar,
      path: "/",
    },
    {
      name: my_money_panda,
      path: "https://mymoneypanda.in/",
    },
    {
      name: emilo_1,
      path: "https://emilorj.sjain.io/",
    },
    {
      name: docsta,
      path: "https://www.docstainstitute.com/",
    },
    {
      name: agentian,
      path: "https://demo3.sjainventures.com/agentian/",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {data &&
          data.map((e) => (
            <SwiperSlide>
              <Link to={e.path}>
                <img src={e.name} alt="" height="250px" />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
