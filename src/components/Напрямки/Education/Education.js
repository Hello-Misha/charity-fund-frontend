import React from "react";

import { useTranslation } from "react-i18next";

import Text from "../../Text/Text";

import classes from "./Education.module.scss";

import Girl from "../../../img/Girl.png";

export default function Education() {
  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <img
        src={Girl}
        alt="doctors"
        className={classes.section__img}
        id="medicineImg"
        // onClick={console.log(imgHeight)}
      />
      <div className={classes.section__textBlock}>
        <Text
          title={t("homePage.medecine.title")}
          text={t("homePage.medecine.text")}
          btn={t("homePage.medecine.btn")}
        />
      </div>
      <span className={classes.section__circle}></span>
    </section>
  );
}
