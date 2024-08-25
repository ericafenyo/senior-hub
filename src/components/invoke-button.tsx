"use client";

import React from "react";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export type Props = {
  className?: string;
  children: React.ReactNode;
  action?: () => void;
}

export const ActionButton = ({ children, className, action }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button className={className} disabled={pending} onClick={action}>
      {children}
    </Button>
  );
};

