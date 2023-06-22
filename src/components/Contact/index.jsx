import { MapVsContact, Wrapper, ContactDiv, H1, P, Link } from "./style";
import { ClubText, Title, TitleContainer } from "../OpenClub/style";
import MyCarousel from "../ContacCarousel";
import { useTranslation } from "react-i18next";
import Form from "../Form";
function Contact() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TitleContainer height="290px">
        <ClubText>{t("contact.blue_fon.yellow_title")}</ClubText>
        <Title size="lg">{t("contact.blue_fon.title")}</Title>
        <Title size="27px">{t("contact.blue_fon.text")}</Title>
      </TitleContainer>
      <MyCarousel />
      <MapVsContact>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.6325807870285!2d69.2406703154236!3d41.31685597927068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE5JzAwLjciTiA2OcKwMTQnMzQuMyJF!5e0!3m2!1sen!2s!4v1687164721163!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={Math.random()}
          className="map"
        />
        <ContactDiv>
          <H1>{t("contact.map_data.title")}</H1>
          <Link href="tel:+998906066666" color="black">
            +998 (90)-606-66-66
          </Link>
          <Link href="mailto:info@prowellness.uz">INFO@PROWELLNESS.UZ</Link>
          <P color="black">{t("contact.map_data.text")}</P>
          <P>{t("contact.map_data.time")}</P>
          <P>{t("contact.map_data.time2")}</P>
        </ContactDiv>
      </MapVsContact>
      <Form />
    </Wrapper>
  );
}

export default Contact;
