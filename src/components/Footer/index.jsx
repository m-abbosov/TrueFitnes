import { useState, useEffect } from "react";
import {
  Button,
  Div,
  Facebook,
  FooterDiv,
  Icons,
  Input,
  Instogram,
  P,
  Send,
  SentEmail,
  Texts,
  Wrapper,
  Youtube,
} from "./style";
import { navbar } from "../../utils/navbar.js";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const uzb = [
  "",
  "Brend Haqida",
  "MAHSULOTLAR",
  "Afzalliklari",
  "Klub ochish",
  "Kontaktlar",
];

function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentLenguageCode = cookie.get("i18next") || "uz";
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: Math.random(),
        title: t("home.catalog.img1"),
        link: "https://prowellness.uz/categories/begovye_dorozhki",
      },
      {
        id: Math.random(),
        title: t("home.catalog.img2"),
        link: "https://prowellness.uz/categories/velotrenazhery",
      },
      {
        id: Math.random(),
        title: t("home.catalog.img3"),
        link: "https://prowellness.uz/categories/jellipticheskie_trenazhery",
      },
      {
        id: Math.random(),
        title: t("home.catalog.img4"),
        link: "https://prowellness.uz/categories/trenazhery_dlja_funkcional_noj_trenirovki",
      },
      {
        id: Math.random(),
        title: t("home.catalog.img5"),
        link: "https://prowellness.uz/categories/nagruzhaemye_diskami",
      },

      {
        id: Math.random(),
        title: t("home.catalog.img6"),
        link: "https://prowellness.uz/categories/svobodnye_vesa_i_hranenie",
      },
    ]);
  }, [t]);

  return (
    <Wrapper>
      <FooterDiv>
        <b className="titleText">{t("footer.title1")}</b>
        <Texts>
          {data.map((item) => (
            <P onClick={() => window.open(item.link, "__blank")} key={item.id}>
              {item.title}
            </P>
          ))}
          <h6>© TRUE FITNESS</h6>
        </Texts>
      </FooterDiv>
      <Div>
        <FooterDiv>
          <b className="titleText">{t("footer.title2")}</b>
          <Texts>
            {navbar
              .filter((_, i) => i !== 0)
              .map((item, index) => {
                return (
                  <P
                    onClick={() =>
                      item.path === null
                        ? window.open("https://prowellness.uz/", "__blank")
                        : navigate(`${item.path}`)
                    }
                    key={Math.random()}
                  >
                    {currentLenguageCode === "uz" ? uzb[index] : item.name}
                  </P>
                );
              })}
          </Texts>
        </FooterDiv>
        <FooterDiv>
          <b className="titleText">{t("footer.title3")}</b>
          <Texts>
            <P onClick={() => navigate("/contact")}>{t("footer.kontakt1")}</P>
            <P onClick={() => navigate("/contact")}>{t("footer.kontakt2")} </P>
          </Texts>
        </FooterDiv>
      </Div>
      <FooterDiv>
        <b className="titleText">{t("footer.title4")}</b>
        <SentEmail>
          <Input placeholder="E - MAIL" />
          <Button>
            <Send type="submit" />
          </Button>
        </SentEmail>
        <Icons>
          <a href="https://m.facebook.com/prowellness.uz/">
            <Facebook />
          </a>
          <a href="https://www.instagram.com/truefitness.uz/?igshid=Y2IzZGU1MTFhOQ%3D%3D">
            <Instogram />
          </a>
          <a href="https://www.youtube.com/@truefitnesstech">
            <Youtube />
          </a>
        </Icons>
      </FooterDiv>
    </Wrapper>
  );
}

export default Footer;
