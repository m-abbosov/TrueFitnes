import { useState } from "react";
import { useTranslation } from "react-i18next";
import cookie from "js-cookie";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
  DropDown,
  InnovationCarousel,
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

function Brand() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const currentLenguageCode = cookie.get("i18next") || "uz";
  const years = [
    {
      id: Math.random(),
      year: 1973,
      img: "https://static.tildacdn.com/tild3934-6565-4730-a465-346464643935/TRU_gold_side_1983.png",
      title: "TRUE Sports разрабатывает свою первую беговую дорожку",
      titleUz:
        "TRUE Sports o'zining birinchi yugurish yo'lakchasini ishlab chiqadi",
      text: "Компания True Sports основанная Frank Trulaske в 1972 году, разрабатывает свою первую беговую дорожку, являясь одним из пионеров в создании беговых дорожек в мире. Примененные технологии повлияли на развитии фитнес индустрии.",
      textUz:
        "1972 yilda Frank Trulaske tomonidan asos solingan True Sports o'zining birinchi yugurish yo'lakchasini ishlab chiqadi va dunyodagi treadmill dizayni bo'yicha kashshoflardan biridir. Amaldagi texnologiyalar fitnes sanoatining rivojlanishiga ta'sir ko'rsatdi.",
    },
    {
      id: Math.random(),
      year: 1981,
      img: "https://static.tildacdn.com/tild3236-3232-4432-b963-386161633130/true_fitness_2.png",
      title: "Ребрендинг TRUE Sports в TRUE Fitness Technologies.",
      titleUz: "TRUE Sports-ni TRUE Fitness Technologies-ga rebrending qilish.",
      text: "В 1981 году компания производит ребрендинг TRUE Sports в TRUE Fitness Technologies.",
      textUz:
        "1981 yilda kompaniya TRUE Sports-ni TRUE Fitness Technologies sifatida rebrending qildi.",
    },
    {
      id: Math.random(),
      year: 1987,
      img: "https://static.tildacdn.com/tild6638-6663-4331-b063-363837393663/removable_key2.jpg",
      title: "Разработка съемного ключа безопасности",
      titleUz: "Olinadigan xavfsizlik kalitini ishlab chiqish",
      text: "TRUE впервые разрабатывает и внедряет съемный ключ безопасности, ставший обязательным атрибутом всех современных беговых дорожек. Сегодня эта технология является настолько широко используемой.",
      textUz:
        "TRUE kompaniyasi birinchi bo'lib olinadigan xavfsizlik kalitini ishlab chiqdi va joriy qildi, bu barcha zamonaviy yugurish yo'laklari uchun zarur bo'lgan. Bugungi kunda ushbu texnologiya juda keng qo'llaniladi.",
    },
    {
      id: Math.random(),
      year: 1988,
      img: "https://static.tildacdn.com/tild3865-6130-4733-b566-343433396464/1988-900-Series-e154.png",
      title: "Выход в премиальный сегмент",
      titleUz: "Premium segmentga kirish",
      text: "TRUE запускает ТОП линейку кардиотренажеров 900 серии и выходит в премиальный сегмент, предлагая самые совершенные технологии с потрясающей производительностью. С этого момента имя TRUE ассоциируется с качеством и передовыми технологиями.",
      textUz:
        "TRUE 900 seriyali kardio jihozlarining yuqori qatorini ishga tushiradi va ajoyib ishlashi bilan eng ilg'or texnologiyani taklif qilib, premium segmentga kiradi. O'shandan beri TRUE nomi sifat va ilg'or texnologiyalarning sinonimi bo'lib kelgan.",
    },
    {
      id: Math.random(),
      year: 1990,
      img: "https://static.tildacdn.com/tild3538-3365-4462-b835-616563386464/1990-OFallon-Warehou.png",
      title: "Расширение производственных мощностей",
      text: "Офис и производство компании перемещается в действующую штаб-квартиру, значительно расширив производственные мощности для обеспечения стремительного роста компании.",
      titleUz: "Ishlab chiqarish quvvatlarini kengaytirish",
      textUz:
        "Kompaniyaning tez o'sishini ta'minlash uchun ishlab chiqarish quvvatlarini sezilarli darajada kengaytirib, kompaniyaning ofisi va ishlab chiqarishi joriy shtab-kvartiraga ko'chirildi.",
    },
    {
      id: Math.random(),
      year: 1992,
      img: "https://static.tildacdn.com/tild6430-3832-4431-b662-386631366134/soft_system.jpg",
      title: "TRUE первой внедряет амортизацию бегового полотна",
      text: "В 1992 г. компания TRUE впервые представляет запатентованную технологию амортизации бегового полотна Soft System®, которая снижает ударную нагрузку на суставы, делая тренировку на беговой дорожке максимально безопасными.",
      titleUz: "HAQIQIY kashshoflar yugurish kamarining tamponlanishi",
      textUz:
        "1992 yilda TRUE birinchi patentlangan Soft System® yugurish kamarini yostiqlash texnologiyasini taqdim etdi, bu esa bo'g'inlarga ta'sirni kamaytiradi va treadmill mashg'ulotlarini iloji boricha xavfsiz qiladi.",
    },
    {
      id: Math.random(),
      year: 1994,
      img: "https://static.tildacdn.com/tild3661-3839-4161-b132-363864316566/orthopedic_belt.jpg",
      title: "Разработка и внедрение ортопедического бегового полотна",
      text: "TRUE впервые разрабатывает и внедряет ортопедическое беговое полотно для лучшей амортизации и обеспечения высокой безопасности тренировки.",
      titleUz: "Ortopedik yugurish kamarini ishlab chiqish va amalga oshirish",
      textUz:
        "TRUE kompaniyasi birinchi bo'lib ortopedik yugurish kamarini yaxshiroq yostiqlash va xavfsizroq mashq qilish uchun ishlab chiqdi va joriy qildi.",
    },
    {
      id: Math.random(),
      year: 1996,
      img: "https://static.tildacdn.com/tild6531-3132-4630-b531-333235383236/PS100E-2-1000x833.jpg",
      title:
        "Разработка и внедрение функции контроля частоты сердечных сокращений",
      text: "TRUE представляет запатентованную технологию контроля частоты сердечных сокращений HRC Heart Rate Control®",
      titleUz:
        "Yurak tezligini nazorat qilish funktsiyasini ishlab chiqish va amalga oshirish",
      textUz:
        "TRUE patentlangan HRC Heart Rate Control® texnologiyasini taqdim etadi",
    },
    {
      id: Math.random(),
      year: 1998,
      img: "https://static.tildacdn.com/tild3064-6630-4564-a564-653064363638/soft-select.jpg",
      title: "Разработка технологии регулировки амортизации Soft Select®",
      text: "TRUE внедряет запатентованную технологии регулировки амортизации беговой деки Patented Soft Select®",
      titleUz: "Soft Select® dampingni sozlash texnologiyasini ishlab chiqish",
      textUz:
        "TRUE patentlangan Soft Select® yugurish palubasi zarbani yutishni sozlash texnologiyasini taqdim etadi",
    },
    {
      id: Math.random(),
      year: 2002,
      img: "https://static.tildacdn.com/tild3764-6633-4337-a339-356130646439/TrueStretch_Golf_2.png",
      title: "Разработка Рамы для стрейтчинга TRUE Stretch",
      text: "TRUE удалось разработать уникальную раму для стрейтчинга, особенностью которой является простота и функциональность, и которая не имеет аналогов по своим функциональным возможностям.",
      titleUz: "Stretch Frame Development TRUE Stretch",
      textUz:
        "TRUE soddaligi va funksionalligi bilan ajralib turadigan va o‘zining funksionalligi bo‘yicha tengi yo‘q noyob cho‘zuvchi ramkani ishlab chiqishga muvaffaq bo‘ldi.",
    },
    {
      id: Math.random(),
      year: 2007,
      img: "https://static.tildacdn.com/tild3863-3033-4432-a166-306231653136/cruise_control.jpg",
      title: "Запатентованная технология HRC Cruise Control®",
      text: "TRUE разрабатывает и внедряет запатентованную технологию регулировки нагрузки для поддержания пульса HRC Cruise Control®.",
      titleUz: "Patentlangan HRC Cruise Control® texnologiyasi",
      textUz:
        "TRUE HRC Cruise Control® patentlangan yukni sozlash yurak urish tezligini nazorat qilish texnologiyasini ishlab chiqadi va amalga oshiradi.",
    },
    {
      id: Math.random(),
      year: 2015,
      img: "https://static.tildacdn.com/tild3335-3263-4433-b731-626538613332/Paramount-fitness.jpg",
      title: "Приобретение компании Paramount",
      text: "TRUE покупает компанию Paramount, значительно расширив свою линейку силовых тренажеров и усиливает свои позиции как безоговорочного лидера рынка.",
      titleUz: "Paramount kompaniyasini sotib olish",
      textUz:
        "TRUE Paramount kompaniyasini sotib oladi, bu o'zining kuch-quvvat mashqlari uskunalari qatorini sezilarli darajada kengaytiradi va bozorning so'zsiz yetakchisi sifatidagi mavqeini mustahkamlaydi.",
    },
    {
      id: Math.random(),
      year: 2016,
      img: "https://static.tildacdn.com/tild3865-3263-4764-b962-633432376534/Alpine_Runner.png",
      title: "Разработка инновационного тренажера Aline Runner Incline Trainer",
      text: "Разработка инновационного тренажера для интервальных тренировок с наклоном Alpine Runner Incline Trainer",
      titleUz:
        "Innovatsion Aline Runner Incline Trainer dasturini ishlab chiqish",
      textUz: "Innovatsion Alpine Runner Incline Trenerining ishlab chiqilishi",
    },
  ];

  return (
    <Wrapper>
      <TitleContainer height="225px">
        <ClubText data-aos="fade-up">{t("brend.blue_fon.text")}</ClubText>
        <Title data-aos="fade-right">{t("brend.blue_fon.title1")}</Title>
        <Title data-aos="fade-left"> {t("brend.blue_fon.title2")}</Title>
      </TitleContainer>
      <About>
        <Card>
          <Text data-aos="fade-up">{t("brend.about.text1")} </Text>
          <Text data-aos="fade-up" color="black">
            {t("brend.about.text2")}{" "}
          </Text>
          <Text data-aos="fade-up" color="black">
            {t("brend.about.text3")}
          </Text>
          <Text data-aos="fade-up">{t("brend.about.text4")}</Text>
        </Card>
      </About>
      <AboutContainer>
        <AboutTrue img={about} button={false} mobile={"yes"} />
        <History>
          <H1 data-aos="fade-up">{t("brend.about_container.title1")}</H1>
          <H1 data-aos="fade-left" color="black">
            {t("brend.about_container.title2")}
          </H1>
          <Line data-aos="fade-right" />
          <P data-aos="fade-up">{t("brend.about_container.text1")}</P>
          <P data-aos="fade-up">{t("brend.about_container.text2")}</P>
        </History>
        <Years>
          {years.map((year, i) => {
            return (
              <div
                onClick={() => setActive(i)}
                key={year.id}
                className={i === active ? "year active" : "year"}
                data-aos="fade-up"
              >
                <span></span>
                <b>{year.year}</b>
              </div>
            );
          })}
        </Years>
        <ImgDiv>
          <DropDown>
            <DropDown.Top>
              <b>{years[active].year}</b>
              <DropDown.Icon onClick={() => setDropdown((prev) => !prev)} />
            </DropDown.Top>
            <DropDown.Line />

            <DropDown.Menu active={dropdown}>
              {years.map((year, i) => {
                return (
                  <div
                    onClick={() => {
                      setActive(i);
                      setDropdown(false);
                    }}
                    key={year.id}
                    className={
                      i === active ? "year-mobile active" : "year-mobile"
                    }
                  >
                    <b>{year.year}</b>
                  </div>
                );
              })}
            </DropDown.Menu>
          </DropDown>
          <H1 className="mobile">
            {currentLenguageCode === "uz"
              ? years[active].titleUz
              : years[active].title}
          </H1>
          <LazyLoadImage
            alt={years[active].title}
            effect="blur"
            src={years[active].img}
            className="year-img"
            data-aos="fade-right"
          />
          <TrueSports>
            <H1 data-aos="fade-left" mobile="yes">
              {currentLenguageCode === "uz"
                ? years[active].titleUz
                : years[active].title}
            </H1>
            <P data-aos="fade-left">
              {currentLenguageCode === "uz"
                ? years[active].textUz
                : years[active].text}
            </P>
          </TrueSports>
        </ImgDiv>
      </AboutContainer>
      <Innovations>
        <InnovationsTitle data-aos="fade-up">
          {t("brend.innovations.title")}
        </InnovationsTitle>
        <Cards>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard1} />
            <CardText>{t("brend.innovations.img_title1")}</CardText>
          </InnovationsCard>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard2} />
            <CardText>{t("brend.innovations.img_title2")}</CardText>
          </InnovationsCard>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard3} />
            <CardText>{t("brend.innovations.img_title3")}</CardText>
          </InnovationsCard>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard4} />
            <CardText>{t("brend.innovations.img_title4")}</CardText>
          </InnovationsCard>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard5} />
            <CardText>{t("brend.innovations.img_title5")}</CardText>
          </InnovationsCard>
          <InnovationsCard data-aos="flip-up">
            <LazyLoadImage alt="main" effect="blur" src={imgCard6} />
            <CardText>{t("brend.innovations.img_title6")}</CardText>
          </InnovationsCard>
        </Cards>
      </Innovations>
      <InnovationCarousel>
        <InnovationsTitle>{t("brend.innovations.title")}</InnovationsTitle>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
              className="contact-carousel-button_bottom active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className="contact-carousel-button_bottom"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className="contact-carousel-button_bottom"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              className="contact-carousel-button_bottom"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              className="contact-carousel-button_bottom"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide-to="5"
              aria-label="Slide 6"
              className="contact-carousel-button_bottom"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard1} />
                <CardText>{t("brend.innovations.img_title1")}</CardText>
              </InnovationsCard>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard2} />
                <CardText>{t("brend.innovations.img_title2")}</CardText>
              </InnovationsCard>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard3} />
                <CardText>{t("brend.innovations.img_title3")}</CardText>
              </InnovationsCard>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard4} />
                <CardText>{t("brend.innovations.img_title4")}</CardText>
              </InnovationsCard>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard5} />
                <CardText>{t("brend.innovations.img_title5")}</CardText>
              </InnovationsCard>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <InnovationsCard>
                <LazyLoadImage alt="main" effect="blur" src={imgCard6} />
                <CardText>{t("brend.innovations.img_title6")}</CardText>
              </InnovationsCard>
            </div>
          </div>
        </div>
      </InnovationCarousel>
      <Form />
    </Wrapper>
  );
}

export default Brand;
