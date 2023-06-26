import { Card, Cards, Img, P, TextCotainer, Title, Wrapper } from "./style";
import img from "../../assets/imgs/weOfferImg.png";
import { useTranslation } from "react-i18next";

import { ReactComponent as Naushnik } from "../../assets/icons/naushniks.svg";
import Setting from "../../assets/icons/setting.PNG";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import BurchakIcon from "../../assets/icons/6burchak.png";
import { ReactComponent as Car } from "../../assets/icons/car.svg";
import { ReactComponent as Settings } from "../../assets/icons/Settings.svg";

function WeOffer() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="mobile"></div>
      <TextCotainer>
        <h1 className="title" style={{ color: "#01AEE7" }}>
          {t("home.we_offer.title")}
        </h1>
        <Cards>
          <Card data-aos="flip-up">
            <Naushnik />
            <Title>{t("home.we_offer.icon1_title")}</Title>
            <P>{t("home.we_offer.icon1_text")}</P>
          </Card>
          <Card data-aos="flip-up">
            <img src={Setting} className="icon" alt="" />
            <Title>{t("home.we_offer.icon2_title")}</Title>
            <P>{t("home.we_offer.icon2_text")}</P>
          </Card>
          <Card data-aos="flip-up">
            <img src={BurchakIcon} className="icon" alt="" />
            <Title>{t("home.we_offer.icon3_title")}</Title>
            <P>{t("home.we_offer.icon3_text")}</P>
          </Card>
          <Card data-aos="flip-up">
            <Home />
            <Title>{t("home.we_offer.icon4_title")}</Title>
            <P>{t("home.we_offer.icon4_text")}</P>
          </Card>
          <Card data-aos="flip-up">
            <Settings />

            <Title>{t("home.we_offer.icon5_title")}</Title>
            <P>{t("home.we_offer.icon5_text")}</P>
          </Card>
          <Card data-aos="flip-up">
            <Car />
            <Title>{t("home.we_offer.icon6_title")}</Title>
            <P>{t("home.we_offer.icon6_text")}</P>
          </Card>
        </Cards>
      </TextCotainer>
      <Img data-aos="fade-left" src={img} alert="weOffer" />
    </Wrapper>
  );
}

export default WeOffer;
