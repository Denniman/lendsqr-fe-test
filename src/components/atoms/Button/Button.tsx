import React from "react";

import { IButton } from "./Button.interface";

export const Button: React.FC<IButton> = ({ text, className, ...props }) => {
  return (
    <button className={`app__button ${className}`} {...props}>
      {text}
    </button>
  );
};
