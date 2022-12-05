import React from "react";

import { useTranslation } from "react-i18next";

import Text from "../../Text/Text";

import classes from "./Medecine.module.scss";

import Doctors from "../../../img/Doctors.png";

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
        <span className={classes.section__circle}></span>
      </div>
      <img
        src={Doctors}
        alt="doctors"
        className={classes.section__img}
        id="medicineImg"
        // onClick={console.log(imgHeight)}
      />
    </section>
  );
}
