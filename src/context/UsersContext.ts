import { createContext } from "react";
import { IdefeaultValues } from "./inferface";

const defeaultValues = {
  userId: "",
  getUserId() {},
};

export const UsersContext = createContext<IdefeaultValues>(defeaultValues);
