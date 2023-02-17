import React from "react";
import "../scss/components/_button.scss";

export const Button = ({
  variant = 'default-variant',
  color = "default",
  disableShadow = false,
  text = "Default",
  size = "md",
  disabled = false,
  startIcon = null,
  endIcon = null
}) => {
  return (
    <button
      className={`button ${(color === "default") ? variant : ""} ${disableShadow ? "" : "shadow"} ${color} ${size}`}
      disabled={disabled}
    >
      {startIcon ? <span className="material-symbols-outlined">{startIcon}</span> : ""}
      {text}
      {endIcon ? <span className="material-symbols-outlined">{endIcon}</span> : ""}
    </button>
  );
};
