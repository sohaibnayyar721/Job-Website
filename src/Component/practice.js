import React, { useEffect, useState } from 'react'
import SoftwareEngineer from '../Assets/SoftwareEngineer.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Heart from '../Assets/Heart.png'
import DollarIcon from '../Assets/DollarIcon.png'
function Practice() {
    let [getLocation, setGetLocation] = useState('')
    let [getJobTittle, setJobTittle] = useState('')
    let [getSalary, setSalary] = useState('')



    console.log(getLocation)
    console.log(getJobTittle)

    let setFilters = { location: getLocation, jobName: getJobTittle }

    async function postFilters() {
        let postData = await fetch('http://localhost:4500/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(setFilters)
        })

    }

    useEffect(() => {
        postFilters()
    }, [getLocation, getJobTittle])

    return (
        <div className='w-[70%] bg-yellow-300 gap-4 grid grid-cols-2'>
            <div className='w-full '>


                <div className='w-full h-32 bg-red-300 border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4 flex flex-col gap-4
         md:h-72'>
                    <div className='flex gap-4
            md:justify-between'>

                        <div className='flex gap-4 ' >
                            <div className='w-14 h-14 object-contain'>
                                <img src={SoftwareEngineer}></img>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>jobTitle</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>category</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                    <div className='flex items-center'>

                                        <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>location</p>
                                    </div>

                                    <div className='flex gap-2 items-center justify-center'>
                                        <CalendarTodayIcon className='text-gray-600 transform scale-75' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>date</p>
                                    </div>


                                </div>

                            </div>


                        </div>


                        <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                            <img src={Heart}></img>
                        </div>

                    </div>

                    <div>
                        <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                            type
                        </button>
                    </div>

                    <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                        <div className='flex gap-3 items-center'>
                            <img src={DollarIcon} className='w-6 h-6'></img>
                            <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>minSalary - $maxSalary<span className='text-[#64666C]'>/ month</span></p>
                        </div>
                        <p className='text-[#64666C]'>date</p>
                    </div>

                </div>


            </div>

            <div className='w-full '>


                <div className='w-full h-32 bg-red-300 border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4 flex flex-col gap-4
md:h-72'>
                    <div className='flex gap-4
md:justify-between'>

                        <div className='flex gap-4 ' >
                            <div className='w-14 h-14 object-contain'>
                                <img src={SoftwareEngineer}></img>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>jobTitle</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>category</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                    <div className='flex items-center'>

                                        <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>location</p>
                                    </div>

                                    <div className='flex gap-2 items-center justify-center'>
                                        <CalendarTodayIcon className='text-gray-600 transform scale-75' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>date</p>
                                    </div>


                                </div>

                            </div>


                        </div>


                        <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                            <img src={Heart}></img>
                        </div>

                    </div>

                    <div>
                        <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                            type
                        </button>
                    </div>

                    <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                        <div className='flex gap-3 items-center'>
                            <img src={DollarIcon} className='w-6 h-6'></img>
                            <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>minSalary - $maxSalary<span className='text-[#64666C]'>/ month</span></p>
                        </div>
                        <p className='text-[#64666C]'>date</p>
                    </div>

                </div>


            </div>

            <div className='w-full '>


                <div className='w-full h-32 bg-red-300 border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4 flex flex-col gap-4
md:h-72'>
                    <div className='flex gap-4
md:justify-between'>

                        <div className='flex gap-4 ' >
                            <div className='w-14 h-14 object-contain'>
                                <img src={SoftwareEngineer}></img>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>jobTitle</p>
                                <div className='flex gap-2 items-center'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>category</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                    <div className='flex items-center'>

                                        <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>location</p>
                                    </div>

                                    <div className='flex gap-2 items-center justify-center'>
                                        <CalendarTodayIcon className='text-gray-600 transform scale-75' />
                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>date</p>
                                    </div>


                                </div>

                            </div>


                        </div>


                        <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                            <img src={Heart}></img>
                        </div>

                    </div>

                    <div>
                        <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                            type
                        </button>
                    </div>

                    <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                        <div className='flex gap-3 items-center'>
                            <img src={DollarIcon} className='w-6 h-6'></img>
                            <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>minSalary - $maxSalary<span className='text-[#64666C]'>/ month</span></p>
                        </div>
                        <p className='text-[#64666C]'>date</p>
                    </div>

                </div>


            </div>
        </div>

    )
}

export default Practice