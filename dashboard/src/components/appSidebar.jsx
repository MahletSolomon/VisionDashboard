import { Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import star from "@/assets/star.svg";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar className=" w-64 h-screen bg-bgsecondary border-r border-border flex flex-col justify-between">
      {/* Sidebar Trigger */}
      <SidebarTrigger
        className="absolute top-4 right-[-12px] z-20 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition shadow-md"
        aria-label="Toggle Sidebar"
      />

      {/* Sidebar Content */}
      <SidebarContent>
        <div className="flex items-start gap-2 p-4">
          <img src={star} alt="Vision Academy" className="w-6 h-6" />
          <span className="text-lg font-bold text-text">Vision Academy</span>
        </div>
        <div>
          {items.map((item) => (
            <a
              key={item.title}
              href={item.url}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
