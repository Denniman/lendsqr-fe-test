import React, { SyntheticEvent, useState } from "react";

import { CustomSelect, Input } from "@app/components/atoms";
import { IFilter } from "./Filter.interface";
import { DatePicker } from "../DatePicker";

import { organisationName } from "@app/constants";

const statusData = ["Inactive", "Pending", "Blacklisted"];

export const Filter: React.FC<IFilter> = ({ className }) => {
  const [select, setSelect] = useState("");

  const [userStatus, setUserStatus] = useState("");
  return (
    <div
      onClick={(e: SyntheticEvent) => {
        e.stopPropagation();
      }}
      className={`filter__component 
     
      } ${className}`}
    >
      <CustomSelect
        options={organisationName}
        onChange={setSelect}
        placeholder="Select"
        selectedValue={select}
        label="Organization"
      />
      <Input placeholder="User" label="Username" id="Username" />
      <Input type="email" placeholder="Email" label="Email" id="userEmail" />
      <DatePicker />
      <Input placeholder="Phone Number" label="Phone Number" id="phoneNumber" />
      <CustomSelect
        label="Status"
        placeholder="Select"
        options={statusData}
        selectedValue={userStatus}
        onChange={setUserStatus}
      />
      <div className="filter__footer ">
        <button className="filter__footer--btn white-bg">Reset</button>
        <button className="filter__footer--btn cyan-bg ">Filter</button>
      </div>
    </div>
  );
};
