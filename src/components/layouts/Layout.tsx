import React, { ReactNode } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
