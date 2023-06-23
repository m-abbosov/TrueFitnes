import { useState, useEffect } from "react";
import { Card, Cards, H1, Wrapper, Title, Span, CardBack } from "./style";
import img1 from "../../assets/imgs/catalog1.png";
import img2 from "../../assets/imgs/ctalog2.png";
import img3 from "../../assets/imgs/catalog3.png";
import img4 from "../../assets/imgs/catalog4.png";
import img5 from "../../assets/imgs/catalog5.png";
import img6 from "../../assets/imgs/catalog6.png";
import { useTranslation } from "react-i18next";

function Catalog() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const handleNavigate = (link) => {
    window.open(link, "_blank").focus();
  };

  useEffect(() => {
    setData([
      {
        id: Math.random(),
        img: img1,
        title: t("home.catalog.img1"),
        link: "https://prowellness.uz/categories/begovye_dorozhki",
      },
      {
        id: Math.random(),
        img: img2,
        title: t("home.catalog.img2"),
        link: "https://prowellness.uz/categories/velotrenazhery",
      },
      {
        id: Math.random(),
        img: img3,
        title: t("home.catalog.img3"),
        link: "https://prowellness.uz/categories/jellipticheskie_trenazhery",
      },
      {
        id: Math.random(),
        img: img4,
        title: t("home.catalog.img4"),
        link: "https://prowellness.uz/categories/trenazhery_dlja_funkcional_noj_trenirovki",
      },
      {
        id: Math.random(),
        img: img5,
        title: t("home.catalog.img5"),
        link: "https://prowellness.uz/categories/nagruzhaemye_diskami",
      },

      {
        id: Math.random(),
        img: img6,
        title: t("home.catalog.img6"),
        link: "https://prowellness.uz/categories/svobodnye_vesa_i_hranenie",
      },
    ]);
  }, [t]);

  return (
    <Wrapper>
      <H1 data-aos="fade-up">
        <span className="color"> {t("home.catalog.title")} </span> -{" "}
        {t("home.catalog.title_span")}
      </H1>
      <Cards>
        {data.map((item) => (
          <Card
            key={item.id}
            data-aos="zoom-in-up"
            onClick={() => handleNavigate(item.link)}
          >
            <CardBack src={item.img} al="" />
            <Title>{item.title}</Title>
            <Span></Span>
          </Card>
        ))}
      </Cards>
    </Wrapper>
  );
}

export default Catalog;
