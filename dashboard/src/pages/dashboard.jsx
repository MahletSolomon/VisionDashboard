import React, { useEffect, useState } from 'react'
import ClassDropDown from '../components/classDropDown'
import AcademicYear from '../components/academicYear'
import LanguageButton from '../components/languageButton'
import NotificationDropdown from '../components/notificationDropdown'
import TopBar from '../components/topBar'
import OverviewCard from '../components/overviewCard'
import StudentCard from '../components/studentCard'
import TeacherCard from '../components/teacherCard'
import ClassRoomCard from '../components/classroomCard'
import ClassAverageCard from '../components/classAverageCard'


const Dashboard = () => {

  const [marks, setMarks] = useState([])
  const [averageMarks, setAverageMarks] = useState(0)

  useEffect(() => {
    const fetchClassData = async () => {
      try {
        const response = await fetch('http://localhost:3000/classes');
        if (!response.ok) {
          throw new Error('Failed to get students');
        }

        
        const result = await response.json();

        // Convert marks to numbers if they are strings
        const numericMarks = result.map((item) => ({
          ...item,
          marks: Number(item.marks), // Ensure marks are numbers
        }));
        
        const classes = result.map((res)=> res.name)
        const rooms = result.map((res)=> res.room)
        setMarks(numericMarks);
        console.log(classes)

        // Calculate total and average marks
        const totalMarks = numericMarks.reduce((acc, item) => acc + item.marks, 0);
        const averageMarks = totalMarks / numericMarks.length;

        setAverageMarks(averageMarks); // Set the average marks
      } catch (err) {
        console.error(err);
      }
    };

    fetchClassData();
  },[])


  return (
    <div className='w-full h-screen flex flex-col gap-4'> 
      {/* <div className="w-full absolute top-0 left-0 h-full z-0"> */}
        <TopBar/>
      {/* </div> */}


      <div className='w-full flex flex-col gap-6 '>
        <p className="text-lg text-left">Grade 11-B (Home room class)</p>

        {/* OVERVIEW */}
        <div className="w-full h-fit flex flex-col justify-center gap-3 bg-bgsecondary text-left rounded-lg border border-border py-4 px-6">
          <h3 className="text-lg font-semibold">Overview</h3>
          <div className="grid grid-cols-3 gap-2 auto-rows-fr">
            {/* First column: ClassAverageCard spans all rows */}
            <ClassAverageCard
              marks={marks}
              classAverage={averageMarks}
              className="col-span-3 md:col-span-1 row-span-2"
            />

            {/* Second column: Two cards */}
            <OverviewCard title="Students" data="37" />
            <ClassRoomCard room="102" capacity={42} />

            {/* Third column: Two cards */}
            <OverviewCard title="Today's attendance" data="33" view={true}/>
            <TeacherCard name="Mr. John Doe" subject="Physics" isHomeroom={true} />
          </div>
        </div>

        <div className="w-full h-fit flex flex-col justify-center gap-3 bg-bgsecondary text-left rounded-lg border border-border py-4 px-6">

        </div>


    </div>
    </div>
  )
}

export default Dashboard