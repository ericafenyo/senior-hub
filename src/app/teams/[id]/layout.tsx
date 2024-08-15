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
    <div className="flex h-full">
      <SidebarNav teamId={params.id} />
      {children}
    </div>
  );
};

export default Layout;