import React from 'react'

const ChangableCard = ({title, data}) => {
  return (
    <div className='h-fit w-[305px] p-4 border-[0.5px] border-border bg-white rounded-lg flex flex-col gap-2'>
        <div className="flex flex-col gap-4">
            <div className='w-full flex justify-between items-center gap-4'>
                <p className='text-text text-md font-medium'>Total Revenue</p>
                <div className='flex h-fit items-center space-x-2 hover:cursor-pointer hover:scale-105 rounded-lg p-2 group'>
                    <p className='text-text text-sm font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4  '>View</p>
                    {/* <img src={right} alt="right" className='w-4 h-4'/> */}
                </div>
            </div>

            <div className="w-fit">
                <p className='text-text text-5xl font-semibold'>37</p>
            </div>
        </div>
        
    </div>
  )
}

export default ChangableCard