import React, { useState } from 'react'
import PersonImage from '../Assets/PersonImage.png'
import SearchIcon from '../Assets/SearchIcon.png'
import locationIcon from '../Assets/locationIcon.png'
import Bar from '../Assets/bar.png'
import PanadonLogo from '../Assets/panadonLogo.png'
import SoftwareEngineer from '../Assets/SoftwareEngineer.png'
import Heart from '../Assets/Heart.png'
import DollarIcon from '../Assets/DollarIcon.png'
import DataScienceLogo from '../Assets/DataScienceLogo.png'
import SalesSpecialistLogo from '../Assets/SalesSpecialistLogo.png'
import GermanyPicture from '../Assets/GermanyPicture.png'
import WorldPicture from '../Assets/WorldPicture.png'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './animation.css'
import './animate.css'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
// import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Content() {

    let [getFeaturedJobData, setGetFeaturedJobData] = useState([])
    let [getTotalJob, setGetTotalJob] = useState([])

    let [getFeatureJobId, setGetFeatureJobId] = useState('')
    function getFeatureJobIdFunction(id) {
        setGetFeatureJobId(id)
    }
    console.log(getFeatureJobId)
    async function getFeaturedJob() {
        const getFeaturedJob = await fetch('http://localhost:4500/getData', {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const response = await getFeaturedJob.json()
        setGetFeaturedJobData(response.featuredJob)
        setGetTotalJob(response.jobForEachCountry[0])

    }

    useEffect(() => {

        getFeaturedJob()

        const WOW = require("wow.js");
        window.wow = new WOW({
            live: false,
        });
        window.wow.init();
    }, []);

    console.log(getFeaturedJobData)
    console.log(getTotalJob)
    // for (const keys of Object.keys(getTotalJob)) {
    //     console.log(keys)
    // }

    // for (const value of Object.values(getTotalJob)) {
    //     console.log(value)
    // }
    return (
        <div className='flex flex-col bg-white gap-8'>

            <div>
                <div className='flex flex-col bg-[#F4EFE7]
                    md:flex-row  '>

                    <div className=' flex w-full flex-col gap-10 px-5 py-8
                            md:w-[100%] md:px-4 md:py-20
                            lg:w-[100%] lg:px-14 lg:py-20'>

                        <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInUp'>
                            <div className=' flex flex-col gap-6 '>

                                <div className=' gap-6 flex-col text-4xl mt-2'>
                                    <p className=' text-[#123841] font-sans font-plus-jakarta font-semibold
                                        md:leading-tight md:text-5xl 
                                        lg:text-6xl'
                                    >Find The Job That </p>


                                    <p className=' text-[#123841] font-sans font-plus-jakarta font-semibold
                                    md:leading-tight md:text-5xl 
                                    lg:text-6xl'
                                    >Fits Your Life </p>

                                </div>


                                <div className='w-full md:w-[70%] '>
                                    <p className='text-[#64666C] font-gilroy-regular  text-xl leading-normal'>Resume-Library is a true performance-based job board. Enjoy custom hiring products and access to up to 10,000 new resume registrations daily, with no subscriptions or user licences.</p>
                                </div>

                                <div className='flex flex-col gap-5 '>
                                    <div className=' h-auto flex flex-col gap-3 px-3 items-center border-2 rounded border-[#1DBF73] bg-white py-2
                                    md:flex-row md:gap-2 md:px-3
                                    '>

                                        <div className='w-full h-16 border-b-2 border-gray-300 flex flex-row items-center gap-2 px-2
                                        md:border-none'>
                                            <img src={SearchIcon} className='w-8 h-8'></img>
                                            <input placeholder='Job title, keywords or Company' className='w-full outline-none '></input>
                                        </div>

                                        <img src={Bar} className='hidden md:flex'></img>

                                        <div className='w-full h-16 border-b-2 border-gray-300 flex flex-row items-center gap-2 px-2
                                        md:border-none'>
                                            <img src={locationIcon} className='w-8 h-8'></img>

                                            <input placeholder='All Location' className='w-full outline-none '></input>
                                            <select
                                                id="currency"
                                                name="currency"
                                                className="h-full rounded-md outline-none bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                                            >
                                                <option></option>

                                            </select>
                                        </div>

                                        <button className=' w-full h-14  bg-green-700 rounded text-white font-inter text-xl  font-sans font-plus-jakarta font-semibold
                                             md:w-72 md:px-4
                                        '>Find Jobs</button>
                                    </div>

                                    <div className='flex gap-3 flex-wrap 
                                        md:flex-row md:gap-2
                                        '>
                                        <p className='text-[#64666C] font-semibold'>Designer </p>
                                        <p className='text-[#64666C] font-semibold'>Developer </p>
                                        <p className='text-[#64666C] font-semibold'>Tester </p>
                                        <p className='text-[#64666C] font-semibold'>ML Expert </p>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <img src={PersonImage} data-wow-duration="1s" data-wow-delay="1s" className=' wow zoomIn hidden h-full 
                    lg:w-[30%] lg:h-[70vh] lg:flex lg:mt-20'></img>

                </div>

                <div className='w-full bg-[#123841] items-end justify-end py-10 px-5 '>
                    <div className='wow fadeInUp flex flex-col gap-8' data-wow-duration="1s" data-wow-delay="1s">
                        <p className='text-white text-center font-gilroy-bold text-xl font-bold leading-normal'>Over 100,000 recruiters use JOBTAX to modernize their hiring</p>

                        <div className='w-full flex flex-row items-center justify-between
                    md:justify-center '>

                            <button className='w-10 h-10 rounded-full bg-white
                        md:hidden'><KeyboardArrowLeftIcon /></button>

                            <div className=' overflow-x-scroll w-[69%] object-cover flex items-center justify-start 
                                        md:overflow-hidden md:items-center md:justify-center'>
                                <img src={PanadonLogo} className='w-full h-12'></img>
                                <img src={PanadonLogo} className='w-full h-12'></img>
                                <img src={PanadonLogo} className='w-full h-12'></img>
                                <img src={PanadonLogo} className='w-full h-12'></img>
                            </div>
                            <button className='w-10 h-10 rounded-full bg-white
                        md:hidden'
                            ><KeyboardArrowRightIcon /></button>
                        </div>
                    </div>


                </div>
            </div>


            <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInUp  flex flex-col gap-2 bg-white
            lg:px-14'>
                <div className='flex flex-col gap-2
                    md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-black dark:text-white font-plus-jakarta-sans text-3xl font-bold'>Browse by category</p>
                        <p className='text-gray-600 font-plus-jakarta-sans text-base font-normal'>Recruitment Made Easy in 100 seconds</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <p className='text-black text-xl font-semibold'>All categories</p>
                        <EastIcon className='text-[#14A077]' />
                    </div>

                </div>


                <div className='w-full flex flex-col rounded-md mt-5 gap-3
                md:grid md:grid-cols-5'>

                    <div

                        className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white '>
                        <p className=' font-plus-jakarta-sans text-xl font-bold '>Human Resource</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className=' font-plus-jakarta-sans text-xl font-bold'>Project Manager</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className=' font-plus-jakarta-sans text-xl font-bold'>Data Science</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className=' font-plus-jakarta-sans text-xl font-bold'>Human Resource</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className=' font-plus-jakarta-sans text-xl font-bold'>Human Resource</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className='font-plus-jakarta-sans text-xl font-bold'>Human Resource</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                    <div className='w-full  px-4 rounded-md flex flex-col py-4 gap-1 bg-[#F5F5F5] hover:bg-[#121212] before:text-black hover:text-white'>
                        <p className=' font-plus-jakarta-sans text-xl font-bold'>Human Resource</p>
                        <p className='font-plus-jakarta-sans text-md font-normal'> 2 Jobs available</p>
                        <div className='mt-2 flex items-center'>
                            <p className='text-teal-500 font-plus-jakarta-sans text-md font-semibold'>Explore Job</p>
                            <KeyboardArrowRightIcon className='text-teal-500' />
                        </div>
                    </div>

                </div>
            </div>

            <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInUp flex flex-col gap-6 bg-white
             lg:px-14'>

                <div className='flex flex-col items-center justify-center bg-white gap-3'>
                    <p className='text-gray-700 text-center font-bold text-3xl'>Featured Job</p>
                    <p className='text-[#404145] text-center font-normal text-xl'>Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                </div>

                <div className='flex flex-col gap-4 bg-white'>

                    <div className='flex flex-row gap-4 overflow-x-scroll
                    md:items-center md:justify-center'>

                        <button className='whitespace-nowrap rounded-3xl bg-[#14A077] text-lg font-bold text-white px-8 py-3
                        md:py-2'>
                            All Jobs
                        </button>

                        <button className='whitespace-nowrap rounded-3xl bg-[#14A077] text-lg font-bold text-white px-4 py-3
                        md:py-2'>
                            It & Networking
                        </button>

                        <button className='whitespace-nowrap rounded-3xl bg-[#14A077] text-lg font-bold text-white px-4 py-3
                        md:py-2'>
                            Data Science
                        </button>

                        <button className='whitespace-nowrap rounded-3xl bg-[#14A077] text-lg font-bold text-white px-4 py-3
                        md:py-2'>
                            Sales & Marketing
                        </button>

                    </div>

                    <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInRight flex flex-col gap-5 mt-3 
                    md:grid md:grid-cols-2 md:gap-8'>



                        {
                            getFeaturedJobData.map((data) => {
                                return (
                                    <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'
                                        onClick={() => { getFeatureJobIdFunction(data._id) }}
                                    >

                                        <div className='flex gap-4
                                            md:justify-between'>

                                            <div className='flex gap-4 ' >
                                                <div className='w-14 h-14 object-contain'>
                                                    <img src={SoftwareEngineer}></img>
                                                </div>

                                                <div className='flex flex-col gap-2'>
                                                    <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>{data.jobTitle}</p>
                                                    <div className='flex gap-2 items-center'>
                                                        <p className='text-black font-plus-jakarta-sans text-xl font-bold'>{data.category}</p>
                                                        <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                    </div>

                                                    <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                                        <div className='flex items-center'>
                                                            {/* <img src={locationIcon} className='w-7 h-7'></img> */}
                                                            <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                                            <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>{data.location}</p>
                                                        </div>

                                                        <div className='flex gap-2 items-center justify-center'>
                                                            <CalendarTodayIcon className='text-gray-600 transform scale-75' />
                                                            <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>{data.date}</p>
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
                                                Part Time
                                            </button>
                                        </div>

                                        <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                            <div className='flex gap-3 items-center'>
                                                <img src={DollarIcon} className='w-6 h-6'></img>
                                                <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>${data.minSalary} - ${data.maxSalary} <span className='text-[#64666C]'>/ month</span></p>
                                            </div>
                                            <p className='text-[#64666C]'>{data.date}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        {/* {
                                a[0].map((data) => {
                                    return (
                                        <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'>

                                            <div className='flex gap-4
                        md:justify-between'>

                                                <div className='flex gap-4'>
                                                    <div className='w-14 h-14 object-contain'>
                                                        <img src={SoftwareEngineer}></img>
                                                    </div>

                                                    <div className='flex flex-col'>
                                                        <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>{data[0].jobDomain}</p>
                                                        <div className='flex gap-2 items-center'>
                                                            <p className='text-black font-plus-jakarta-sans text-xl font-bold'>{data[0].jobName}</p>
                                                            <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                                    <img src={Heart}></img>
                                                </div>

                                            </div>
                                            <div className='w-full flex items-center flex-wrap -300'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon}></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>{data[0].location}</p>
                                                </div>



                                            </div>
                                            <div>
                                                <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                                    Part Time
                                                </button>
                                            </div>

                                            <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                                <div className='flex gap-3 items-center'>
                                                    <img src={DollarIcon} className='w-6 h-6'></img>
                                                    <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>{data[0].salary}<span className='text-[#64666C]'>/ month</span></p>
                                                </div>
                                                <p className='text-[#64666C]'>{data.date}</p>
                                            </div>

                                        </div>
                                    )
                                })
                            } */}

                        {/* {
                            Object.entries(getFeaturedJobData).map((data) => {

                                        return (
                                            <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'>

                                                <div className='flex gap-4
                                                    md:justify-between'>

                                                    <div className='flex gap-4'>
                                                        <div className='w-14 h-14 object-contain'>
                                                            <img src={SoftwareEngineer}></img>
                                                        </div>

                                                        <div className='flex flex-col'>
                                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>{data[0].jobDomain}</p>
                                                            <div className='flex gap-2 items-center'>
                                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>{data[0].jobName}</p>
                                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                                        <img src={Heart}></img>
                                                    </div>

                                                </div>
                                                <div className='w-full flex items-center flex-wrap -300'>
                                                    <div className='flex items-center'>
                                                        <img src={locationIcon}></img>
                                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>{data[0].location}</p>
                                                    </div>



                                                </div>
                                                <div>
                                                    <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                                        Part Time
                                                    </button>
                                                </div>

                                                <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                                    <div className='flex gap-3 items-center'>
                                                        <img src={DollarIcon} className='w-6 h-6'></img>
                                                        <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>{data[0].salary}<span className='text-[#64666C]'>/ month</span></p>
                                                    </div>
                                                    <p className='text-[#64666C]'>{data.date}</p>
                                                </div>

                                            </div>
                                        )
                            })
                        } */}
                        {/* {
                            featuredJobs.map((data) => {
                                return (
                                    <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'>

                                        <div className='flex gap-4
                                            md:justify-between'>

                                            <div className='flex gap-4'>
                                                <div className='w-14 h-14 object-contain'>
                                                    <img src={SoftwareEngineer}></img>
                                                </div>

                                                <div className='flex flex-col'>
                                                    <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>{data.jobDomain}</p>
                                                    <div className='flex gap-2 items-center'>
                                                        <p className='text-black font-plus-jakarta-sans text-xl font-bold'>{data.jobName}</p>
                                                        <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                    </div>

                                                </div>
                                            </div>


                                            <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                                <img src={Heart}></img>
                                            </div>

                                        </div>
                                        <div className='w-full flex items-center flex-wrap -300'>
                                            <div className='flex items-center'>
                                                <img src={locationIcon}></img>
                                                <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>{data.location}</p>
                                            </div>



                                        </div>
                                        <div>
                                            <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                                Part Time
                                            </button>
                                        </div>

                                        <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                            <div className='flex gap-3 items-center'>
                                                <img src={DollarIcon} className='w-6 h-6'></img>
                                                <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>{data.salary}<span className='text-[#64666C]'>/ month</span></p>
                                            </div>
                                            <p className='text-[#64666C]'>{data.date}</p>
                                        </div>

                                    </div>
                                )
                            })
                        } */}

                        {/* <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'>

                            <div className='flex gap-4
                            md:justify-between'>

                                <div className='flex gap-4'>
                                    <div className='w-14 h-14 object-contain'>
                                        <img src={SoftwareEngineer}></img>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                        <div className='flex gap-2 items-center'>
                                            <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Software Engineer</p>
                                            <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                        </div>

                                    </div>
                                </div>


                                <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                    <img src={Heart}></img>
                                </div>

                            </div>
                            <div className='w-full flex items-center flex-wrap -300'>
                                <div className='flex items-center'>
                                    <img src={locationIcon}></img>
                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                </div>

                                <div className='flex items-center'>
                                    <img src={locationIcon}></img>
                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                </div>

                            </div>
                            <div>
                                <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                    Part Time
                                </button>
                            </div>

                            <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                <div className='flex gap-3 items-center'>
                                    <img src={DollarIcon} className='w-6 h-6'></img>
                                    <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>$400-450<span className='text-[#64666C]'>/ month</span></p>
                                </div>
                                <p className='text-[#64666C]'>June 14, 2030</p>
                            </div>

                        </div>

                        <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'>

                            <div className='flex gap-4
md:justify-between'>

                                <div className='flex gap-4'>
                                    <div className='w-14 h-14 object-contain'>
                                        <img src={SoftwareEngineer}></img>
                                    </div>

                                    <div className='flex flex-col'>
                                        <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                        <div className='flex gap-2 items-center'>
                                            <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Software Engineer</p>
                                            <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                        </div>

                                    </div>
                                </div>


                                <div className='w-10 h-10 rounded-full object-contain border-2 border-gray-400 flex items-center justify-center'>
                                    <img src={Heart}></img>
                                </div>

                            </div>
                            <div className='w-full flex items-center flex-wrap -300'>
                                <div className='flex items-center'>
                                    <img src={locationIcon}></img>
                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                </div>

                                <div className='flex items-center'>
                                    <img src={locationIcon}></img>
                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                </div>

                            </div>
                            <div>
                                <button className='flex items-center justify-start py-2 px-6 rounded-3xl bg-[#F1F1F1]'>
                                    Part Time
                                </button>
                            </div>

                            <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                <div className='flex gap-3 items-center'>
                                    <img src={DollarIcon} className='w-6 h-6'></img>
                                    <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>$400-450<span className='text-[#64666C]'>/ month</span></p>
                                </div>
                                <p className='text-[#64666C]'>June 14, 2030</p>
                            </div>

                        </div> */}

                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-6 px-4 bg-[#F5F5F2] py-16'>

                <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInUp flex flex-col items-center justify-center '>
                    <p className='text-gray-700 text-center font-bold text-3xl mt-4'>Jobs By Location</p>
                    <p className='text-[#404145] text-center font-normal text-xl mt-4'>Find your favourite jobs and get the benefits of yourself</p>
                </div>

                <div className='flex flex-col 
                md:flex-row '>
                    <div className='w-full '>
                        <div className='w-full overflow-x-auto overflow-hidden flex gap-4'>

                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                            <img src={GermanyPicture} className='w-44 h-[40vh] md:w-72 md:h-[60vh] '></img>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col
                md:flex-row'>
                <div className='w-full flex items-center justify-center'>
                    <div data-wow-duration="1s" data-wow-delay="1s" className='wow zoomIn w-[80%] h-[65vh] mt-6'>
                        <img src={WorldPicture} className='w-full h-full object-fit'></img>
                    </div>
                </div>


                <div className='w-full flex items-center justify-center'>
                    <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInRight px-7 gap-4 flex flex-col justify-center'>
                        <p className='text-left text-gray-700 font-semibold text-3xl '>Get the job that's right for you</p>
                        <p className='text-left text-gray-700 font-normal text-lg leading-5'>Search millions of jobs and get the inside scoop on companies with employee
                            reviews, personalized salary tools, and more.</p>

                        <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className='text-[#14A077]' />
                            <p className='text-left text-gray-700 font-normal text-lg'>Access to millions of job seekers</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className='text-[#14A077]' />
                            <p className='text-left text-gray-700 font-normal text-lg'>Only pay for the candidates you want to contact</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className='text-[#14A077]' />
                            <p className='text-left text-gray-700 font-normal text-lg'>Post unlimited jobs for free—all from one place</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className='text-[#14A077]' />
                            <p className='text-left text-gray-700 font-normal text-lg'>Premium job placement on SimplyHired, Indeed, & over 100 job sites</p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <CheckCircleIcon className='text-[#14A077]' />
                            <p className='text-left text-gray-700 font-normal text-lg'>Hiring solutions & pricing that works with seasonal hiring changes</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='w-full px-7 gap-4 flex flex-col'>
                <p className='text-left text-gray-700 font-semibold text-3xl '>Get the job that's right for you</p>
                <p className='text-left text-gray-700 font-normal text-lg leading-5'>Search millions of jobs and get the inside scoop on companies with employee
                    reviews, personalized salary tools, and more.</p>

                <div className='flex gap-2 items-center'>
                    <CheckCircleIcon className='text-[#14A077]' />
                    <p className='text-left text-gray-700 font-normal text-lg'>Access to millions of job seekers</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <CheckCircleIcon className='text-[#14A077]' />
                    <p className='text-left text-gray-700 font-normal text-lg'>Only pay for the candidates you want to contact</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <CheckCircleIcon className='text-[#14A077]' />
                    <p className='text-left text-gray-700 font-normal text-lg'>Post unlimited jobs for free—all from one place</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <CheckCircleIcon className='text-[#14A077]' />
                    <p className='text-left text-gray-700 font-normal text-lg'>Premium job placement on SimplyHired, Indeed, & over 100 job sites</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <CheckCircleIcon className='text-[#14A077]' />
                    <p className='text-left text-gray-700 font-normal text-lg'>Hiring solutions & pricing that works with seasonal hiring changes</p>
                </div>
            </div> */}

            <div data-wow-duration="1s" data-wow-delay="1s" className='wow fadeInUp flex flex-col gap-2 bg-white px-5
            lg:px-14'>
                <div className='flex gap-2 flex-col
                md:justify-between md:items-center md:flex-row
                '>

                    <div className=' flex flex-col gap-2 bg-white '>
                        <p className='text-black dark:text-white font-plus-jakarta-sans text-3xl font-semibold'>Top Employers</p>
                        <p className='text-gray-600 font-plus-jakarta-sans text-base font-normal'>Showing companies based on reviews and recent job openings</p>

                    </div>

                    <div>
                        <p className='text-black text-xl font-semibold'>All Employers</p>
                    </div>

                </div>

                {/* <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop
                    className="tes-category-job"
                >

                    <SwiperSlide >
                        <div className="group-category-job padding wow fadeInUp">

                            <div className='flex flex-col
                md:grid md:grid-cols-4 md:gap-10'>
                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                        
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                      

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                       
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                        

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                             
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                       

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                       
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                     

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                      
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                     

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                     
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                       

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                                    <div className='flex gap-4 flex-wrap'>

                                      
                                        <img src={SoftwareEngineer} className='w-10 h-10'></img>
                                        

                                        <div className='flex flex-col flex-wrap'>

                                            <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                            <div className='flex gap-2 items-center flex-wrap'>
                                                <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                                <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                            </div>

                                            <div className='flex items-center flex-wrap'>
                                                <div className='flex items-center'>
                                                    <img src={locationIcon} className='w-8 h-8'></img>
                                                    <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper> */}

                {/* <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    loop
                >
                    <SwiperSlide>
                        <div>
                            <h1>Slide 1</h1>
                        </div>
                        <div>
                            <h1>Slide 2</h1>
                        </div>
                        <div>
                            <h1>Slide 3</h1>
                        </div>
                        <div>
                            <h1>Slide 4</h1>
                        </div>

                    </SwiperSlide>
                    ...
                </Swiper> */}

                {/* <Swiper

                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className='flex items-center justify-center'><h1>Slide 1</h1></SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'><h1>Slide 2</h1></SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'><h1>Slide 3</h1></SwiperSlide>
                    <SwiperSlide className='flex items-center justify-center'><h1>Slide 4</h1></SwiperSlide>
                    ...
                </Swiper> */}

                <div className='flex flex-col
                md:grid md:grid-cols-4 md:gap-10'>
                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-full border border-solid border-gray-300 p-4 rounded-md flex flex-col gap-4 mt-6 '>
                        <div className='flex gap-4 flex-wrap'>

                            {/* <div className='w-14 h-14 object-contain'> */}
                            <img src={SoftwareEngineer} className='w-10 h-10'></img>
                            {/* </div> */}

                            <div className='flex flex-col flex-wrap'>

                                <p className='text-teal-500 font-plus-jakarta-sans text-lg font-semibold'>IT & Networking</p>
                                <div className='flex gap-2 items-center flex-wrap'>
                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>Mermedia Ltd</p>
                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                </div>

                                <div className='flex items-center flex-wrap'>
                                    <div className='flex items-center'>
                                        <img src={locationIcon} className='w-8 h-8'></img>
                                        <p className='text-gray-600 font-plus-jakarta-sans text-lg font-normal'>52 Irving Pl, NY</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Content