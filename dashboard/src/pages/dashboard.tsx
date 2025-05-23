import React, { useEffect, useState } from "react";
import TopBar from "../components/topBar";
import OverviewCard from "../components/overviewCard";
import TeacherCard from "../components/teacherCard";
import ClassRoomCard from "../components/classroomCard";
import ClassAverageCard from "../components/classAverageCard";
import { useSelector } from "react-redux";
import ClassDetailTabs from "../components/classDetailTabs";
import { RootState } from "../redux/store";

// Define types for the student and class data
interface Student {
  name: string;
  marks: number | string;
  attendance: boolean;
}

interface ClassData {
  name: string;
  students: Student[];
  room: string;
  homeroom: boolean;
}

const Dashboard: React.FC = () => {
  const [marks, setMarks] = useState<number[]>([]);
  const [averageMarks, setAverageMarks] = useState<number>(0);
  const [room, setRoom] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([]);
  const [attendance, setAttendance] = useState<number>(0);
  const [homeroom, setHomeroom] = useState<boolean>(false);

  const selectedClass = useSelector((state: RootState) => state.class.selectedClass);

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch("http://localhost:3000/classes");
        if (!response.ok) {
          throw new Error("Failed to get students");
        }

        const result: ClassData[] = await response.json();
        const classData = result.find((item) => item.name === selectedClass);
        if (!classData) {
          throw new Error("Class not found");
        }
        const { students, room, homeroom } = classData;

        setRoom(room);
        setStudents(students);
        setHomeroom(homeroom);

        // Convert marks to numbers if they are strings
        const numericMarks = students.map((s) => Number(s.marks));
        const attendance = students.filter((student) => student.attendance === true).length;

        setAttendance(attendance);
        setMarks(numericMarks);

        // Calculate total and average marks
        const totalMarks = numericMarks.reduce((acc, mark) => acc + mark, 0);
        const averageMarks = Math.round(totalMarks / numericMarks.length);

        setAverageMarks(averageMarks); // Set the average marks
      } catch (err) {
        console.error(err);
      }
    };
    if (selectedClass) {
      fetchClassData();
    }
  }, [selectedClass]);

  return (
    <div className="w-full h-screen flex flex-col gap-4">
      <div className="sticky top-0 z-10 bg-white">
        <TopBar />
      </div>

      <div className="w-full flex flex-col gap-6">
        <p className="text-lg text-left">Grade {selectedClass} (Home room class)</p>

        {/* OVERVIEW */}
        <div className="w-full h-fit flex flex-col justify-center gap-3 bg-bgsecondary text-left rounded-lg border border-border py-4 px-6">
          <h3 className="text-lg font-semibold">Overview</h3>
          <div className="grid grid-cols-3 gap-2 auto-rows-fr">
            {/* First column: ClassAverageCard spans all rows */}
            <ClassAverageCard
              data={students}
              classAverage={averageMarks}
              className="col-span-3 md:col-span-1 row-span-2"
            />

            {/* Second column: Two cards */}
            <OverviewCard title="Students" data={students.length} />
            <ClassRoomCard room={room} capacity={42} />

            {/* Third column: Two cards */}
            <OverviewCard title="Today's attendance" data={attendance} view={true} />
            <TeacherCard name={homeroom ? "Homeroom Teacher" : "Teacher"} subject="Physics" isHomeroom={homeroom} />
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-center gap-3 bg-bgsecondary text-left rounded-lg border border-border py-4 px-6">
          <ClassDetailTabs students={students} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;