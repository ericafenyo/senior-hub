import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

type Props = {
  onChange?: (value: string) => void;
  value?: string;
  className?: string;
  disabled?: boolean;
  name?: string
};

export const PrioritySelector = ({ value, onChange, className, disabled, name }: Props) => {
  return (
    <Select defaultValue={value} onValueChange={onChange} name={name}>
      <SelectTrigger className={className} disabled={disabled}>
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="LOW">Low</SelectItem>
        <SelectItem value="MEDIUM">Medium</SelectItem>
        <SelectItem value="HIGH">High</SelectItem>
        <SelectItem value="URGENT">Urgent</SelectItem>
      </SelectContent>
    </Select>
  );
};
