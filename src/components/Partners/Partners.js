import React from "react";

import { useTranslation } from "react-i18next";

import classes from "./Partners.module.scss";

import SmileTrain from "../../img/SmileTrain.png";
import BeyondWords from "../../img/BeyondWords.png";

function Partners() {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      <div className={`${classes.section__partner}`}>
        <img
          src={SmileTrain}
          alt="SmileTrain logo"
          className={`${classes.section__partner__img}`}
        />

        <p className={`Text White ${classes.section__partner__text} right`}>
          {t("homePage.partners.partner_1")}
        </p>
        <span
          className={`${classes.section__circle} ${classes.section__CirclePosition_1}`}
        ></span>
      </div>

      <div className={`${classes.section__partner}`}>
        <p className={`Text White ${classes.section__partner__text} left`}>
          {t("homePage.partners.partner_2")}
        </p>

        <img
          src={BeyondWords}
          alt="BeyondWords logo"
          className={`${classes.section__partner__img}`}
        />
        <span
          className={`${classes.section__circle} ${classes.section__CirclePosition_2}`}
        ></span>
      </div>
    </section>
  );
}

export default Partners;
