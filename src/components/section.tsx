import { ReactNode } from "react";


export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="container">
      <div className="max-w-[1200px]">
        {children}
      </div>
    </section>
  );
};