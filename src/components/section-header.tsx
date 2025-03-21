import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="prose mt-8 mb-4">
      <h2 className="text-foreground/70 font-semibold">{props.title}</h2>
    </div>
  );
};
