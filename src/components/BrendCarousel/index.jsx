import {
  IMG,
  P,
  Span,
  Title,
  UserName,
  Wrapper,
  WrapperCarousel,
} from "./style";
import "./style.css";
import { useTranslation } from "react-i18next";

function BrendCarousel() {
  const { t } = useTranslation();

  const data = [
    {
      id: Math.random(),
      name: "Николай Пак",
      place: "Директор Get Fit",
      text: "Для нас важно чтоб тренировочный процесс наших клиентов проходил с комфортом и удоволствием. Мы рады, что сотрудничаем с компанией ProWellness, которая удивляет нас своим качественным спортивным оборудованием и чутким сервисом.",
      img: "https://prowellness.uz/imgs/nikolay-pak.jpg",
      video: "https://prowellness.uz/videos/get-fit-testimonials.mp4",
      poster: "https://prowellness.uz/imgs/get-fit-testimonials.jpg",
    },
    {
      id: Math.random(),
      name: "Umid Husanov",
      place: "CROCUS FITNESS Boshqaruvchisi",
      text: "Trenajorlarning ishlashi bio-mexanikasi professional darajada. Yana plyus tomoni trenajerlarga bir yillik garantiya berildi. CROCUS FITNESS trenajer zali xammaga ProWellness kompaniyasini tavsiya qiladi.",
      img: "https://prowellness.uz/imgs/umid-husanov.jpg",
      video: "https://prowellness.uz/videos/crocus-testimonials.mp4",
      poster: "https://prowellness.uz/imgs/crocus-testimonials.jpg",
    },
    {
      id: Math.random(),
      name: "Damir Usmanov",
      place: "Соучредитель Savage",
      text: "в момент открытия нам очень важно было подобрать качественных поставщиков оборудования, и это один из фундаментальных и важнейших вопросов для любого зала... Наш выбор пал на компанию ProWellness... ",
      img: "https://prowellness.uz/imgs/damir-usmanov.jpg",
      video: "https://prowellness.uz/videos/savage-testimonials.mp4",
      poster: "https://prowellness.uz/imgs/savage-testimonials.jpg",
    },
    {
      id: Math.random(),
      name: "Арсланов Тимур",
      place: "Директор Panaram's Hotel Tashkent",
      text: "Нами было получено хорошее проектировани и консультация по части именно тех тренажеров, в том качестве, количестве и асортименте, которые большы пожходят для нашего типа фитнес кулбов при отелях",
      img: "https://prowellness.uz/imgs/arslanov-timur.jpg",
      video: "https://prowellness.uz/videos/panarams-testimonials.mp4",
      poster: "https://prowellness.uz/imgs/panarams-testimonials.jpg",
    },
  ];

  return (
    <Wrapper>
      <Title> {t("brend.carousel.title")} </Title>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark brend-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {data.map((_, i) => {
            return (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={i}
                className={`brend-caraousel-button ${i === 0 ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`carousel-item  brend-carousel-item ${
                  index === 0 ? "active" : ""
                }`}
              >
                <WrapperCarousel>
                  <IMG src={item.img} />
                  <P color="black">{item.text} </P>
                  <UserName>{item.name}</UserName>
                  <Span></Span>
                  <UserName size="15px">{item.place}</UserName>
                  <video
                    poster={item.poster}
                    src={item.video}
                    muted
                    controls
                  ></video>
                </WrapperCarousel>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev other-button-left"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="other-button-left-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next other-button-left"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="other-button-right-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Wrapper>
  );
}

export default BrendCarousel;
