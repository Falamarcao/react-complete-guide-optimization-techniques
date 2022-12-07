import { memo } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  console.log("Button RUNNING");

  return (
    <button
      type={props.type || "button"}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;