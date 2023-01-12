export interface IProfile {
  bvn: string;
  gender: string;
  avatar: string;
  address: string;
  lastName: string;
  currency: string;
  firstName: string;
  phoneNumber: string;
}

export interface ISocials {
  facebook: string;
  instagram: string;
  twitter: string;
}
export interface IEducation {
  level: string;
  sector: string;
  duration: string;
  officeEmail: string;
  loanRepayment: string;
  monthlyIncome: string[];
  employmentStatus: string;
}

export type IGuarantor = Omit<IProfile, "currency" | "avatar" | "bvn">;

export interface IUser {
  id: string;
  email: string;
  createdAt: Date;
  orgName: string;
  userName: string;
  socials: ISocials;
  profile: IProfile;
  phoneNumber: string;
  lastActiveDate: Date;
  guarantor: IGuarantor;
  accountNumber: string;
  education: IEducation;
  accountBalance: string;
}

export type IUserData = Omit<
  IUser,
  | "profile"
  | "socials"
  | "education"
  | "guarantor"
  | "accountNumber"
  | "lastActiveDate"
  | "accountBalance"
>;
