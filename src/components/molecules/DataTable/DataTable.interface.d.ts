import { IUserData } from "@app/models";
export interface IData extends IUserData {
  userDetails?: VoidFunction;
  onViewDetails: (id: string) => void;
}
