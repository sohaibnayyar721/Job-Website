import React from 'react'
import Navbar from './navbar'
import Office from '../Assets/officeWorkSpace.jpg'
import SoftwareEngineer from '../Assets/SoftwareEngineer.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Heart from '../Assets/Heart.png'
import SendIcon from '@mui/icons-material/Send';
import DollarIcon from '../Assets/DollarIcon.png'
import ShareIcon from '@mui/icons-material/Share';
function JobDescription() {
    return (
        <div>
            <div>
                <Navbar />
                {/* border-gray-300 border-b-2 */}
                <div className='w-full h-[40vh] '>
                    <img src={Office} className='w-full h-full fill'></img>
                </div>

                <div className='flex flex-col px-12 border-gray-400 border-2'>
                    <div className='flex flex-col items-center justify-center gap-4  py-6 flex-wrap
                     md:items-center md:justify-between md:flex-row'>
                        <div className='flex gap-4  ' >
                            <div className='w-14 h-14 object-contain'>
                                <img src={SoftwareEngineer}></img>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>It & Software</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>UI/UX Designer</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                    <div className='flex items-center'>
                                        <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>Karachi, Pakistan</p>
                                    </div>

                                    <div className='flex gap-2 items-center justify-center'>
                                        <CalendarTodayIcon className='text-gray-600 transform scale-75' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>23, May 2023</p>
                                    </div>
                                </div>

                                <div>
                                    <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                        Part Time
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3 px-r-4 
                        md:items-end '>
                            <div className='flex gap-4 
                            md:flex-col'>

                                <div className='flex gap-4 md:items-end 
                                '>
                                    <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                        <ShareIcon />
                                    </div>

                                    <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                        <img src={Heart}></img>
                                    </div>

                                </div>

                                <button className='text-white font-bold bg-[#14A077] px-12 py-4 rounded'>
                                    <div className='flex gap-2 items-center justify-center'>
                                        <SendIcon className=' ' />
                                        <p>Apply Now</p>
                                    </div>
                                </button>
                            </div>



                            <p className='text-[#dc3545]'>  Deadline date: <span className='text-black font-medium'>June 14, 2030</span></p>

                            <div className='flex gap-3 items-center'>
                                <img src={DollarIcon} className='w-6 h-6'></img>
                                <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>$45 - $78 <span className='text-[#64666C]'>/ month</span></p>
                            </div>

                        </div>


                    </div>
                </div>



                <div>

                </div>
            </div>

        </div>
    )
}

export default JobDescription