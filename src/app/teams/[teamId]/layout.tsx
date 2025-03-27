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
import { fetchPermissions } from "@/api/roles/get-permissions";
import { getMembership } from "@/api/membership/get-membership";
import { Roles} from "@/services/roles";
import { Membership } from "@/types";

type Params = Promise<{ teamId: string }>

type Props = {
  children: React.ReactNode;
  params: Params;
  searchParams: URLSearchParams;
};

const TeamLayout = async (props: Props) => {
  const { teamId } = await props.params;
  const membership: Membership = await getMembership(teamId);
  const permissions: string[] = await Roles.getPermissions(membership.role.id);

  return (
    <div className="relative">
      <SidebarProvider>
        <TeamSideNavigation teamId={teamId} permissions={permissions} />
        <SidebarInset>
          <header className="flex sticky top-0 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              {/*<BreadcrumbList>*/}
              {/*  <BreadcrumbItem className="hidden md:block">*/}
              {/*    <BreadcrumbLink href="#">*/}
              {/*      Building Your Application*/}
              {/*    </BreadcrumbLink>*/}
              {/*  </BreadcrumbItem>*/}
              {/*  <BreadcrumbSeparator className="hidden md:block" />*/}
              {/*  <BreadcrumbItem>*/}
              {/*    <BreadcrumbPage>Data Fetching</BreadcrumbPage>*/}
              {/*  </BreadcrumbItem>*/}
              {/*</BreadcrumbList>*/}
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col bg-muted">
            {props.children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default TeamLayout;