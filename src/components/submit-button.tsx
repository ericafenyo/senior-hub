"use client";

import React from "react";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export type Props = {
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ children, className }: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button className={className} disabled={pending} type="submit">
      {children}
    </Button>
  );
};

export default SubmitButton;