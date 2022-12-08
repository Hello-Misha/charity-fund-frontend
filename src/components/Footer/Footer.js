import React from "react";

import classes from "./Footer.module.scss";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__content}>
        <div className={classes.footer__content__description}>
          <div className={classes.footer__content__description__support}>
            <p className={`Text White`}>{t("footer.support.title")}</p>
            <p className={`Text White`}>{t("footer.support.iban")}</p>
            <p className={`Text White`}>{t("footer.support.bank")}</p>
          </div>
          <div>
            <p className={`Text White`}>{t("footer.address.street")}</p>
            <p className={`Text White`}>{t("footer.address.city and zip")}</p>
            <p className={`Text White`}>{t("footer.address.county")}</p>
          </div>
        </div>
        <div className={classes.footer__content__nav}>
          <p className={`Text White`}>{t("footer.nav.Legal")}</p>
          <p className={`Text White`}>{t("footer.nav.About")}</p>
          <p className={`Text White`}>{t("footer.nav.Privacy")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
