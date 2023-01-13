import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Icon } from "@app/components/atoms";

import { APP_URL_LIST } from "@app/routes/urls";

import { ISidebar } from "./Sidebar.interface";

export const Sidebar: React.FC<ISidebar> = ({ routes, className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <aside className={`aside__wrapper ${className}`}>
      <div className="nav__item mt-12">
        <Icon name="briefcase" />
        <p className="nav__title">Switch Organization</p>
        <div className="icon--downLine">
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className="nav__container">
        {routes?.slice(0, 1).map(({ icon, path, title }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className={`nav__item ${pathname === path && "active"}`}
          >
            <div>
              <Icon name={icon} />
            </div>
            <p className="nav__title">{title}</p>
          </div>
        ))}
      </div>
      <div className="nav__container">
        <p className="nav__heading">Customers</p>
        {routes?.slice(1, 8).map(({ icon, path, title }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className={`nav__item ${pathname === path && "active"}`}
          >
            <div>
              <Icon name={icon} />
            </div>
            <p className="nav__title">{title}</p>
          </div>
        ))}
      </div>
      <div className="nav__container">
        <p className="nav__heading">Businesses</p>
        {routes?.slice(8, 10).map(({ icon, path, title }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className={`nav__item ${pathname === path && "active"}`}
          >
            <div>
              <Icon name={icon} />
            </div>
            <p className="nav__title">{title}</p>
          </div>
        ))}
      </div>
      <div className="nav__container">
        <p className="nav__heading">Settings</p>
        {routes?.slice(10).map(({ icon, path, title }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className={`nav__item ${pathname === path && "active"}`}
          >
            <div>
              <Icon name={icon} />
            </div>
            <p className="nav__title">{title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

Sidebar.defaultProps = {
  routes: [
    {
      icon: "home",
      title: "Dashboard",
      path: APP_URL_LIST.DASH_BOARD_URL,
    },
    {
      icon: "userFriend",
      title: "Users",
      path: APP_URL_LIST.USERS_URL,
    },
    {
      icon: "group",
      title: "Guarantors",
      path: APP_URL_LIST.GUARANTORS,
    },
    {
      icon: "loan",
      title: "Loans",
      path: APP_URL_LIST.LOAN,
    },
    {
      icon: "handshake",
      title: "Decision Models",
      path: APP_URL_LIST.DECISION_MODELS,
    },
    {
      icon: "piggybank",
      title: "Savings",
      path: APP_URL_LIST.SAVINGS,
    },
    {
      icon: "loanRequest",
      title: "Loan Requests",
      path: APP_URL_LIST.LOAN_REQUESTS,
    },
    {
      icon: "whiteList",
      title: "Whitelist",
      path: APP_URL_LIST.WHITELIST,
    },
    {
      icon: "userItem",
      title: "Karma",
      path: APP_URL_LIST.KARMA,
    },
    {
      icon: "briefcase",
      title: "Organization",
      path: APP_URL_LIST.ORGANIZATION,
    },
    {
      icon: "loanRequest",
      title: "Loan Products",
      path: APP_URL_LIST.LOAN_PRODUCTS,
    },
    {
      icon: "savingsProduct",
      title: "Savings Products",
      path: APP_URL_LIST.SAVINGS_PRODUCT,
    },
    {
      icon: "feesCharges",
      title: "Fees and Charges",
      path: APP_URL_LIST.FEES_CHARGES,
    },
    {
      icon: "transactions",
      title: "Transactions",
      path: APP_URL_LIST.TRANSACTIONS,
    },
    {
      icon: "settings",
      title: "Services",
      path: APP_URL_LIST.SERVICES,
    },
    {
      icon: "savinceAccount",
      title: "Service Account",
      path: APP_URL_LIST.SERVICE_ACCOUNT,
    },
    {
      icon: "settlement",
      title: "Settlements",
      path: APP_URL_LIST.SETTLEMENTS,
    },
    {
      icon: "report",
      title: "Reports",
      path: APP_URL_LIST.REPORT,
    },
    {
      icon: "preference",
      title: "Preferences",
      path: APP_URL_LIST.PREFERENCES,
    },
    {
      icon: "auditLogs",
      title: "Audit Logs",
      path: APP_URL_LIST.AUDIT_LOGS,
    },
  ],
};
