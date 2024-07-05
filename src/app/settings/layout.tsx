import React from "react";
import SideNavigation from "@/components/side-navigation";

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="flex">
      <SideNavigation />
      {children}
    </div>
  );
};

export default Layout;
