import { IconType } from "@app/components/atoms";

type Route = {
  path: string;
  title: string;
  icon: keyof Pick<
    IconType,
    | "group"
    | "loan"
    | "report"
    | "home"
    | "auditLogs"
    | "settings"
    | "userItem"
    | "briefcase"
    | "handshake"
    | "piggybank"
    | "whiteList"
    | "preference"
    | "settlement"
    | "userFriend"
    | "preference"
    | "loanRequest"
    | "feesCharges"
    | "transactions"
    | "savinceAccount"
    | "savingsProduct"
  >;
};

export type ISidebar = {
  routes?: Route[];
  className?: string;
  closeSideBar?: VoidFunction;
} & React.HTMLAttributes<HTMLDivElement>;
