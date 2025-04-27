import React from 'react'
import right from '../assets/rightArrow.svg'

const ClassRoomCard = ({room, capacity}) => {
  return (
    <div className='h-fit w-full px-4 py-3 border-[0.5px] border-border bg-white rounded-lg flex flex-col gap-2'>
        <div className="flex flex-col gap-3">
            <div className='w-full flex justify-between items-center'>
                <p className='text-text text-sm font-medium'>Class room</p>
                {/* <div className='flex h-fit items-end space-x-1 hover:cursor-pointer hover:scale-105 rounded-lg group'>
                    <p className='text-text text-md font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4  '>Change</p>
                        <img src={right} alt="right" className='w-5 h-5'/>
                </div> */}
            </div>

            <div className="w-full flex justify-between items-end gap-3">
                <p className='text-text text-5xl font-semibold'>{room}</p>
                <p className='text-[#71717A] text-sm font-normal'>Room capacity {capacity}</p>

            </div>
        </div>
        
    </div>
  )
}

export default ClassRoomCard