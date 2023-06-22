import { Wrapper } from "./style";
import "./style.css";

import CarsImg1 from "../../assets/imgs/carousel/Img1.PNG";
import CarsImg2 from "../../assets/imgs/carousel/Img2.PNG";
import CarsImg3 from "../../assets/imgs/carousel/Img3.PNG";
import CarsImg4 from "../../assets/imgs/carousel/Img4.PNG";

function Carousel() {
  const data = [
    {
      id: Math.random(),
      img: CarsImg1,
      title: "КАРДИО ТРЕНАЖЕРЫ",
    },
    {
      id: Math.random(),
      img: CarsImg2,
      title: "СИЛОВЫЕ ТРЕНАЖЕРЫ",
    },
    {
      id: Math.random(),
      img: CarsImg3,
      title: "ФУНКЦИОНАЛЬНОЙ ТРЕНАЖЕРЫ",
    },
    {
      id: Math.random(),
      img: CarsImg4,
      title: "ГРУППОВЫЕ ТРЕНАЖЕРЫ",
    },
  ];

  return (
    <Wrapper>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {data.map((_, i) => {
            return (
              <button
                type="button"
                key={Math.random()}
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to={i}
                className={`contact-carousel-button_bottom ${
                  i === 0 ? "active" : ""
                }`}
                aria-current="true"
                aria-label={`Slide ${i + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {data.map((item, i) => {
            return (
              <div
                key={Math.random()}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                data-bs-interval="2000"
              >
                <div className="home-carousel-wrapper-div">
                  <div className="home-carousel-wrapper-div-texts">
                    <h2 className="home-carousel-wrapper-div-texts-logo">
                      TRUE <br />
                      <span style={{ color: "#01aee7" }}>FITNESS</span>
                    </h2>
                    <div className="yellowLine"></div>
                    <div className="home-carousel-wrapper-div-texts-logo-text">
                      Современное и надежное оборудование для фитнес-клубов
                    </div>
                    <div className="bottom-text-wrapper">
                      <h2 className="bottomText">
                        {item.title}
                      </h2>
                      <svg
                        width="147"
                        height="18"
                        viewBox="0 0 147 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M147 9L132 0.339746V17.6603L147 9ZM0 10.5H133.5V7.5H0V10.5Z"
                          fill="#01AEE7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="home-carousel-wrapper-div-img">
                    <img src={item.img} className="w-100" alt="" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Carousel;
