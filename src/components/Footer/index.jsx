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
import { useTranslation } from 'react-i18next';
const uzb = [
  '',
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
  const catalog = [
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/begovye_dorozhki",
      title: "Кардио тренажеры",
      uz: "Kardiyo mashinalari",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/nagruzhaemye_diskami",
      title: "Composite Strength",
      uz: "Composite Strength",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/velotrenazhery",
      title: "True Stretch",
      uz: "True Stretch",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/jellipticheskie_trenazhery",
      title: "Сайклинг",
      uz: "Saikling",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/trenazhery_dlja_funkcional_noj_trenirovki",
      title: "Групповые тренировки",
      uz: "Guruh mashg'ulotlari",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/trenazhery_so_stekami",
      title: "Силовые тренажеры",
      uz: "Og'irlik mashinalari",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/svobodnye_vesa_i_hranenie",
      title: "Консоли",
      uz: "Konsollar",
    },
  ];

  return (
    <Wrapper>
      <FooterDiv>
        <b className="titleText">{t("footer.title1")}</b>
        <Texts>
          {catalog.map((item) => (
            <P onClick={() => window.open(item.link, "__blank")} key={item.id}>
              {currentLenguageCode === "uz" ? item.uz : item.title}
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
