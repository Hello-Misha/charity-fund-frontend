import React from "react";
import { useTranslation } from "react-i18next";

import classes from "./Support.module.scss";
import supportImage from "../../img/support.png";

function Support() {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      <img src={supportImage} alt="Support" className={classes.section__img} />

      <div className={` ${classes.section__block}`}>
        <h2 className={` ${classes.section__block__title} Title DarkBlue`}>
          {t("homePage.support.title")}
        </h2>
        <div>
          <div className={`${classes.section__block__paragraph}`}>
            <p
              className={`${classes.section__block__paragraph__p} Text DarkBlue`}
            >
              {t("homePage.support.text")}
            </p>
            <p className={`Text DarkBlue`}>{t("homePage.support.iban")}</p>
            <p className={`Text DarkBlue`}>{t("homePage.support.bank")}</p>
          </div>
          <div className="Button-blue Text-bold DarkBlue">
            {t("homePage.support.btn")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
