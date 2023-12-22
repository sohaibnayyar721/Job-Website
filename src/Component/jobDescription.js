import React, { useEffect } from 'react'
import Navbar from './navbar'
import Office from '../Assets/officeWorkSpace.jpg'
import SoftwareEngineer from '../Assets/SoftwareEngineer.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Heart from '../Assets/Heart.png'
import SendIcon from '@mui/icons-material/Send';
import DollarIcon from '../Assets/DollarIcon.png'
import ShareIcon from '@mui/icons-material/Share';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Footer from './footer';
import './jobDescription.css'
import { useState } from 'react';

function JobDescription({ getSingleJObId }) {
    
    let [descriptionData, setdescriptionData] = useState([])
    async function GetDescriptionData(id) {
        const data = await fetch(`http://localhost:4500/job/${getSingleJObId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({getSingleJObId:getSingleJObId})
        })

        const DescriptionData = await data.json()
        const jobData = DescriptionData.jobs
        setdescriptionData(jobData)
    }

    //    descriptionData.map((data)=>{
    //         console.log(data.jobTitle)
    //     })

    useEffect(() => {
        GetDescriptionData()
    }, [])

    console.log(descriptionData)

    return (

        <div className='overflow-hidden'>
            <Navbar />

            <div className='w-full h-[40vh]
            md:h-[60vh]
            lg:h-[70vh]'>
                <img src={Office} className='w-full h-full contain'></img>
            </div>

            {
                descriptionData.map((data) => {
                    return (
                        <div key={data._id} className='w-full px-5 py-5 flex flex-col gap-6 
                             lg:flex-row  lg:justify-between
                             md:px-14 md:py-12 '>

                            <div className='flex w-full flex-col 
                                lg:w-[63%]'>
                                <div className='flex flex-col py-6 border-gray-300 border-b-2'>
                                    <div className='setCenter flex flex-col items-center justify-center gap-4 flex-wrap
                                        md:items-center md:justify-between md:flex-row'>
                                        <div className='flex gap-4 ' >
                                            <div className='w-14 h-14 object-contain'>
                                                <img src={SoftwareEngineer}></img>
                                            </div>

                                            <div className='flex flex-col gap-2'>
                                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>{data.jobTitle}</p>
                                                <div className='flex gap-2 items-center'>
                                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>UI/UX Designer</p>
                                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                </div>

                                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                                    <div className='flex items-center'>
                                                        <LocationOnOutlinedIcon className='text-gray-500 ' />
                                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>Karachi, Pakistan</p>
                                                    </div>

                                                    <div className='flex gap-2 items-center justify-center'>
                                                        <CalendarTodayIcon className='text-gray-600 ' />
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

                                        <div className='setRigthcenter flex flex-col gap-3 px-r-4 
                                            md:items-end '>
                                            <div className='flex flex-wrap gap-4 
                                                md:flex-col'>

                                                <div className='setCenter flex gap-4 justify-end '>
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

                                            <p className='text-[#dc3545]'>  Deadline date: <span className='text-black font-medium'>{data.applicationDeadlineDate}</span></p>

                                            <div className='flex gap-3 items-center'>
                                                <img src={DollarIcon} className='w-6 h-6'></img>
                                                <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>{data.minSalary} - {data.maxSalary} <span className='text-[#64666C]'>/ month</span></p>
                                            </div>

                                        </div>


                                    </div>
                                </div>

                                <div className=''>
                                    <p className='text-[#64666C]'>
                                        {data.jobDescription}
                                    </p>
                                </div>

                                <div className='flex flex-col gap-6  mt-4'>
                                    <div className='flex  gap-3 items-center flex-wrap'>
                                        <p className='text-[#121212] text-base text-normal font-semibold'>Share this post: </p>

                                        <div className='flex  gap-3 items-center'>
                                            <FacebookRoundedIcon
                                                style={{ fontSize: '40px' }}
                                                className='text-black h-28 w-28' />

                                            <TwitterIcon
                                                style={{ fontSize: '40px' }}
                                                className='text-black h-28 w-28' />

                                            <LinkedInIcon
                                                style={{ fontSize: '40px' }}
                                                className='text-black h-28 w-28' />

                                            < PinterestIcon
                                                style={{ fontSize: '40px' }}
                                                className='text-black h-28 w-28' />
                                        </div>
                                    </div>

                                    <div className='flex gap-5 w-full h-52 overflow-x-scroll'>
                                        <img src={Office} className='w-72 h-full'></img>
                                        <img src={Office} className='w-72 h-full'></img>
                                        <img src={Office} className='w-72 h-full'></img>
                                        <img src={Office} className='w-72 h-full'></img>
                                        <img src={Office} className='w-72 h-full'></img>
                                        <img src={Office} className='w-72 h-full'></img>
                                    </div>

                                    <div className='w-full h-[60vh] rounded-lg'>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/TUN8PtDGRaA?controls=0&autoplay=1"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        // allowfullscreen
                                        ></iframe>
                                    </div>
                                </div>

                            </div>

                            <div className='w-full flex flex-col gap-8
                            lg:w-[30%]'>

                                <div className='w-full rounded bg-[#F5F5F5] px-5 py-3 flex flex-col gap-2'>
                                    <p className='text-xl font-semibold mt-3'>Information</p>

                                    <div className='flex flex-col '>
                                        <div className='flex flex-wrap items-center justify-between border-b-2 border-gray-300 py-4 '>
                                            <p className='text-lg text-gray-500 font-normal'>Date Posted</p>
                                            <p className='text-lg font-normal'>{data.date}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Location</p>
                                            <p className='text-lg font-normal'>{data.location}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className=' text-lg text-gray-500 font-normal'>Category</p>
                                            <p className='text-lg  font-normal'>{data.category}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Offered Salary:</p>
                                            <p className='text-lg font-normal'>{data.minSalary} - {data.maxSalary} / month</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Expiration date</p>
                                            <p className='text-lg font-normal'>{data.applicationDeadlineDate}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Experience</p>
                                            <p className='text-lg font-normal'>{data.experience}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Gender</p>
                                            <p className='text-lg font-normal'>{data.gender}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Industry</p>
                                            <p className='text-lg font-normal'>Seo, Banking</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Qualification</p>
                                            <p className='text-lg font-normal'>{data.qualification}</p>
                                        </div>

                                        <div className='flex flex-wrap  items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Career Level</p>
                                            <p className='text-lg font-normal'>{data.careerLevel}</p>
                                        </div>

                                        <div className='flex flex-wrap items-center justify-between py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Date Posted</p>
                                            <p className='text-lg font-normal'>{data.date}</p>
                                        </div>

                                    </div>

                                </div>

                                <div className='w-full rounded bg-[#F5F5F5] px-5 py-6 flex flex-col gap-2'>
                                    <p className='text-xl font-semibold '>Employer Information</p>

                                    <div className='flex flex-col'>

                                        <div className='flex items-center gap-3 border-b-2 border-gray-300 py-4'>
                                            <img src={SoftwareEngineer}></img>
                                            <div className='flex flex-col gap-1'>
                                                <p className=' text-base text-black font-medium'>Aprico Ltd</p>
                                                <p className='text-base text-[#14A077] font-normal'>View Profile</p>
                                            </div>

                                        </div>

                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className=' text-lg text-gray-500 font-normal'>Category</p>
                                            <p className='text-sm text-[#14A077] font-semibold'>Engineering</p>
                                        </div>

                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Founded Date:</p>
                                            <p className='text-lg font-normal'>1979</p>
                                        </div>

                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Location:</p>
                                            <p className='text-lg font-normal'>United States</p>
                                        </div>

                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Phone Number:</p>
                                            <p className='text-lg font-normal'>(+88)123-456-789</p>
                                        </div>

                                        <div className='flex items-center justify-between border-b-2 border-gray-300 py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Email:</p>
                                            <p className='text-lg font-normal'>apricoltd@apus.com</p>
                                        </div>

                                        <div className='flex flex-wrap items-center justify-between py-4'>
                                            <p className='text-lg text-gray-500 font-normal'>Socials:</p>
                                            <div className='flex  gap-3 items-center'>

                                                <FacebookRoundedIcon
                                                    style={{ fontSize: '35px' }}
                                                    className='text-black h-24 w-24' />

                                                <TwitterIcon
                                                    style={{ fontSize: '35px' }}
                                                    className='text-black ' />

                                                <LinkedInIcon
                                                    style={{ fontSize: '35px' }}
                                                    className='text-black h-28 w-28' />

                                                < PinterestIcon
                                                    style={{ fontSize: '35px' }}
                                                    className='text-black h-28 w-28' />
                                            </div>
                                        </div>

                                        <button className='hover:bg-[#14A077] hover:text-white w-full border-[1px] border-green-600 h-14 mt-4 text-base font-semibold rounded'>envato.com</button>

                                    </div>

                                </div>

                                <div className='w-full rounded bg-[#F5F5F5] px-5 py-6 flex flex-col gap-5'>
                                    <p className='text-xl font-semibold '>Contact Aprico Ltd</p>

                                    <div className='flex flex-col gap-'>

                                        <div className='w-full flex flex-col gap-3'>
                                            <input className='h-12 w-full rounded-lg px-3 outline-green-600 ' placeholder='Subject'></input>
                                            <input className='h-12 w-full rounded-lg px-3 outline-green-600' placeholder='hello'></input>
                                            <input className='h-12 w-full rounded-lg px-3 outline-green-600' placeholder='hello'></input>
                                            <input className='h-20  w-full rounded-lg px-3 outline-green-600' placeholder='Message'></input>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-6 items-center'>
                                        <button className='hover:bg-green-700 bg-[#14A077] text-white w-full  h-12 mt-4 text-base font-bold rounded'>
                                            Send Message</button>

                                        <a href='' className=''>Private Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

            <Footer />






            <div>

            </div>
        </div>

    )
}

export default JobDescription