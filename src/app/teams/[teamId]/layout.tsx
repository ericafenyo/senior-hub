import React from "react";

import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

import { TeamSideNavigation } from "@/components/team-side-navigation";
import { Separator } from "@/components/ui/separator";

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
        <TeamSideNavigation teamId={params.teamId} />
        <main>
          {/*<SidebarTrigger />*/}
          {/*{children}*/}
        </main>
        <SidebarInset>
          <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col p-4">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;