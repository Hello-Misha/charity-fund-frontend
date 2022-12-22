import React, { useEffect, useState } from "react";

// import { useTranslation } from "react-i18next";
// import { HashLink as Link } from "react-router-hash-link";
import LanguageToogler from "./Nav/LanguageToogler.js";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {
  // const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <header className={classes.header}>
      <div className={`${classes.header__content}`}>
        <div
          className={`${classes.header__content__title} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          {/* <Link to="/"> */}
          <h2 className="White Text-bold">ФОНД</h2>
          {/* </Link> */}
        </div>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <div className={classes.header__content__nav__LangSwitcher}>
            <LanguageToogler />
          </div>
        </nav>
        <div className={classes.header__content__menuControls}>
          {/* {BurgerMenu} */}
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <BiMenu onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
