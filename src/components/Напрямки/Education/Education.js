import React from "react";

import { useTranslation } from "react-i18next";

import Text from "../../Text/Text";

import classes from "./Education.module.scss";

import GirlX1 from "../../../img/Girl-x1.png";
import GirlX2 from "../../../img/Girl-x2.png";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <img
        src={GirlX1}
        srcset={`${GirlX1} 300w, ${GirlX2} 768w`}
        alt="doctors"
        className={classes.section__img}
        id="medicineImg"
      />
      <div className={classes.section__textBlock}>
        <Text
          title={t("homePage.education.title")}
          text={t("homePage.education.text")}
          btn={t("homePage.education.btn")}
        />
      </div>
      <span className={classes.section__circle}></span>
    </section>
  );
}
