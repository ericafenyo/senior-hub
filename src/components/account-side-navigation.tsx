"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupContent,
  SidebarGroup, SidebarHeader
} from "@/components/ui/sidebar";

import { Building, House, Lock, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accounts } from "@/services/accounts";

const items = [
  {
    href: "account/my-teams",
    icon: Building,
    title: "My teams"
  },
  {
    href: "account/profile",
    icon: UserRound,
    title: "Profile"
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
      <SidebarHeader />
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
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button onClick={Accounts.signOut} variant="secondary" size="sm" className="w-full">
                <span>Sign out</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
