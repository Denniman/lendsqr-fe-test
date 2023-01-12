import { Icon } from "@app/components/atoms";
import React from "react";

import { IMetrics } from "./MetricsCard.interface";

export const MetricsCard: React.FC<IMetrics> = ({ type, title, stat }) => {
  const metricMapType: Partial<Record<typeof type, React.ReactElement>> = {
    activeUsers: (
      <div className="card">
        <div className="icon__wrapper active-users">
          <Icon name="activeMetrics" />
        </div>
        <p className="metrics--title">{title}</p>
        <p className="metrics--stat">{stat}</p>
      </div>
    ),
    users: (
      <div className="card">
        <div className="icon__wrapper users-bg ">
          <Icon name="userMetrics" />
        </div>
        <p className="metrics--title">{title}</p>
        <p className="metrics--stat">{stat}</p>
      </div>
    ),
    loanUsers: (
      <div className="card">
        <div className="icon__wrapper loan-users">
          <Icon name="loanMetrics" />
        </div>
        <p className="metrics--title">{title}</p>
        <p className="metrics--stat">{stat}</p>
      </div>
    ),
    savingsUsers: (
      <div className="card">
        <div className="icon__wrapper savings-users">
          <Icon name="savingsMetrics" />
        </div>
        <p className="metrics--title">{title}</p>
        <p className="metrics--stat">{stat}</p>
      </div>
    ),
  };
  return metricMapType[type] || null;
};
