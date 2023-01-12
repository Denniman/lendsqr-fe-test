import React from "react";

import { ISelect } from "./Select.interface";

export const Select: React.FC<ISelect> = ({ data = 10, onChange }) => {
  return (
    <div className="select__wrapper">
      <select className="select__item" onChange={onChange}>
        {[data].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};
