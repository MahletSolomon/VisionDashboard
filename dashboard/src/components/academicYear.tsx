import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'; // Assuming you're using Lucide icons


const AcademicYear : React.FC = () => {
    const currentYear = new Date().getFullYear()
    const [selectedYear, setSelectedYear] = useState<number>(currentYear)

    const nextYear = () : void => {
        if (selectedYear < currentYear) {
            setSelectedYear(selectedYear + 1)
        }

    }

    const previousYear = () : void => {
        setSelectedYear(selectedYear - 1)
    }

  return (
     <div className="flex items-center gap-2 py-2 px-4 border border-border rounded-full bg-bgsecondary">
      <p className=" text-muted">Academic year:</p>
      <div className="flex items-center gap-2">
        <p className=" font-semibold text-black">{`${selectedYear-1}/${selectedYear}`}</p>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={nextYear}
            className="hover:scale-105 transition-transform"
          >
            <ChevronUp className="w-3 h-3 text-black" />
          </button>
          <button
            onClick={previousYear}
            className="hover:scale-105 transition-transform"
          >
            <ChevronDown className="w-3 h-3 text-black" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AcademicYear