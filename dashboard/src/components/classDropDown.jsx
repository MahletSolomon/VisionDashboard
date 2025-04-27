import React from 'react'
import right from '../assets/mutedRight.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

const ClassDropDown = () => {
    const expandDropDown = () => {
       
    }
    const classes = ["11-A", "11-B", "11-C", "11-D"];
    const [selectedClass, setSelectedClass] = React.useState(classes[0]);


  return (
    <div className='w-fit flex gap-2 items-center justify-center'>
       
     
        
        <DropdownMenu>
        <DropdownMenuTrigger className='border-0 focus:outline-none text-base'>
           <div 
            className='flex h-fit items-end space-x-1 hover:cursor-pointer hover:scale-105 rounded-lg group'
            onClick={expandDropDown}
        >
            <p className='text-base text-muted'>Classes</p>
            <img src={right} alt="right" className='w-5 h-5'/>
          
        </div>          
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40 bg-bgsecondary border border-border rounded-lg shadow-md'>
            <DropdownMenuLabel>Classes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {classes.map((item) => (
            <DropdownMenuItem key={item} className='hover:cursor-pointer' onClick={()=>setSelectedClass(item)}>
                {item}</DropdownMenuItem>
            ))}
        </DropdownMenuContent>
        </DropdownMenu>
            {selectedClass && (
            <p className='text-base'>Grade {selectedClass}</p>
            )
            }
          
        
    </div>
  )
}

export default ClassDropDown