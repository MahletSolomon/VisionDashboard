import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/appSidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      {/* Sidebar Trigger aligned with the sidebar */}
      <div className="relative flex">
        {/* <div className="relative"> */}
        {/* <SidebarTrigger className="absolute top-0 -right-[-20px] z-20  bg-gray-200 rounded-full hover:bg-gray-300 transition" /> */}
        <AppSidebar />
        {/* </div> */}
      </div>

      <main className="w-full"> {/* Add left margin to account for the sidebar width */}
        {children}
      </main>
    </SidebarProvider>
  );
}
