import { useTranslation } from "react-i18next";
import { Button, Container, H1, Span, Text, Wrapper } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

function AboutTrue({ img, button }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LazyLoadImage
        alt="main"
        effect="blur"
        src={img}
        className="about-true"
        data-aos="zoom-in-right"
      />
      <Container data-aos="zoom-in-left">
        <H1 data-aos="fade-up">{t("home.aboutTrue.title")}</H1>
        <Span data-aos="fade-up"></Span>
        <Text data-aos="flip-up">{t("home.aboutTrue.text")} </Text>
        {button ? (
          <Button data-aos="fade-down" onClick={() => navigate("/brend")}>
            {t("home.aboutTrue.button")}
          </Button>
        ) : null}
      </Container>
    </Wrapper>
  );
}

export default AboutTrue;
