import React from 'react'
import right from '../assets/rightArrow.svg'
import english from '../assets/english.svg'
import math from '../assets/math.svg'
import science from '../assets/science.svg'
import amharic from '../assets/amharic.svg'
import ict from '../assets/ict.svg'
import music from '../assets/music.svg'
import sport from '../assets/sport.svg'
import social from '../assets/social.svg'
import spoken from '../assets/spoken.svg'
import image from '../assets/image.png'


const TeacherCard = ({subject='no subject', name, email, profilePicture=image, isHomeroom=false}) => {
  return (
    <div className='h-fit px-4 py-3 border-[0.5px] border-border bg-white rounded-lg flex flex-col gap-2'>
        <div className="flex flex-col gap-3">
            <div className='w-full flex justify-between items-center'>
                <div className='w-fit flex items-center gap-2'>
                    {
                        !isHomeroom && (
                            subject === 'English' ? <img src={english} alt="english" className=''/> :
                            subject === 'Math' ? <img src={math} alt="math" className=''/> :
                            subject === 'Science' ? <img src={science} alt="science" className=''/> :
                            subject === 'Amharic' ? <img src={amharic} alt="amharic" className=''/> :
                            subject === 'ICT' ? <img src={ict} alt="ict" className=''/> :
                            subject === 'Music' ? <img src={music} alt="music" className=''/> :
                            subject === 'Sport' ? <img src={sport} alt="sport" className=''/> :
                            subject === 'Social' ? <img src={social} alt="social" className=''/> :
                            subject === 'Spoken' ? <img src={spoken} alt="spoken" className=''/> :
                            null
                        )
                    }
                    <p className='text-text text-sm font-medium'>
                        {isHomeroom ? 'Homeroom Teacher' : subject}
                    </p>
                </div>
                <div className='flex items-end gap-2 hover:cursor-pointer hover:scale-105 rounded-lg group'>
                    <p className='text-text text-sm font-medium group-hover:underline group-hover:decoration-[0.7px] group-hover:underline-offset-4  '>Change</p>
                    <img src={right} alt="right" className='w-full h-full'/>
                </div>
            </div>

            <div className="w-full h-fit flex items-center gap-4">
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-[#F4F4F5]'>
                    <img src={profilePicture} alt="" />

                </div>
                <div className='h-full flex flex-col items-start'>
                    <p className='text-text text-md font-semibold'>
                        {name? name : 'no name'}
                    </p>
                    <p className='text-[#71717A] text-sm font-normal'>
                        {email? email : 'no email provided'}
                    </p>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default TeacherCard