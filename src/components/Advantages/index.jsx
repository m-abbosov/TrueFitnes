import { Button, ClubText, P, Title, TitleContainer } from "../OpenClub/style";
import { Card, Cards, H1, Img, Text, Wrapper, Titlee, Box } from "./style";
import img from "../../assets/imgs/advantages-card-img.png";
import img2 from "../../assets/imgs/advantages-card-img2.png";
import img8 from "../../assets/imgs/advantages-card-img8.png";
import img3 from "../../assets/imgs/advantages-card-img3.png";
import img4 from "../../assets/imgs/advantages-card-img4.png";
import img5 from "../../assets/imgs/advantages-card-img5.png";
import img6 from "../../assets/imgs/advantages-card-img6.png";
import img7 from "../../assets/imgs/advantages-card-img7.png";
import Form from "../Form";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";

function Advantages() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: Math.random(),
        img: img,
        title: t("advantages.cards.title"),
        text: t("advantages.cards.text"),
      },
      {
        id: Math.random(),
        img: img2,
        title: t("advantages.cards.title2"),
        text: t("advantages.cards.text2"),
      },
      {
        id: Math.random(),
        img: img3,
        title: t("advantages.cards.title3"),
        text: t("advantages.cards.text3"),
      },
      {
        id: Math.random(),
        img: img4,
        title: t("advantages.cards.title4"),
        text: t("advantages.cards.text4"),
      },
      {
        id: Math.random(),
        img: img5,
        title: t("advantages.cards.title5"),
        text: t("advantages.cards.text5"),
      },
      {
        id: Math.random(),
        img: img6,
        title: t("advantages.cards.title6"),
        text: t("advantages.cards.text6"),
      },
      {
        id: Math.random(),
        img: img7,
        title: t("advantages.cards.title7"),
        text: t("advantages.cards.text7"),
      },
      {
        id: Math.random(),
        img: img8,
        title: t("advantages.cards.title8"),
        text: t("advantages.cards.text8"),
      },
    ]);
  }, [t]);

  return (
    <Wrapper>
      <TitleContainer height="315px">
        <ClubText data-aos="fade-up">
          {t("advantages.blue_fon.yellow_title")}
        </ClubText>
        <Title data-aos="fade-up">{t("advantages.blue_fon.title")}</Title>
        <P data-aos="fade-up" className="m-0 mt-5">
          {t("advantages.blue_fon.text")}{" "}
        </P>
      </TitleContainer>
      <Cards>
        {data.map((card) => (
          <Card data-aos="flip-up" key={card.id}>
            <Img src={card.img} />
            <H1>{card.title} </H1>
            <Text>{card.text}</Text>
          </Card>
        ))}
      </Cards>
      <Cards.Carousel>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {data.map((card, i) => (
              <button
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide-to={`${i}`}
                key={card.title}
                className={
                  i === 0
                    ? "contact-carousel-button_bottom active"
                    : "contact-carousel-button_bottom"
                }
                aria-current="true"
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {data.map((card, i) => (
              <div
                className={i === 0 ? "carousel-item active" : "carousel-item"}
                data-bs-interval="2000"
                key={card.id}
              >
                <Card>
                  <Img src={card.img} />
                  <H1>{card.title} </H1>
                  <Text>{card.text}</Text>
                </Card>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </Cards.Carousel>
      <Box>
        <Button className="top-btn">TOP 5</Button>
        <Titlee data-aos="fade-up">{t("advantages.title")} </Titlee>
      </Box>
      <Form />
    </Wrapper>
  );
}

export default Advantages;
