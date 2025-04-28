import React, { useEffect } from 'react'
import { Button } from '../components/ui/button';
import addStudent from '../assets/addStudent.svg';
import { Input } from "@/components/ui/input";
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import {StudentColumns} from '../components/studentsTableColumn';
import { StudentDataTable } from '../components/studentTable';

import { Student } from '@/types/student';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
 

interface StudentPageProps {
  students: Student[];
}

const StudentPage: React.FC<StudentPageProps> = ({ students }) => {
  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4 bg-white rounded-sm">
      <div className="flex flex-col gap-2 w-full h-full rounded-lg p-4">
        <div className="flex justify-between">
          <p className="text-lg font-medium text-text text-left">Students</p>
          <Button className="bg-accent text-white rounded-full px-4 py-2 hover:bg-accenthover transition duration-200">
            <img src={addStudent} alt="add student" />
            Add Student
          </Button>
        </div>

        <div className="flex w-full h-fit flex-row gap-3 items-center rounded-lg">
          <div className="w-64 h-fit px-2 flex justify-between border border-border rounded-full p-2 bg-white">
            <Input
              className="w-full h-full bg-transparent border-none rounded-full"
              placeholder="Find student..."
            />
            <img src={search} className="w-5 -ml-8" alt="" />
          </div>
          <Button className="text-text bg-transparent border border-border rounded-full px-4 py-2 hover:bg-bgsecondary transition duration-200">
            <img src={filter} alt="filter" />
            Filter
          </Button>
        </div>

        <div>
          <StudentDataTable columns={StudentColumns} data={students} />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;