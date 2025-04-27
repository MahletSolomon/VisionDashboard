import React, { useEffect, useState } from 'react'
import right from '../assets/mutedRight.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { useDispatch, useSelector } from 'react-redux';
import { setClasses, setSelectedClass } from '../redux/classSlice';

const ClassDropDown = () => {
    
  
  const dispatch = useDispatch();
  
  const handleClassSelection = (item) => {
    dispatch(setSelectedClass(item));
  };

  
  
    const classes = useSelector((state) => state.class.classes);
    const selectedClass = useSelector((state) => state.class.selectedClass);

    useEffect(() => {
        const fetchClassData = async () => {
            try {
                const response = await fetch('http://localhost:3000/classes');
                if (!response.ok) {
                    throw new Error('Failed to get students');
                }
                const result = await response.json();
                const classNames = result.map((res)=> res.name)
                dispatch(setClasses(classNames));
                if (classNames.length > 0) {
                    dispatch(setSelectedClass(classNames[0]));
                }
            
            } catch (err) {
                console.error(err);
            }
        };
        fetchClassData();
    }
    ,[dispatch])

  return (
    <div className='w-fit flex gap-2 items-center justify-center'>
       
        <DropdownMenu>
        <DropdownMenuTrigger className='border-0 focus:outline-none text-base'>
           <div 
            className='flex h-fit items-end space-x-1 hover:cursor-pointer hover:scale-105 rounded-lg group'
  
        >
            <p className='text-base text-muted'>Classes</p>
            <img src={right} alt="right" className='w-5 h-5'/>
            {selectedClass && (
            <p className='text-base'>Grade {selectedClass}</p>
            )
            }
        </div>          
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40 bg-bgsecondary border border-border rounded-lg shadow-md'>
            <DropdownMenuLabel>Classes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {classes.map((item) => (
            <DropdownMenuItem 
              key={item} 
              className='hover:cursor-pointer' 
              onClick={()=>handleClassSelection(item)}>
                {item}</DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      
        </DropdownMenu>
            
          
        
    </div>
  )
}

export default ClassDropDown