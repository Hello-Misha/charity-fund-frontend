import React from "react";

import { useTranslation } from "react-i18next";

import classes from "./Main.module.scss";

import logo from "../../img/Ukrainian-Project.png";

function Main() {
  const { t } = useTranslation();
  return (
    <section className={classes.main}>
      <img src={logo} alt="Logo" />
      <h1 className="Title DarkBlue">{t("homePage.main.title")}</h1>
      <p className="Text DarkBlue">{t("homePage.main.text")}</p>
    </section>
  );
}

export default Main;
