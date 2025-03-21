import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarGroup, SidebarGroupLabel, SidebarHeader
} from "@/components/ui/sidebar";

import {
  Calendar,
  SquareActivity,
  LayoutGrid,
  NotebookPen,
  Pill,
  Users,
  User,
  CircleCheckBig,
  Bell,
  PackageOpen, User2, ChevronUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { Accounts } from "@/services/accounts";

type Props = {
  teamId: string;
  permissions: string[];
}

const PatientInformationMenu = ({ teamId, permissions }: any) => {

  console.log({contain: permissions.includes("read:patient-vitals")});

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Patient</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/patient-info`}>
                <User />
                <span>Patient Information</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {permissions.includes("read:vitals") && (
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href={`/teams/${teamId}/vitals`}>
                  <SquareActivity />
                  <span>Vitals</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const TeamSettingsMenu = ({ teamId }: { teamId: string }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/overview`}>
                <LayoutGrid />
                <span>Overview</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/members`}>
                <Users />
                <span>Members</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

const TeamMenu = ({ teamId }: { teamId: string }) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Team</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="space-y-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/appointments`}>
                <Calendar />
                <span>Appointments</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/medications`}>
                <Pill />
                <span>Medications</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/tasks`}>
                <CircleCheckBig />
                <span>Tasks</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href={`/teams/${teamId}/notes`}>
                <NotebookPen />
                <span>Notes</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export const TeamSideNavigation = async ({ teamId, permissions }: any) => {
  console.log(permissions);
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="bg-white border-b border-border h-16 flex items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-full">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3 items-center">
                  <PackageOpen />
                  <span>Care Hub</span>
                </div>
                <Button variant="outline" size="icon" className="shadow-none">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <TeamMenu teamId={teamId} />
        <PatientInformationMenu teamId={teamId} permissions={permissions} />
        <TeamSettingsMenu teamId={teamId} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Account
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem onClick={Accounts.signOut}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
