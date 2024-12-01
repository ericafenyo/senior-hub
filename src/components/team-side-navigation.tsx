import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarGroup
} from "@/components/ui/sidebar";

import { Calendar, ClipboardList, NotebookPen, Pill, Users } from "lucide-react";

type Props = {
  teamId: string;
}

const items = [
  {
    href: "reminders",
    icon: Calendar,
    title: "Reminders"
  },
  {
    href: "medications",
    icon: Pill,
    title: "Medications"
  },
  {
    href: "tasks",
    icon: ClipboardList,
    title: "Tasks"
  },
  {
    href: "notes",
    icon: NotebookPen,
    title: "Notes"
  },
  {
    href: "members",
    icon: Users,
    title: "Members"
  }
];

export const TeamSideNavigation = ({ teamId }: Props) => {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/teams/${teamId}/${item.href}`}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};
