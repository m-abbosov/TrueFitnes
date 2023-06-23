import { Container, Div, ImgDiv, P, Span, Title, Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import img from "../../assets/imgs/BestFeatures1.png";
import img2 from "../../assets/imgs/BestFeatures2.png";

function BestFeatures() {
  const {t} = useTranslation()
  return (
    <Wrapper>
      <Container>
        <ImgDiv img={img} data-aos="fade-right">
          <Title>{t("home.best_features.img_title_1")}</Title>
          <Span></Span>
          <P>{t("home.best_features.img_text_1")}</P>
        </ImgDiv>
        <Div data-aos="fade-right">
          <Title>{t("home.best_features.bg_title_1")}</Title>
          <Span></Span>
          <P>{t("home.best_features.bg_text_1")} </P>
        </Div>
      </Container>
      <Container>
        <Div data-aos="fade-left">
          <Title>{t("home.best_features.bg_title_2")}</Title>
          <Span></Span>
          <P>{t("home.best_features.bg_text_2")} </P>
        </Div>
        <ImgDiv data-aos="fade-left" img={img2}>
          <Title>{t("home.best_features.img_title_2")}</Title>
          <Span></Span>
          <P>{t("home.best_features.img_text_2")} </P>
        </ImgDiv>
      </Container>
    </Wrapper>
  );
}

export default BestFeatures;
