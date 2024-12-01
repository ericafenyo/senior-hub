"use client";

import { ChangeEvent, useState } from "react";
import { DateTimePicker } from "@/components/ui/date-time-picker";

type DateInputProps = {
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: Date;
};

export const DateInput = (props: DateInputProps) => {
  const { value, onChange, className, name, disabled, id, placeholder } = props;
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div>
      <DateTimePicker
        className={className}
        onChange={(date) => setDate(date)}
        value={date}
        placeholder={placeholder}
        disabled={disabled}
        showOutsideDays={false}
        displayFormat={undefined}
      />
      <input
        id={id}
        name={name}
        type="hidden"
        disabled={disabled}
        value={date?.toISOString() || ""}
        onChange={onChange}
        defaultValue={value?.toISOString() || ""}
      />
    </div>
  );
};