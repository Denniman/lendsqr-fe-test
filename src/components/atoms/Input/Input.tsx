import React, { useState, Fragment } from "react";

import { IInput } from "./Input.interface";

export const Input: React.FC<IInput> = ({
  id,
  type,
  label,
  className,
  ...props
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const showPasswordToggle = type === "password";
  return (
    <Fragment>
      {label && (
        <label htmlFor={type} className="label">
          {label}
        </label>
      )}

      <div className={`input__container ${className}`}>
        <input
          id={id}
          className="input"
          type={passwordShown ? "text" : type}
          {...props}
        />
        {showPasswordToggle && (
          <span
            className="show-button"
            onClick={() => setPasswordShown(!passwordShown)}
          >
            <p className="show-text">{passwordShown ? "Hide" : "Show"}</p>
          </span>
        )}
      </div>
    </Fragment>
  );
};
