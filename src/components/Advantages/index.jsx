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

function Advantages() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TitleContainer height="315px">
        <ClubText>{t("advantages.blue_fon.yellow_title")}</ClubText>
        <Title>{t("advantages.blue_fon.title")}</Title>
        <P className="m-0 mt-5">{t("advantages.blue_fon.text")} </P>
      </TitleContainer>
      <Cards>
        <Card>
          <Img src={img} />
          <H1>{t("advantages.cards.title")} </H1>
          <Text>{t("advantages.cards.text")}</Text>
        </Card>
        <Card>
          <Img src={img2} />
          <H1>{t("advantages.cards.title2")} </H1>
          <Text>{t("advantages.cards.text2")}</Text>
        </Card>
        <Card>
          <Img src={img3} />
          <H1>{t("advantages.cards.title3")} </H1>
          <Text>{t("advantages.cards.text3")}</Text>
        </Card>
        <Card>
          <Img src={img4} />
          <H1>{t("advantages.cards.title4")} </H1>
          <Text>{t("advantages.cards.text4")}</Text>
        </Card>
        <Card>
          <Img src={img5} />
          <H1>{t("advantages.cards.title5")} </H1>
          <Text>{t("advantages.cards.text5")}</Text>
        </Card>
        <Card>
          <Img src={img6} />
          <H1>{t("advantages.cards.title6")} </H1>
          <Text>{t("advantages.cards.text6")}</Text>
        </Card>
        <Card>
          <Img src={img7} />
          <H1>{t("advantages.cards.title7")} </H1>
          <Text>{t("advantages.cards.text7")}</Text>
        </Card>
        <Card>
          <Img src={img8} />
          <H1>{t("advantages.cards.title8")} </H1>
          <Text>{t("advantages.cards.text8")}</Text>
        </Card>
      </Cards>
      <Box>
        <Button className="top-btn">
          TOP 5
        </Button>
        <Titlee>{t("advantages.title")} </Titlee>
      </Box>
      <Form />
    </Wrapper>
  );
}

export default Advantages;
