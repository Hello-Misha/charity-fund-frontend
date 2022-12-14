import React from "react";

import { useTranslation } from "react-i18next";

import Text from "../../../Techelements/HomePageText/HomePageText";

import classes from "./Medecine.module.scss";

import DoctorsX1 from "../../../../img/Doctors-x1.png";
import DoctorsX2 from "../../../../img/Doctors-x2.png";

export default function Medecine() {
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <div className={classes.section__textBlock}>
        <Text
          title={t("homePage.medecine.title")}
          text={t("homePage.medecine.text")}
          btn={t("homePage.medecine.btn")}
        />
      </div>
      <img
        src={DoctorsX1}
        srcSet={`${DoctorsX1} 300w, ${DoctorsX2} 768w`}
        alt="doctors"
        className={classes.section__img}
      />
      <span className={classes.section__circle}></span>
    </section>
  );
}
