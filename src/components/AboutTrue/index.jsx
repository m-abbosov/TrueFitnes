import { useTranslation } from "react-i18next";
import { Button, Container, H1, IMG, Span, Text, Wrapper } from "./style";

function AboutTrue({ img, button }) {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <IMG src={img} />
      <Container>
        <H1>{t("home.aboutTrue.title")}</H1>
        <Span></Span>
        <Text>{t("home.aboutTrue.text")} </Text>
        {button ? (
          <Button onClick={() => window.open("https://prowellness.uz/")}>
            {t("home.aboutTrue.button")}
          </Button>
        ) : null}
      </Container>
    </Wrapper>
  );
}

export default AboutTrue;
