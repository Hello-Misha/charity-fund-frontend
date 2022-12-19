import React from "react";
import classes from "./ExpandedPageComponent.module.scss";
import { useTranslation } from "react-i18next";

// import ElementComponent from "./Element/ElementComponent";
// import EducationAboutIMGs from "./EducationAboutIMGs";

// import testImg from "../../../../img/testImg.png";

function ExpandedPageComponent() {
  const { t } = useTranslation();

  const aboutArr = t("homePage.education.about.0.title", {
    returnObjects: true,
  });

  return (
    <main>
      <h1>{t("homePage.education.about")}</h1>

      {console.log(typeof aboutArr)}
      {console.log(t("array.text"))}
      {console.log(t("array.arr", { returnObjects: true }))}

      <section className={classes.section}>
        {/* <h2 className={`Title DarkBlue`}>Hello</h2> */}
        <div className={classes.section__container}>
          {/* ELEMENT START*/}

          {/* {aboutArr.map((index) => {
            return console.log(index);
            console.log(index);
            <ElementComponent
              key={index}
              img={EducationAboutIMGs.index}
              title={index.title}
              href={`#`}
              linkText={elem[linkText]}
            />
          })} */}
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
