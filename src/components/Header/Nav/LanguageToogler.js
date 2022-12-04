import React, { useEffect } from "react";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";

import classes from "../Header.module.scss";

// import classes from "./Header.module.scss";

// const languages = [
//   {
//     code: "UA",
//     country_code: "ua",
//   },
//   {
//     code: "EN",
//     country_code: "en",
//   },
// ];

function LanguageToogler() {
  const currentLanguageCode = cookies.get("i18next") || "ua";
  const currentLanguage = () => {
    if (currentLanguageCode === "ua") {
      return "en";
    } else {
      return "ua";
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("app_title");
  }, [currentLanguageCode, t]);

  return (
    <div>
      <h3
        className={`Text White ${classes.toogler}`}
        onClick={() => {
          i18next.changeLanguage(currentLanguage());
          // setMenuOpen(false)
        }}
      >
        {t("header.toogler")}
      </h3>
    </div>
  );
}

export default LanguageToogler;
