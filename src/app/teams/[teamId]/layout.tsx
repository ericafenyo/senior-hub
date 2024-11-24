import React from "react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TeamSideNavigation } from "@/components/team-side-navigation";

type Props = {
  children: React.ReactNode;
  params: {
    teamId: string;
  }
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="relative">
      <SidebarProvider>
        <TeamSideNavigation />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;