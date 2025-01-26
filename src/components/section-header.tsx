import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

type SectionHeaderProps = {
  title: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className="mt-8 mb-2">
      <div className="container">
        <div className="prose flex items-center gap-2">
          <props.icon className="text-primary/70" />
          <h2 className="m-0">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};