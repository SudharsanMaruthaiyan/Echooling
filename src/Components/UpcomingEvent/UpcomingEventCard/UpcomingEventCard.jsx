import { Calendar, MapPin } from 'lucide-react'
import React from 'react'

const UpcomingEventCard = ({image,desc,date,location}) => {
  return (
    <>
        <div>
            <div>
                <div id='flash-box'>
                    <div className=' relative'>
                        <img src={image} alt="Image" className=' rounded-t-lg' />
                        <div className=' flex items-center gap-1 absolute top-5 left-5 bg-[#1363df] text-white px-2 py-1 rounded-md'>
                            <Calendar className=' w-5'/>
                            <p className=' text-sm font-medium'>{date}</p>
                        </div>
                    </div>
                </div>
                <div className=' px-5 py-5 border-2 rounded-b-lg'>
                    <h1 className=' text-xl  font-medium'>{desc}</h1>
                    <div className=' flex items-center gap-1 py-2'>
                        <MapPin className=' w-5 stroke-[#1363df]'/>
                        <p className=' text-slate-600'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UpcomingEventCard