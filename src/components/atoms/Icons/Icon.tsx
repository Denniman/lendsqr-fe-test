import { IconProps } from "./Icon.interface";

import { Home } from "./assets/home";
import { Logo } from "./assets/logo";
import { Eye } from "./assets/eye";
import { Loan } from "./assets/loan";
import { Users } from "./assets/users";
import { Group } from "./assets/group";
import { Report } from "./assets/report";
import { Search } from "./assets/search";
import { Calender } from "./assets/calender";
import { Settings } from "./assets/settings";
import { HalfStart } from "./assets/half-start";
import { FullStart } from "./assets/full-start";
import { Handshake } from "./assets/handshake";
import { LogoSmall } from "./assets/logo-small";
import { ArrowLeft } from "./assets/arrow-left";
import { userItem } from "./assets/user-item";
import { ActiveUser } from "./assets/active-user";
import { Briefcase } from "./assets/briefcase";
import { Piggybank } from "./assets/piggybank";
import { AuditLogs } from "./assets/audit-logs";
import { WhiteList } from "./assets/white-list";
import { Preference } from "./assets/preference";
import { Settlement } from "./assets/settlement";
import { MoreDetails } from "./assets/more-details";
import { BlackListUser } from "./assets/blacklist-user";
import { UserMetrics } from "./assets/user-metrics";
import { LoanMetrics } from "./assets/loan-metrics";
import { UserFriend } from "./assets/user-friends";
import { LoanRequest } from "./assets/loan-request";
import { FeesPricing } from "./assets/fees-pricing";
import { FeesCharges } from "./assets/fees-charges";
import { Notification } from "./assets/notification";
import { Transactions } from "./assets/transactions";
import { SavingsMetrics } from "./assets/savings-metrics";
import { ActiveMetrics } from "./assets/active-metrics";
import { SavinceAccount } from "./assets/savince-account";
import { SavingsProduct } from "./assets/savings-product";

const iconMap = {
  eye: Eye,
  logo: Logo,
  home: Home,
  loan: Loan,
  users: Users,
  group: Group,
  report: Report,
  search: Search,
  calender: Calender,
  settings: Settings,
  userItem: userItem,
  halfStart: HalfStart,
  fullStart: FullStart,
  arrowLeft: ArrowLeft,
  logoSmall: LogoSmall,
  handshake: Handshake,
  whiteList: WhiteList,
  briefcase: Briefcase,
  piggybank: Piggybank,
  auditLogs: AuditLogs,
  activeUser: ActiveUser,
  userFriend: UserFriend,
  preference: Preference,
  loanMetrics: LoanMetrics,
  settlement: Settlement,
  userMetrics: UserMetrics,
  moreDetails: MoreDetails,
  feesPricing: FeesPricing,
  feesCharges: FeesCharges,
  loanRequest: LoanRequest,
  notification: Notification,
  transactions: Transactions,
  activeMetrics: ActiveMetrics,
  blackListUser: BlackListUser,
  savingsMetrics: SavingsMetrics,
  savinceAccount: SavinceAccount,
  savingsProduct: SavingsProduct,
};

export type IconType = keyof typeof iconMap;

const resolver: Record<string, any> = {};

export const iconNameList = Object.keys(iconMap) as IconType[];

export const Icon = ({
  name,
  size,
  ...props
}: IconProps & { name: IconType }) => {
  const style = size
    ? { height: size, width: size, viewBox: `0 0 ${size * 1.2} ${size * 1.2}` }
    : {};

  for (const [key, icon] of Object.entries(iconMap)) {
    resolver[key] = icon({ size, ...props, ...style });
  }

  return resolver[name];
};
