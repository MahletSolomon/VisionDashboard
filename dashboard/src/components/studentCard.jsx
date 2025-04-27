import React from 'react'

const StudentCard = ({id, name, gender, age, payment, average, promotion}) => {
  return (
    <div className='h-fit w-full px-4 py-3 border-y-[0.5px] border-border bg-white flex justify-between items-center gap-4'>
        <checkbox className='w-5 h-5 border-[0.5px] border-border rounded-lg'/>
        <div className="flex flex-col">
            <p>{name}</p>
            <p>{id}</p>
        </div>
        <p>{gender}</p>
        <p>{age}</p>
        <p>
            {payment==0 ? 'Paid' : payment == 1? 'Over Due' : 'In Review'}
        </p>
        <p>{average}%</p>
        <div className='w-fit h-fit flex items-center justify-center rounded-full bg-[#F4F4F5] px-3 py-1'>

            <p>
                {promotion==0 ? 'Approved' : promotion == 1? 'Declined' : 'Pending'}
            </p>
        </div>
        <div>
            <button className='bg-[#F4F4F5] text-text text-sm font-medium px-2 py-1 rounded-lg'>...</button>
        </div>
    </div>
  )
}

export default StudentCard