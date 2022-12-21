import React from "react";
import classes from "./ExpandedPageComponent.module.scss";
import { useTranslation } from "react-i18next";

import ElementComponent from "./Element/ElementComponent";

function ExpandedPageComponent(props) {
  const { t } = useTranslation();

  const aboutArr = t(`homePage.${props.page}.about`, {
    returnObjects: true,
  });

  return (
    <main>
      <section className={classes.section}>
        <h2 className={`Title DarkBlue`}>
          {t("homePage.education.aboutTitle")}
        </h2>
        <div className={classes.section__container}>
          {/* ELEMENT START*/}
          {aboutArr.map((elem, index) => {
            return (
              <ElementComponent
                img={props.img[index]}
                title={elem.title}
                href={`#`}
                linkText={elem.linkText}
              />
            );
          })}
          {/* ELEMENT END*/}
        </div>
      </section>
    </main>
  );
}

export default ExpandedPageComponent;
