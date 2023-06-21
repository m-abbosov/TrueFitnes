import { Card, Cards, H1, Wrapper, Title, Span, CardBack } from "./style";
import img1 from "../../assets/imgs/catalog1.png";
import img2 from "../../assets/imgs/ctalog2.png";
import img3 from "../../assets/imgs/catalog3.png";
import img4 from "../../assets/imgs/catalog4.png";
import img5 from "../../assets/imgs/catalog5.png";
import img6 from "../../assets/imgs/catalog6.png";
import { useTranslation } from "react-i18next";

function Catalog() {
  const { t } = useTranslation();
  const handleNavigate = (link) => {
    window.open(link, "_blank").focus();
  };
  return (
    <Wrapper>
      <H1>
        <span className="color"> {t("home.catalog.title")} </span> -{" "}
        {t("home.catalog.title_span")}
      </H1>
      <Cards>
        <Card
          url={img1}
          onClick={() =>
            handleNavigate("https://prowellness.uz/categories/begovye_dorozhki")
          }
        >
          <CardBack src={img1} al="" />
          <Title>{t("home.catalog.img1")}</Title>
          <Span></Span>
        </Card>
        <Card
          url={img2}
          onClick={() =>
            handleNavigate("https://prowellness.uz/categories/velotrenazhery")
          }
        >
          <CardBack src={img2} al="" />
          <Title>{t("home.catalog.img2")}</Title>
          <Span></Span>
        </Card>
        <Card
          url={img3}
          onClick={() =>
            handleNavigate(
              "https://prowellness.uz/categories/jellipticheskie_trenazhery"
            )
          }
        >
          <CardBack src={img3} al="" />
          <Title>{t("home.catalog.img3")}</Title>
          <Span></Span>
        </Card>
        <Card
          onClick={() =>
            handleNavigate(
              "https://prowellness.uz/categories/trenazhery_dlja_funkcional_noj_trenirovki"
            )
          }
          url={img4}
        >
          <CardBack src={img4} al="" />
          <Title>{t("home.catalog.img4")}</Title>
          <Span></Span>
        </Card>
        <Card
          onClick={() =>
            handleNavigate(
              "https://prowellness.uz/categories/nagruzhaemye_diskami"
            )
          }
          url={img5}
        >
          <CardBack src={img5} al="" />
          <Title>{t("home.catalog.img5")}</Title>
          <Span></Span>
        </Card>
        <Card
          onClick={() =>
            handleNavigate(
              "https://prowellness.uz/categories/svobodnye_vesa_i_hranenie"
            )
          }
          url={img6}
        >
          <CardBack src={img6} al="" />
          <Title>{t("home.catalog.img6")}</Title>
          <Span></Span>
        </Card>
      </Cards>
    </Wrapper>
  );
}

export default Catalog;
