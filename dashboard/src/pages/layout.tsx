import React, { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appSidebar";

// Define the props for the Layout component
interface LayoutProps {
  children: ReactNode; // ReactNode allows any valid React child (e.g., JSX, strings, etc.)
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      {/* Sidebar and Main Layout */}
      <div className="relative flex">
        {/* Sidebar */}
        <AppSidebar />
      </div>

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>
    </SidebarProvider>
  );
};

export default Layout;
