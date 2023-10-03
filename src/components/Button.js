import React from "react";
import styles from "../styles/modules/button.module.scss";
import { getClasses } from "../utils/helper";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

const Button = ({ children, type, variant = "primary", ...rest }) => {
  return (
    <button
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      type={type === "submit" ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
export const SelectButton = ({ children, id, ...rest }) => {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
};

export default Button;
