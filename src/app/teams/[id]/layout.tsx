// @flow
import * as React from "react";
import { SidebarNav } from "../../../components/sidebar-nav";

type Props = {
  children: React.ReactNode;
  params: {
    id: string;
  }
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="flex">
      <div className="w-[200px]">
        <SidebarNav teamId={params.id} />
      </div>
      {children}
    </div>
  );
};

export default Layout;