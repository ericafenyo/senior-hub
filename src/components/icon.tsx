import React from "react";
import { Calendar, ClipboardList, LucideProps, NotebookPen, Pill, Users } from "lucide-react";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name]);

  return <LucideIcon {...props} />;
};

export const Icons = ({ name }: IconProps) => {
  return dynamic(dynamicIconImports[name]);
};


const iconMap: Record<string, React.ComponentType<any>> = {
  calendar: Calendar,
  pill: Pill,
  users: Users,
  "notebook-pen": NotebookPen,
  "clipboard-list": ClipboardList
  // Add more icons here
};

export const getIcon = (name: string) => {
  return iconMap[name];
};
