import React from "react";
import classes from "./ExpandedPageComponent.module.scss";
import { useTranslation } from "react-i18next";

import ElementComponent from "./Element/ElementComponent";
import EducationAboutIMGs from "./EducationAboutIMGs";

// import testImg from "../../../../img/testImg.png";

function ExpandedPageComponent() {
  const { t } = useTranslation();

  const aboutArr = t("homePage.education.about", {
    returnObjects: true,
  });

  return (
    <main>
      <h1>{t("homePage.education.about.0.title")}</h1>
      <section className={classes.section}>
        {/* <h2 className={`Title DarkBlue`}>Hello</h2> */}
        <div className={classes.section__container}>
          {/* ELEMENT START*/}
          {aboutArr.map((elem, index) => {
            return (
              <ElementComponent
                img={EducationAboutIMGs[index]}
                title={elem.title}
                href={`#`}
                linkText={elem.linkText}
              />
            );
          })}

          {/* <div className={classes.section__container__element}>
            <img src={testImg} alt="testImg" />
            <div className={classes.section__container__element__text}>
              <h2 className={`Title DarkBlue`}>Hello I`m title</h2>
              <a href="#" className={`Text-bold DarkBlue`}>
                Hello im link
              </a>
            </div>
          </div>*/}
          {/* ELEMENT END*/}
        </div>
      </section>
    </main>
  );
}

export default ExpandedPageComponent;
