import { Wrapper } from "./style";
import "./style.css";
import Car1 from "../../assets/imgs/carousel/Car1.JPG";
import Car2 from "../../assets/imgs/carousel/Car2.JPG";
import Car3 from "../../assets/imgs/carousel/Car3.JPG";
import Car4 from "../../assets/imgs/carousel/Car4.JPG";
import Car5 from "../../assets/imgs/carousel/Car5.JPG";
import Car6 from "../../assets/imgs/carousel/Car6.JPG";
import Car7 from "../../assets/imgs/carousel/Car7.JPG";

function MyCarousel() {
  const data = [Car1, Car2, Car3, Car4, Car5, Car6, Car7];

  return (
    <Wrapper>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ width: "1030px" }}
      >
        <div className="carousel-indicators">
          {data.map((_, i) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={i}
                className={`brend-caraousel-button ${i === 0 ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                key={Math.random()}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {data.map((item, i) => {
            return (
              <div
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                key={Math.random()}
              >
                <img src={item} className="d-block w-100 " alt="..." />
              </div>
            );
          })}
        </div>
        <button
          className="
          carousel-control-prev contact-carousel-control-button
          contact-carousel-control-button-left
          "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="contact-carousel-control-button-left-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="
          carousel-control-next contact-carousel-control-button
          contact-carousel-control-button-right
          "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="contact-carousel-control-button-right-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default MyCarousel;
