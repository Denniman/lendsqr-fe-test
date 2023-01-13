import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "@app/components/molecules";
import { Sidebar } from "../Sidebar";

import { LayoutProps } from "./Layout.interface";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);
  return (
    <div className="layout__wrapper">
      <Sidebar className={`${isDrawerOpen ? "show" : "hide"} sidebar`} />
      <Header
        className="header"
        isDrawerOpen={isDrawerOpen}
        closeSideBar={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <main className="layout__main">{children}</main>
    </div>
  );
};
