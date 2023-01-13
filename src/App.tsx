import React from "react";
import { RootRoutes } from "./routes";
import { UsersProvider } from "./context";

function App() {
  return (
    <UsersProvider>
      <RootRoutes />
    </UsersProvider>
  );
}

export default App;
