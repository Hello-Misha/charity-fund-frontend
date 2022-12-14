import React from "react";

import { useTranslation } from "react-i18next";

import classes from "./Partners.module.scss";

import SmileTrainX1 from "../../../img/SmileTrain-x1.png";
import SmileTrainX2 from "../../../img/SmileTrain-x2.png";
import BeyondWordsX1 from "../../../img/BeyondWords-x1.png";
import BeyondWordsX2 from "../../../img/BeyondWords-x2.png";

function Partners() {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      <div className={`${classes.section__partner}`}>
        <img
          src={SmileTrainX1}
          srcSet={`${SmileTrainX1} 300w, ${SmileTrainX2} 768w`}
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
          src={BeyondWordsX1}
          srcSet={`${BeyondWordsX1} 300w, ${BeyondWordsX2} 768w`}
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
