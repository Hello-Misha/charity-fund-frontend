import React from "react";

import classes from "./Text.module.scss";

// import { HashLink as Link } from "react-router-hash-link";

export default function Text(props) {
  return (
    <article className={classes.Text}>
      <h2 className={` ${classes.Text__title} Title DarkBlue`}>
        {props.title}
      </h2>
      <div className={classes.Text__block}>
        <p className={` ${classes.Text__paragraph} Text DarkBlue`}>
          {[props.text]}
        </p>
        {/* <Link> */}
        <div className="Button-blue Text-bold DarkBlue">{props.btn}</div>
        {/* </Link> */}
      </div>
    </article>
  );
}
