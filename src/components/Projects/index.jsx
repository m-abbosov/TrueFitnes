import React from "react";
import { Wrapper } from "./index.js";
import { useTranslation } from "react-i18next";
import Project1 from "../../assets/imgs/Homi2.png";
import Project2 from "../../assets/imgs/Homi1.png";

const Projetcs = () => {
  const { t } = useTranslation();
  const data = [Project1, Project2];
  return (
    <Wrapper>
      <h2 data-aos="fade-up">{t("home.projectTitle")}</h2>
      <ul>
        {data.map((item) => (
          <li data-aos="flip-up" key={Math.random()}>
            <img src={item} alt="" />
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Projetcs;
