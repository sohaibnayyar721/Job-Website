import React, { useEffect } from 'react'
import Navbar from './navbar'
import SideBar from './SideBar'
import logo from '../Assets/logo.png'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import HttpsIcon from '@mui/icons-material/Https';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import jobs from '../Assets/jobs.png';
import review from '../Assets/Review.png'
import views from '../Assets/views.png'
import shortlisted from '../Assets/Shortlisted.png'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useState } from 'react';
import Select from 'react-select'
import SoftwareEngineer from '../Assets/SoftwareEngineer.png'
import Heart from '../Assets/Heart.png'
import DollarIcon from '../Assets/DollarIcon.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function CandidateDashboard() {
    const [menuButton, setMenuButton] = useState(false)

    const [jobTitle, setJobTitle] = useState('')
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    // const [jobType, setJobType] = useState('')
    const [minSalary, setMinSalary] = useState('')
    const [maxSalary, setMaxSalary] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [applicationDeadlineDate, setApplicationDeadlineDate] = useState('')
    const [externalURLforApplyJob, setExternalURLforApplyJob] = useState('')
    const [jobApplyEmail, setJobApplyEmail] = useState('')
    const [gender, setGender] = useState('')
    const [tag, setTag] = useState('')
    const [industry, setIndustry] = useState('')
    const [qualification, setQualification] = useState('')
    const [careerLevel, setCareerLevel] = useState('')
    const [friendlyAddress, setFriendlyAddress] = useState('')


    let currentDate = new Date()
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const getDate = formattedDate.split(' ')
    const setDateFormat = [getDate[0].slice(0, 3), getDate[1], getDate[2]]
    const FormattedDate = setDateFormat.join(' ')
    const date = FormattedDate

    async function EmployerPostData() {
        try {
            const employeerId = employeerData.map(data => data._id)
            const employeerIdIntoString = employeerId.join('')
            

            const getFeaturedJob = await fetch('http://localhost:4500/employerAddJob', {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    employeerId:employeerIdIntoString,
                    jobTitle: jobTitle,
                    category: category,
                    location: location,
                    // jobType: jobType,
                    minSalary: minSalary,
                    maxSalary: maxSalary,
                    jobDescription: jobDescription,
                    jobType: type,
                    JobApplyType: JobApplyType,
                    SalaryType: SalaryType,
                    Experience: Experience,
                    applicationDeadlineDate: applicationDeadlineDate,
                    externalURLforApplyJob: externalURLforApplyJob,
                    jobApplyEmail: jobApplyEmail,
                    gender: gender,
                    tag: tag,
                    industry: industry,
                    qualification: qualification,
                    careerLevel: careerLevel,
                    friendlyAddress: friendlyAddress,
                    date: date
                })

            })

            const response = await getFeaturedJob.json()
            if (response.message === 'Job Posted Successfully') {
                alert(response.message)
            }
        }
        catch (err) {
            alert("Server Cannot Respond")
        }

    }

    let [employeerData, setEmployeerData] = useState([])
    async function getEmployeerData() {
        let token = localStorage.getItem('token')
        try {
            const getData = await fetch('http://localhost:4500/employeer/dashboard', {

                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({token})

            })

            const response = await getData.json()
            let getApplicants = response.employeerData
            setEmployeerData(getApplicants)
        } catch (err) {
            console.log("Server Can't respond")
        }

    }

    useEffect(() => {
        getEmployeerData()
    }, [])


    // ---------React Select-----------



    const handleChangeType = (selectedOption) => {
        setType(selectedOption.value);
    }

    let [type, setType] = useState("")
    const jobtypeOption = [
        { value: "Freelance", label: "Freelance" },
        { value: "Full Time", label: "Full Time" },
        { value: "Intership", label: "Intership" },
        { value: "Onsite", label: "Onsite" },
        { value: "Part Time", label: "Part Time" },
        { value: "Remote", label: "Remote" },

    ]

    const handleJobApplyType = (selectedOption) => {
        setJobApplyType(selectedOption.value);
    }

    let [JobApplyType, setJobApplyType] = useState("")
    const JobApplyTypeOption = [
        { value: "Internal", label: "Internal" },
        { value: "External URL", label: "External URL" },
        { value: "By Email", label: "By Email" },
        { value: "Call To Apply", label: "Call To Apply" }
    ]

    const handleSalaryType = (selectedOption) => {
        setSalaryType(selectedOption.value);
    }

    let [SalaryType, setSalaryType] = useState("")
    const SalaryTypeOption = [
        { value: "Monthly", label: "Monthly" },
        { value: "Weekly", label: "Weekly" },
        { value: "Daily", label: "Daily" },
        { value: "Hourly", label: "Hourly" },
        { value: "Yearly", label: "Yearly" }
    ]

    const handleExperience = (selectedOption) => {
        setExperience(selectedOption.value);
    }

    let [Experience, setExperience] = useState("")
    const ExperienceOption = [
        { value: "Fresh", label: "Fresh" },
        { value: "1 Year", label: "1 Year" },
        { value: "2 Year", label: "2 Year" },
        { value: "3 Year", label: "3 Year" },
        { value: "4 Year", label: "4 Year" },
        { value: "5 Year", label: "5 Year" },
    ]
    console.log(type)
    console.log(JobApplyType)
    console.log(SalaryType)
    console.log(Experience)
    console.log(jobDescription)

    const customStyles = {

        option: (provided, state) => ({
            ...provided,
            color: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'transparent',
                color: 'green',
            },
        }),

        control: (provided) => ({
            ...provided,
            minHeight: '45px',
        }),
        indicatorSeparator: () => ({ display: "none" }),

    };

    let [submitJob, setSubmitJob] = useState(true)
    let [jobApplicants, setJobApplicants] = useState(false)

    function SubmitJob() {
        setSubmitJob(true)
        setJobApplicants(false)
    }

    function JobApplicants() {
        setSubmitJob(false)
        setJobApplicants(true)
    }

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <div className='hidden w-[23%] h-[80vh] bg-white overflow-y-scroll
                    md:flex'>

                    <div className='flex w-full flex-col items-center justify-between bg-white py-4'>
                        <div className='w-full flex flex-col gap-2 px-2'>

                            <div className={`flex gap-2 items-center ${submitJob && 'bg-[#F5F5F2]'} before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold active:bg-[#F5F5F2]  hover:bg-[#F5F5F2] px-2 py-2`}
                                onClick={SubmitJob}>
                                <div><UploadFileIcon /></div>
                                <h1 className='text-black'>Submit Job</h1>
                            </div>

                            <div className={`flex gap-2 items-center ${jobApplicants && 'bg-[#F5F5F2]'} before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold active:bg-[#F5F5F2]  hover:bg-[#F5F5F2] px-2 py-2`}
                                onClick={JobApplicants}   >

                                <div><UploadFileIcon /></div>
                                <h1 className='text-black'>Job Applicants</h1>
                            </div>



                            {/* <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>

                                <div><DashboardIcon /></div>
                                <h1 className='text-black'>Dashboard</h1>
                            </div> */}

                            {/* <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>

                                <div><AccountCircleRoundedIcon /></div>
                                <h1 className='text-black'>Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700  rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <ArticleIcon />
                                <h1 className='text-black'>My Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <FactCheckIcon />
                                <h1 className='text-black'>My Applied</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <FavoriteRoundedIcon />
                                <h1 className='text-black'>Job Shortlist</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <PeopleRoundedIcon />
                                <h1 className='text-black'>Following Employers</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <NotificationsNoneIcon />
                                <h1 className='text-black'>Job Alerts</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <MonetizationOnIcon />
                                <h1 className='text-black'>Packages</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <MessageIcon />
                                <h1 className='text-black'>Messages</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <GroupsIcon />
                                <h1 className='text-black'>Meetings</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <HttpsIcon />
                                <h1 className='text-black'>Change Password</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <DeleteIcon />
                                <h1 className='text-black'>Delete Profile</h1>
                            </div>

                            <div className='flex gap-2 items-center before:text-black hover:text-green-700 rounded before:font-normal hover:font-semibold  hover:bg-[#F5F5F2] px-2 py-2'>
                                <LogoutIcon />
                                <h1 className='text-black'>Logout</h1>
                            </div> */}
                        </div>

                    </div>

                </div>

                {/* Submit job right side */}
                {
                    submitJob ?
                        <div className='flex overflow-scroll h-[80vh] flex-col gap-8 w-full  bg-[#eeeeee99] px-8 py-6'>

                            <div className='flex flex-col gap-4 w-full text-green-700 '>
                                <div className='flex gap-2'>
                                    <MenuIcon />
                                    <p className='font-semibold'>Show SideBar</p>

                                </div>

                                <div className='border-l-[5px] border-green-700 px-3 '>
                                    <p className='text-black font-bold text-xl'>Post a new Job</p>

                                </div>
                            </div>

                            <div className='bg-white'>

                                <div className='flex flex-col border-gray-300 border-b-[1px] gap-5 px-8 py-8'>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Banner Image</p>
                                            <button className='w-32 h-12 font-semibold before:text-black hover:bg-green-700 hover:text-white border-[1px] rounded border-green-700'>Browse</button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Job Title</p>
                                            <input
                                                onChange={(e) => { setJobTitle(e.target.value) }}
                                                className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Job Description</p>
                                            <input className='w-full h-36 text-top rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='JOb Description'
                                                onChange={(e) => { setJobDescription(e.target.value) }}></input>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col border-gray-300 border-b-[1px] gap-5 px-8 py-8'>

                                    <div className='flex flex-col gap-6'>
                                        <p className='font-semibold text-xl'>Media</p>
                                    </div>

                                    <div className='grid grid-cols-2 gap-6'>
                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">Category </p>
                                                <input
                                                    onChange={(e) => { setCategory(e.target.value) }}
                                                    className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">Type</p>

                                                <Select
                                                    onChange={handleChangeType}
                                                    className='border-none'
                                                    options={jobtypeOption}
                                                    styles={customStyles}
                                                    placeholder='job type'
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            primary25: 'transparent',
                                                            primary: 'green',
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">Application Deadline Date</p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setApplicationDeadlineDate(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">Job Apply Type</p>
                                                <Select
                                                    onChange={handleJobApplyType}
                                                    className='border-none'
                                                    options={JobApplyTypeOption}
                                                    styles={customStyles}
                                                    placeholder='job type'
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            primary25: 'transparent',
                                                            primary: 'green',
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">External URL for Apply Job</p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setExternalURLforApplyJob(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Job Apply Email</p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setJobApplyEmail(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Phone Number</p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Salary Type</p>
                                                <Select
                                                    onChange={handleSalaryType}
                                                    className='border-none'
                                                    options={SalaryTypeOption}
                                                    styles={customStyles}
                                                    placeholder='job type'
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            primary25: 'transparent',
                                                            primary: 'green',
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Min. Salary</p>
                                                <input
                                                    type='number'
                                                    onChange={(e) => { setMinSalary(e.target.value) }}
                                                    className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Max. Salary
                                                </p>
                                                <input
                                                    type='number'
                                                    onChange={(e) => { setMaxSalary(e.target.value) }}
                                                    className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                            </div>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Gender
                                                </p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setGender(e.target.value) }}></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Tag
                                                </p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setTag(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Industry
                                                </p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setIndustry(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Qualification
                                                </p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setQualification(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>


                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Career Level
                                                </p>
                                                <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                    onChange={(e) => { setCareerLevel(e.target.value) }}
                                                ></input>
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-3'>
                                            <div className='flex flex-col gap-3 '>
                                                <p className="font-semibold">
                                                    Experience
                                                </p>
                                                <Select
                                                    onChange={handleExperience}
                                                    className='border-none'
                                                    options={ExperienceOption}
                                                    styles={customStyles}
                                                    placeholder='job type'
                                                    theme={(theme) => ({
                                                        ...theme,
                                                        colors: {
                                                            ...theme.colors,
                                                            primary25: 'transparent',
                                                            primary: 'green',
                                                        },
                                                    })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col border-gray-300 border-b-[1px] gap-12 px-8 py-8'>


                                    <div className='flex flex-col gap-6'>
                                        <p className='font-semibold text-xl'>Media</p>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Photos</p>
                                            <button className='w-32 h-12 font-semibold before:text-black hover:bg-green-700 hover:text-white border-[1px] rounded border-green-700'>Browse</button>
                                        </div>
                                    </div>


                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Introduction Video URL</p>
                                            <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex flex-col border-gray-300 border-b-[1px] gap-5 px-8 py-8'>


                                    <div className='flex flex-col gap-6'>
                                        <p className='font-semibold text-xl'>Location</p>
                                    </div>


                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Friendly Address</p>
                                            <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'
                                                onChange={(e) => { setFriendlyAddress(e.target.value) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Location</p>
                                            <input
                                                onChange={(e) => { setLocation(e.target.value) }}
                                                className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-3'>
                                        <div className='flex flex-col gap-3 '>
                                            <p className="font-semibold">Maps Location</p>
                                            <input className='w-full h-12 rounded px-3 outline-green-700 outline-[0.5px] bg-[#F5F5F5]' placeholder='hello'></input>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={EmployerPostData}
                                className='text-white hover:text-[#14A077] font-bold rounded hover:bg-white bg-[#14A077] w-44 px-2 py-3'>Save & Preview</button>

                        </div> : ""

                }


                {/* Job Applicants right side */}
                {
                    jobApplicants ?
                        <div className='w-full flex flex-col gap-8  bg-[#eeeeee99] px-8 py-6'>
                            {
                                employeerData.map((data) => {
                                    return (
                                        data.applicants.map((data) => {
                                            return (
                                                <div className='w-full border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4  flex flex-col gap-4'
                                                >
                                                    <div className='flex items-center justify-between border-b-2 border-gray-200 py-3'>
                                                        <div className='flex gap-3 items-center'>
                                                            <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>{data.designation}</p>
                                                        </div>
                                                    </div>

                                                    <div className='flex gap-4
                                                md:justify-between'>

                                                        <div className='flex gap-4 ' >
                                                            <div className='w-14 h-14 object-contain'>
                                                                <img src={SoftwareEngineer}></img>
                                                            </div>

                                                            <div className='flex flex-col gap-2'>
                                                                <p className='text-[#14A077] font-plus-jakarta-sans text-sm font-semibold'>{data.candidateName}</p>
                                                                <div className='flex gap-2 items-center'>
                                                                    <p className='text-black font-plus-jakarta-sans text-xl font-bold'>{data.designation}</p>
                                                                    <div className='w-4 h-4 rounded-full bg-[#504CFE]'></div>
                                                                </div>

                                                                <div className='w-full flex items-center gap-2 flex-wrap -300 '>
                                                                    <div className='flex items-center'>
                                                                        <LocationOnOutlinedIcon className='text-gray-500 transform scale-90' />
                                                                        <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>location</p>
                                                                    </div>

                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div className='flex gap-2 items-center justify-center'>
                                                            <p className='text-gray-600 font-plus-jakarta-sans text-sm font-normal'>Dec 23, 2023</p>
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

                                                </div>
                                            )
                                        })
                                    )
                                })
                            }

                        </div>
                        : ""
                }

            </div>

        </div>
    )
}

export default CandidateDashboard