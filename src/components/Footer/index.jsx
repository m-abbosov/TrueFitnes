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
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const catalog = [
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/begovye_dorozhki",
      title: "Кардио тренажеры",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/nagruzhaemye_diskami",
      title: "Composite Strength",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/velotrenazhery",
      title: "True Stretch",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/jellipticheskie_trenazhery",
      title: "Сайклинг",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/trenazhery_dlja_funkcional_noj_trenirovki",
      title: "Групповые тренировки",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/nagruzhaemye_diskami",
      title: "Силовые тренажеры",
    },
    {
      id: Math.random(),
      link: "https://prowellness.uz/categories/svobodnye_vesa_i_hranenie",
      title: "Консоли",
    },
  ];

  return (
    <Wrapper>
      <FooterDiv height={'280px'} mobile={true}  >
        <b className="titleText">КАТАЛОГ ТОВАРОВ</b>
        <Texts>
          {catalog.map((item) => (
            <P onClick={() => window.open(item.link, "__blank")} key={item.id}>
              {item.title}
            </P>
          ))}
          <h6>© TRUE FITNESS</h6>
        </Texts>
      </FooterDiv>
      <Div height={"280px"} >
        <FooterDiv>
          <b className="titleText">ИНФОРМАЦИЯ</b>
          <Texts>
            {navbar
              .filter((_, i) => i !== 0)
              .map((item) => {
                return (
                  <P
                    onClick={() =>
                      item.path === null
                        ? window.open("https://prowellness.uz/", "__blank")
                        : navigate(`${item.path}`)
                    }
                    key={Math.random()}
                  >
                    {item.name}
                  </P>
                );
              })}
          </Texts>
        </FooterDiv>
        <FooterDiv>
          <b className="titleText">КОНТАКТЫ</b>
          <Texts>
            <P onClick={() => navigate("/contact")}>
              Политика конфиденциальности{" "}
            </P>
            <P onClick={() => navigate("/contact")}>Контакты </P>
          </Texts>
        </FooterDiv>
      </Div>
      <FooterDiv mobile={true} >
        <b className="titleText">ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</b>
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
          <a href="https://instagram.com/prowellness.uz/">
            <Instogram />
          </a>
          <a href="https://www.youtube.com/">
            <Youtube />
          </a>
        </Icons>
      </FooterDiv>
    </Wrapper>
  );
}

export default Footer;
