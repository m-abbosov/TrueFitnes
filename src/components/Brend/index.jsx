import {
  About,
  AboutContainer,
  Card,
  CardText,
  Cards,
  H1,
  History,
  ImgDiv,
  Innovations,
  InnovationsCard,
  InnovationsTitle,
  P,
  Text,
  TrueSports,
  Wrapper,
  Years,
  Line,
} from "./style";
import { ClubText, Title, TitleContainer } from "../OpenClub/style";
import AboutTrue from "../AboutTrue";
import about from "../../assets/imgs/brandAbout.png";
import imgCard1 from "../../assets/imgs/innovationsCard1.png";
import imgCard2 from "../../assets/imgs/innovationsCard2.png";
import imgCard3 from "../../assets/imgs/innovationsCard3.png";
import imgCard4 from "../../assets/imgs/innovationsCard4.png";
import imgCard5 from "../../assets/imgs/innovationsCard5.png";
import imgCard6 from "../../assets/imgs/innovationsCard6.png";
import Form from "../Form";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Brand() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const years = [
    {
      id: Math.random(),
      year: 1973,
      img: "https://static.tildacdn.com/tild3934-6565-4730-a465-346464643935/TRU_gold_side_1983.png",
      title: "TRUE Sports разрабатывает свою первую беговую дорожку",
      text: "Компания True Sports основанная Frank Trulaske в 1972 году, разрабатывает свою первую беговую дорожку, являясь одним из пионеров в создании беговых дорожек в мире. Примененные технологии повлияли на развитии фитнес индустрии.",
    },
    {
      id: Math.random(),
      year: 1981,
      img: "https://static.tildacdn.com/tild3236-3232-4432-b963-386161633130/true_fitness_2.png",
      title: "Ребрендинг TRUE Sports в TRUE Fitness Technologies.",
      text: "В 1981 году компания производит ребрендинг TRUE Sports в TRUE Fitness Technologies.",
    },
    {
      id: Math.random(),
      year: 1987,
      img: "https://static.tildacdn.com/tild6638-6663-4331-b063-363837393663/removable_key2.jpg",
      title: "Разработка съемного ключа безопасности",
      text: "TRUE впервые разрабатывает и внедряет съемный ключ безопасности, ставший обязательным атрибутом всех современных беговых дорожек. Сегодня эта технология является настолько широко используемой.",
    },
    {
      id: Math.random(),
      year: 1988,
      img: "https://static.tildacdn.com/tild3865-6130-4733-b566-343433396464/1988-900-Series-e154.png",
      title: "Выход в премиальный сегмент",
      text: "TRUE запускает ТОП линейку кардиотренажеров 900 серии и выходит в премиальный сегмент, предлагая самые совершенные технологии с потрясающей производительностью. С этого момента имя TRUE ассоциируется с качеством и передовыми технологиями.",
    },
    {
      id: Math.random(),
      year: 1990,
      img: "https://static.tildacdn.com/tild3538-3365-4462-b835-616563386464/1990-OFallon-Warehou.png",
      title: "Расширение производственных мощностей",
      text: "Офис и производство компании перемещается в действующую штаб-квартиру, значительно расширив производственные мощности для обеспечения стремительного роста компании.",
    },
    {
      id: Math.random(),
      year: 1992,
      img: "https://static.tildacdn.com/tild6430-3832-4431-b662-386631366134/soft_system.jpg",
      title: "TRUE первой внедряет амортизацию бегового полотна",
      text: "В 1992 г. компания TRUE впервые представляет запатентованную технологию амортизации бегового полотна Soft System®, которая снижает ударную нагрузку на суставы, делая тренировку на беговой дорожке максимально безопасными.",
    },
    {
      id: Math.random(),
      year: 1994,
      img: "https://static.tildacdn.com/tild3661-3839-4161-b132-363864316566/orthopedic_belt.jpg",
      title: "Разработка и внедрение ортопедического бегового полотна",
      text: "TRUE впервые разрабатывает и внедряет ортопедическое беговое полотно для лучшей амортизации и обеспечения высокой безопасности тренировки.",
    },
    {
      id: Math.random(),
      year: 1996,
      img: "https://static.tildacdn.com/tild6531-3132-4630-b531-333235383236/PS100E-2-1000x833.jpg",
      title:
        "Разработка и внедрение функции контроля частоты сердечных сокращений",
      text: "TRUE представляет запатентованную технологию контроля частоты сердечных сокращений HRC Heart Rate Control®",
    },
    {
      id: Math.random(),
      year: 1998,
      img: "https://static.tildacdn.com/tild3064-6630-4564-a564-653064363638/soft-select.jpg",
      title: "Разработка технологии регулировки амортизации Soft Select®",
      text: "TRUE внедряет запатентованную технологии регулировки амортизации беговой деки Patented Soft Select®",
    },
    {
      id: Math.random(),
      year: 2002,
      img: "https://static.tildacdn.com/tild3764-6633-4337-a339-356130646439/TrueStretch_Golf_2.png",
      title: "Разработка Рамы для стрейтчинга TRUE Stretch",
      text: "TRUE удалось разработать уникальную раму для стрейтчинга, особенностью которой является простота и функциональность, и которая не имеет аналогов по своим функциональным возможностям.",
    },
    {
      id: Math.random(),
      year: 2007,
      img: "https://static.tildacdn.com/tild3863-3033-4432-a166-306231653136/cruise_control.jpg",
      title: "Запатентованная технология HRC Cruise Control®",
      text: "TRUE разрабатывает и внедряет запатентованную технологию регулировки нагрузки для поддержания пульса HRC Cruise Control®.",
    },
    {
      id: Math.random(),
      year: 2015,
      img: "https://static.tildacdn.com/tild3335-3263-4433-b731-626538613332/Paramount-fitness.jpg",
      title: "Приобретение компании Paramount",
      text: "TRUE покупает компанию Paramount, значительно расширив свою линейку силовых тренажеров и усиливает свои позиции как безоговорочного лидера рынка.",
    },
    {
      id: Math.random(),
      year: 2015,
      img: "https://static.tildacdn.com/tild3865-3263-4764-b962-633432376534/Alpine_Runner.png",
      title: "Разработка инновационного тренажера Aline Runner Incline Trainer",
      text: "Разработка инновационного тренажера для интервальных тренировок с наклоном Alpine Runner Incline Trainer",
    },
  ];

  return (
    <Wrapper>
      <TitleContainer height="225px">
        <ClubText>{t("brend.blue_fon.text")}</ClubText>
        <Title>{t("brend.blue_fon.title1")}</Title>
        <Title> {t("brend.blue_fon.title2")}</Title>
      </TitleContainer>
      <About>
        <Card>
          <Text>{t("brend.about.text1")} </Text>
          <Text color="black">{t("brend.about.text2")} </Text>
          <Text color="black">{t("brend.about.text3")}</Text>
          <Text>{t("brend.about.text4")}</Text>
        </Card>
      </About>
      <AboutContainer>
        <AboutTrue img={about} button={false} />
        <History>
          <H1>{t("brend.about_container.title1")}</H1>
          <H1 color="black">{t("brend.about_container.title2")}</H1>
          <Line />
          <P>{t("brend.about_container.text1")}</P>
          <P>{t("brend.about_container.text2")}</P>
        </History>
        <Years>
          {years.map((year, i) => {
            return (
              <div
                onClick={() => setActive(i)}
                key={year.id}
                className={i === active ? "year active" : "year"}
              >
                <span></span>
                <b>{year.year}</b>
              </div>
            );
          })}
        </Years>
        <ImgDiv>
          <LazyLoadImage
            alt={years[active].title}
            effect="blur"
            src={years[active].img}
            width="610px"
          />
          <TrueSports>
            <H1>{years[active].title}</H1>
            <P>{years[active].text}</P>
          </TrueSports>
        </ImgDiv>
      </AboutContainer>
      <Innovations>
        <InnovationsTitle>{t("brend.innovations.title")}</InnovationsTitle>
        <Cards>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard1} />
            <CardText>{t("brend.innovations.img_title1")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard2} />
            <CardText>{t("brend.innovations.img_title2")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard3} />
            <CardText>{t("brend.innovations.img_title3")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard4} />
            <CardText>{t("brend.innovations.img_title4")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard5} />
            <CardText>{t("brend.innovations.img_title5")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <LazyLoadImage alt="main" effect="blur" src={imgCard6} />
            <CardText>{t("brend.innovations.img_title6")}</CardText>
          </InnovationsCard>
        </Cards>
      </Innovations>
      <Form />
    </Wrapper>
  );
}

export default Brand;
