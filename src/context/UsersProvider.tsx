import React, { useState, PropsWithChildren } from "react";

import { UsersContext } from "./UsersContext";

export const UsersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState("");
  return (
    <UsersContext.Provider
      value={{
        userId,
        getUserId: setUserId,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
