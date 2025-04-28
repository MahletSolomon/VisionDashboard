import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentPage from "../pages/studentPage";

// Define the type for the `navItems` array
interface NavItem {
  label: string;
  value: string;
}

// Define the props for the component
interface ClassDetailTabsProps {
  students: Array<{ name: string; marks: number | string; attendance: boolean }>;
}

const ClassDetailTabs: React.FC<ClassDetailTabsProps> = ({ students }) => {
  const navItems: NavItem[] = [
    { label: "Students", value: "students" },
    { label: "Attendance", value: "attendance" },
    { label: "Mark List", value: "mark-list" },
    { label: "Master Sheet", value: "master-sheet" },
    { label: "Time Table", value: "time-table" },
  ];

  return (
    <Tabs defaultValue="students" className="w-full flex flex-col gap-3">
      <TabsList className="sticky top-5 z-10 w-full py-2 bg-white text-left rounded-full border border-border flex gap-2">
        {navItems.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="w-full rounded-full hover:bg-bgsecondary active:bg-accent data-[state=active]:bg-accent data-[state=active]:text-white transition"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="students">
        <StudentPage students={students} />
      </TabsContent>
      <TabsContent value="attendance">Attendance details go here.</TabsContent>
      <TabsContent value="mark-list">Mark list details go here.</TabsContent>
      <TabsContent value="master-sheet">Master sheet details go here.</TabsContent>
      <TabsContent value="time-table">Time table details go here.</TabsContent>
    </Tabs>
  );
};

export default ClassDetailTabs;