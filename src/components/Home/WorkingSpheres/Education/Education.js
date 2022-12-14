import React from "react";

import { useTranslation } from "react-i18next";

// import { HashLink as Link } from "react-router-hash-link";

import Text from "../../../Techelements/HomePageText/HomePageText";

import classes from "./Education.module.scss";

import GirlX1 from "../../../../img/Girl-x1.png";
import GirlX2 from "../../../../img/Girl-x2.png";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <div className={classes.section__textBlock}>
        <Text
          title={t("homePage.education.title")}
          text={t("homePage.education.text")}
          link="/education"
          btn={t("homePage.education.btn")}
        />
      </div>
      <span className={classes.section__circle}></span>
      <img
        src={GirlX1}
        srcSet={`${GirlX1} 300w, ${GirlX2} 768w`}
        alt="doctors"
        className={classes.section__img}
        id="medicineImg"
      />
    </section>
  );
}
