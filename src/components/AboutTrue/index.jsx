import { useTranslation } from "react-i18next";
import { Button, Container, H1, Span, Text, Wrapper } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

function AboutTrue({ img, button }) {
  const { t } = useTranslation();
  const navigate = useNavigate()

  return (
    <Wrapper>
      <LazyLoadImage
        alt="main"
        effect="blur"
        src={img}
        className="about-true"
      />
      <Container>
        <H1>{t("home.aboutTrue.title")}</H1>
        <Span></Span>
        <Text>{t("home.aboutTrue.text")} </Text>
        {button ? (
          <Button onClick={() => navigate("/brend")}>
            {t("home.aboutTrue.button")}
          </Button>
        ) : null}
      </Container>
    </Wrapper>
  );
}

export default AboutTrue;
