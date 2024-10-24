import React from "react";

import { cn } from "@/lib/utils";

interface FormProps extends React.ComponentPropsWithoutRef<"form"> {
  testId?: string;
}

type FieldProps = {
  children: React.ReactNode;
  className?: string;
};

const Form: React.FC<FormProps> & { Field: React.FC<FieldProps> } = (
  { children, className, testId, ...props }
) => {
  return (
    <form
      className={cn("space-y-6", className)}
      data-testid={testId}
      {...props}
    >
      {children}
    </form>
  );
};

Form.Field = ({ children, className }: FieldProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
};

Form.Field.displayName = "Form.Field";

export { Form };
