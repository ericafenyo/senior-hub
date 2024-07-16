"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getIcon } from "@/components/icon";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  name: string;
}

export const SidebarNavItem = ({ name, title, href }: Props) => {
  const pathname = usePathname();
  const Icon = getIcon(name);

  return (
    <Link
      href={href}
      className={
        cn(
          "flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-900 ",
          // flex items-center space-x-2 p-2 rounded-md hover:bg-slate-100
          pathname === href ? "bg-primary/90 text-white" : "hover:bg-slate-100"
        )
      }
    >
      <Icon width={20} height={20} />
      <span>{title}</span>
    </Link>
  );
};