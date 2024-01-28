import React from "react";
import styles from "./Button.module.css";

function Button({onButtonClick}) {
  const buttons = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "/",
    "*",
    ".",
    "=",
  ];

  return (
    <>
      {buttons.map((button, index) => (
        <button
          // 
          onClick={ ()=> {
            onButtonClick(button)
          }}
          key={index}
          className={styles.buttons}
        >
          {button}
        </button>
      ))}
    </>
  );
}

export default Button;
