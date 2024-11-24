import React from "react";
import { Label } from "@/components/ui/label";

type Props = {
  label: string;
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
};

export const FormField = (props: Props) => {
  const { label, htmlFor, children } = props;
  const className = props.className ? `space-y-2 ${props.className}` : "space-y-2";

  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
};