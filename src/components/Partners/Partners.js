import React from "react";

import { useTranslation } from "react-i18next";

import classes from "./Partners.module.scss";

import SmileTrain from "../../img/SmileTrain.png";
import BeyondWords from "../../img/BeyondWords.jpg";

function Partners() {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      <div className={`${classes.section__partner}`}>
        {/* <div> */}
        <img
          src={SmileTrain}
          alt="SmileTrain logo"
          className={`${classes.section__partner__img}`}
        />
        {/* </div> */}
        <p className={`Text White ${classes.section__partner__text} right`}>
          {t("homePage.partners.partner_1")}
        </p>
      </div>
      <span
        className={`${classes.section__circle} ${classes.section__CirclePosition_1}`}
      ></span>
      <div className={`${classes.section__partner}`}>
        <p className={`Text White ${classes.section__partner__text} left`}>
          {t("homePage.partners.partner_2")}
        </p>
        {/* <div> */}
        <img
          src={BeyondWords}
          alt="BeyondWords logo"
          className={`${classes.section__partner__img}`}
        />
        {/* </div> */}
      </div>
      <span
        className={`${classes.section__circle} ${classes.section__CirclePosition_2}`}
      ></span>
    </section>
  );
}

export default Partners;
