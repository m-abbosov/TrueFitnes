import {
  About,
  AboutContainer,
  Card,
  CardText,
  Cards,
  H1,
  History,
  Img,
  ImgDiv,
  Innovations,
  InnovationsCard,
  InnovationsImg,
  InnovationsTitle,
  P,
  Text,
  TrueSports,
  Wrapper,
  Years,
  Line
} from "./style";
import { ClubText, Title, TitleContainer } from "../OpenClub/style";
import AboutTrue from "../AboutTrue";
import about from "../../assets/imgs/brandAbout.png";
import img from "../../assets/imgs/brend-about-footer.png";
import imgCard1 from "../../assets/imgs/innovationsCard1.png";
import imgCard2 from "../../assets/imgs/innovationsCard2.png";
import imgCard3 from "../../assets/imgs/innovationsCard3.png";
import imgCard4 from "../../assets/imgs/innovationsCard4.png";
import imgCard5 from "../../assets/imgs/innovationsCard5.png";
import imgCard6 from "../../assets/imgs/innovationsCard6.png";
import Form from "../Form";
import { useTranslation } from "react-i18next";


function Brand() {
  const { t } = useTranslation();

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
          <b>1973</b>
          <b>1983</b>
          <b>1993</b>
          <b>1999</b>
          <b>2000</b>
          <b>2000</b>
          <b>2007</b>
          <b>2008</b>
          <b>2009</b>
          <b>2015</b>
          <b>2017</b>
          <b>2020</b>
          <b>2023</b>
        </Years>
        <ImgDiv>
          <Img src={img} />
          <TrueSports>
            <H1>{t("brend.about_container.trueSports_title")}</H1>
            <P>{t("brend.about_container.trueSports_text")}</P>
          </TrueSports>
        </ImgDiv>
      </AboutContainer>
      <Innovations>
        <InnovationsTitle>{t("brend.innovations.title")}</InnovationsTitle>
        <Cards>
          <InnovationsCard>
            <InnovationsImg src={imgCard1} />
            <CardText>{t("brend.innovations.img_title1")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard2} />
            <CardText>{t("brend.innovations.img_title2")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard3} />
            <CardText>{t("brend.innovations.img_title3")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard4} />
            <CardText>{t("brend.innovations.img_title4")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard5} />
            <CardText>{t("brend.innovations.img_title5")}</CardText>
          </InnovationsCard>
          <InnovationsCard>
            <InnovationsImg src={imgCard6} />
            <CardText>{t("brend.innovations.img_title6")}</CardText>
          </InnovationsCard>
        </Cards>
      </Innovations>
      <Form />
    </Wrapper>
  );
}

export default Brand;
