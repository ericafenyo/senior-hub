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

import { Building, House,  Lock, Mail,  UserRound } from "lucide-react";

type Props = {
  teamId: string;
}

const items = [
  {
    href: "account/profile",
    icon: UserRound,
    title: "Profile"
  },
  {
    href: "account/my-teams",
    icon: Building,
    title: "My teams"
  },
  {
    href: "account/email",
    icon: Mail,
    title: "Email"
  },
  {
    href: "account/address",
    icon: House,
    title: "Notes"
  },
  {
    href: "account/change-password",
    icon: Lock,
    title: "Change password"
  }
];

export const AccountSideNavigation = () => {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={`/${item.href}`}>
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
