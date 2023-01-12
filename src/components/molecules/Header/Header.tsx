import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowDropDown } from "react-icons/md";

import { Icon } from "@app/components/atoms";
import logo from "@app/assets/images/logo.png";
import { SearchInput } from "../SearchInput";

import { IHeader } from "./Header.interface";

const image_url = `https://randomuser.me/api/portraits/med/men/${Math.floor(
  Math.random() * 50
)}.jpg`;

export const Header: React.FC<IHeader> = ({ className, closeSideBar }) => {
  return (
    <header className={`header__wrapper ${className}`}>
      <div className="header__left">
        <div className="logo__wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="search__container">
          <SearchInput />
        </div>
        <GiHamburgerMenu className="hamburgerMenu" onClick={closeSideBar} />
      </div>
      <div className="header__right">
        <p className="doc-text">Docs</p>
        <div className="notification__wrapper">
          <Icon name="notification" />
        </div>

        <div className="user__wrapper">
          <img src={image_url} alt="user" className="user__image" />
        </div>
        <div className="user__name--wrapper">
          <p className="user__name">Adedeji</p>
          <div className="arrow--dropDown ">
            <MdOutlineArrowDropDown />
          </div>
        </div>
      </div>
    </header>
  );
};
