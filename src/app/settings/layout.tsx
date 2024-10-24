import React from "react";
import TeamSideNavigation from "@/components/team-side-navigation";

const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="flex">
      <TeamSideNavigation />
      {children}
    </div>
  );
};

export default Layout;
