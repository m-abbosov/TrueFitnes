import {
  Card,
  Cards,
  Icon,
  Img,
  P,
  TextCotainer,
  Title,
  Wrapper,
} from "./style";
import img from "../../assets/imgs/weOfferImg.png";
import { useTranslation } from "react-i18next";

function WeOffer() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TextCotainer>
        <h1 className="title" style={{ color: "#01AEE7" }}>
          {t("home.we_offer.title")}
        </h1>
        <Cards>
          <Card>
            <Icon.Naushnik></Icon.Naushnik>
            <Title>{t("home.we_offer.icon1_title")}</Title>
            <P>{t("home.we_offer.icon1_text")}</P>
          </Card>
          <Card>
            <Icon.You></Icon.You>
            <Title>{t("home.we_offer.icon2_title")}</Title>
            <P>{t("home.we_offer.icon2_text")}</P>
          </Card>
          <Card>
            <Icon.Burchak></Icon.Burchak>
            <Title>{t("home.we_offer.icon3_title")}</Title>
            <P>{t("home.we_offer.icon3_text")}</P>
          </Card>
          <Card>
            <Icon.Home></Icon.Home>
            <Title>{t("home.we_offer.icon4_title")}</Title>
            <P>{t("home.we_offer.icon4_text")}</P>
          </Card>
          <Card>
            <Icon.Setting></Icon.Setting>
            <Title>{t("home.we_offer.icon5_title")}</Title>
            <P>{t("home.we_offer.icon5_text")}</P>
          </Card>
          <Card>
            <Icon.Car></Icon.Car>
            <Title>{t("home.we_offer.icon6_title")}</Title>
            <P>{t("home.we_offer.icon6_text")}</P>
          </Card>
        </Cards>
      </TextCotainer>
      <Img src={img} alert="weOffer" />
    </Wrapper>
  );
}

export default WeOffer;
