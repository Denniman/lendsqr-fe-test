import React from "react";
import { Icon } from "@app/components/atoms";

export const SearchInput = () => {
  return (
    <div className="search__wrapper">
      <input
        type="text"
        placeholder="Search for anything"
        className="search__input"
      />
      <button className="search__btn">
        <Icon name="search" />
      </button>
    </div>
  );
};
