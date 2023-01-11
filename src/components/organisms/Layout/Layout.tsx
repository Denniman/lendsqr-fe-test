import React, { useState } from "react";

import { Header } from "@app/components/molecules";
import { Sidebar } from "../Sidebar";

import { LayoutProps } from "./Layout.interface";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="layout__wrapper">
      <Sidebar
        closeSideBar={() => setIsDrawerOpen(false)}
        className={`${isDrawerOpen ? "show" : "hide"} sidebar`}
      />
      <Header
        className="header"
        closeSideBar={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <main className="layout__main">{children}</main>
    </div>
  );
};
