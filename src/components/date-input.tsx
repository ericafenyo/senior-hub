import { useState, ChangeEvent, useEffect } from "react";
import { MonthSelector } from "@/components/month-selector";
import { Input } from "@/components/ui/input";

type Event = ChangeEvent<HTMLInputElement>;

type Props = {
  disabled?: boolean;
  name?: string;
  onChange?: (event: Event) => void;
  value?: Date;
};

export const DateInput = ({ onChange, value, name, disabled }: Props) => {
  const [day, setDay] = useState<number | undefined>();
  const [month, setMonth] = useState<number | undefined>();
  const [year, setYear] = useState<number | undefined>();
  const [date, setDate] = useState<Date | undefined>();

  const handleYearChange = (event: Event) => {
    event.preventDefault();
    const newYear = parseInt(event.target.value, 10);
    setYear(newYear);
    update(day, month, newYear);
  };

  const handleMonthChange = (value: string) => {
    const newMonth = parseInt(value, 10);
    setMonth(newMonth);
    update(day, newMonth, year);
  };

  const handleDayChange = (event: Event) => {
    event.preventDefault();
    const newDay = parseInt(event.target.value, 10);
    setDay(newDay);
    update(newDay, month, year);
  };

  const update = (day?: number, month?: number, year?: number) => {
    if (day && month && year) {
      const date = new Date(year, month - 1, day);
      setDate(date);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <MonthSelector
        className="w-full h-10"
        onChange={(month) => handleMonthChange(month)}
        disabled={disabled}
      />
      <Input disabled={disabled} min={1} max={31} className="w-full" type="number" placeholder="Day"
             onChange={handleDayChange} />
      <Input disabled={disabled} min={1} className="w-full" type="number" placeholder="Year"
             onChange={handleYearChange} />
      <input
        defaultValue={value?.toISOString() || ""}
        onChange={onChange}
        name={name}
        type="hidden"
        value={date?.toISOString() || ""}
      />
    </div>
  );
};
