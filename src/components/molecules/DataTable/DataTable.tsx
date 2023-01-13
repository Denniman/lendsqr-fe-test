import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import { Icon } from "@app/components/atoms";
import { IData } from "./DataTable.interface";

export const DataTable: React.FC<IData> = ({
  id,
  email,
  orgName,
  userName,
  createdAt,
  phoneNumber,
  onViewDetails,
}) => {
  const testRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("click", close);

    return () => document.removeEventListener("click", close);
  }, []);
  const close = (e: any) => setShow(e && e.target === testRef.current);

  return (
    <div className="data__item">
      <p className="data__item--entry orgname">{orgName}</p>
      <p className="data__item--entry">{userName}</p>
      <p className="data__item--entry">{email}</p>
      <p className="data__item--entry show">{phoneNumber}</p>
      <p className="data__item--entry show">
        {moment(createdAt).format("MMM Do, YYYY h:mmA")}
      </p>

      <div className="data__item--entry data--end show">
        <div className="status active show">Active</div>
      </div>
      <div
        ref={testRef}
        onClick={() => setShow(!show)}
        className="verticalRounded__wrapper"
      >
        <span className="verticalRounded"></span>
        <span className="verticalRounded"></span>
        <span className="verticalRounded"></span>
        <div className="tooltip">
          <div className={`tooltip__modal ${show ? "active" : "notactive"}`}>
            <div
              className="user__details"
              onClick={() => {
                onViewDetails(id);
              }}
            >
              <Icon name="eye" />
              View Details
            </div>
            <div className="user__details">
              <Icon name="blackListUser" />
              Blacklist User
            </div>
            <div className="user__details">
              <Icon name="activeUser" />
              Activate User
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
