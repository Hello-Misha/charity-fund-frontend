import React from "react";

import { useTranslation } from "react-i18next";

// import Text from "../../Text/Text";

import classes from "./Founder.module.scss";

import FounderX1 from "../../../../img/Founder-x1.png";
import FounderX2 from "../../../../img/Founder-x2.png";

function Founder() {
  const { t } = useTranslation();
  return (
    <section className={classes.section}>
      {/* <p className={`${classes.section__quote} Title`}>
        {t("homePage.founder.quote")}
      </p> */}
      <article className={classes.section__textBlock}>
        <h2 className={` ${classes.section__textBlock__title} Title`}>
          {t("homePage.founder.title")}
        </h2>
        <p
          className={` ${classes.section__textBlock__paragraph} Text DarkBlue`}
        >
          {t("homePage.founder.text")}
        </p>
      </article>

      <img
        src={FounderX1}
        srcSet={`${FounderX1} 300w, ${FounderX2} 768w`}
        alt="doctors"
        className={classes.section__img}
      />
      <span className={classes.section__circle}></span>
    </section>
  );
}

export default Founder;
