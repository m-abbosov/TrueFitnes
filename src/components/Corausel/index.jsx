import { Wrapper } from "./style";
import "./style.css";

import CarsImg1 from "../../assets/imgs/carousel/Img1.png";
import CarsImg2 from "../../assets/imgs/carousel/Img2.png";
import CarsImg3 from "../../assets/imgs/carousel/Img3.png";
import CarsImg4 from "../../assets/imgs/carousel/Img4.png";
import CarsImg5 from "../../assets/imgs/carousel/Img5.png";
import CarsImg6 from "../../assets/imgs/carousel/Img6.png";
import CarsImg7 from "../../assets/imgs/carousel/Img7.png";
import CarsImg8 from "../../assets/imgs/carousel/Img8.png";

function Carousel() {
  const data = [
    CarsImg1,
    CarsImg2,
    CarsImg3,
    CarsImg4,
    CarsImg5,
    CarsImg6,
    CarsImg7,
    CarsImg8,
  ];

  return (
    <Wrapper>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {data.map((_, i) => {
            return (
              <button
                type="button"
                key={Math.random()}
                data-bs-target="#carouselExampleCaptions"
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
                        КАРдио <br />
                        тренажеры
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
                    <img src={item} alt="" />
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
