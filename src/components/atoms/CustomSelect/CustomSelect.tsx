import React, { Fragment, useState } from "react";
import { ICustomSelect } from "./CustomSelect.interface";
import { RiArrowDropDownLine } from "react-icons/ri";

export const CustomSelect: React.FC<ICustomSelect> = ({
  label,
  onChange,
  options,
  selectedValue,
  placeholder,
}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Fragment>
      {label && <label className="label">{label}</label>}
      <div className="customselect">
        <button
          className="placeholder"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          {selectedValue || placeholder}

          <RiArrowDropDownLine className="arrow filter__dropDownLine" />
        </button>
        <ul className={`options ${showDropDown && "open"}`}>
          {options.map((item) => (
            <li
              key={item}
              className="option"
              onClick={() => {
                onChange(item);
                setShowDropDown(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
