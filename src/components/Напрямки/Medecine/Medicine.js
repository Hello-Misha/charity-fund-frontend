import React, { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

import Text from "../../Text/Text";

import classes from "./Medecine.module.scss";

import Doctors from "../../../img/Doctors.png";

export default function Medecine() {
  const imgElement = useRef(null);

  useEffect(() => {
    let imgElement = document.getElementById("medicineImg");
    console.log(imgElement.offsetHeight);
  });

  const { t } = useTranslation();

  return (
    <section className={classes.section}>
      <div className={classes.section__textBlock}>
        <Text
          imgHeight={imgElement.offsetHeight}
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
