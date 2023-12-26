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
import SearchIcon from '@mui/icons-material/Search';
import Footer from './footer';
import './jobDescription.css'
import { useState } from 'react';
import Select from 'react-select'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import ReactSlider from "react-slider";
import "./style.css";
function JobForms({ getSingleJObId }) {

    let [jobTitle, setJobTitle] = useState('')
    let [filtersData, setFiltersData] = useState([])
    let [getAllJobs, setGetAllJobs] = useState([])
    let [showMessage, setShowMessage] = useState(false)
    let [showData, setShowData] = useState(true)
    const [value, setValue] = useState([10, 300]);

    async function GetFilterData() {
        try {
            const getFilterData = await fetch(`http://localhost:4500/job/filter`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        jobTitle: jobTitle,
                        listLocation: listLocation,
                        category: category,
                        jobTypes: jobTypes,
                        minSalaray: value[0],
                        maxSalaray: value[1],
                        industry: industry,
                        careerLevel, careerLevel,
                        experience: experience,
                    }

                )
            })

            if (!getFilterData) {
                throw new Error("Server Can't response");
            }

            const FilterData = await getFilterData.json()
            setFiltersData(FilterData)
            console.log(FilterData)
            if (FilterData.message) {
                setShowData(false)
                setShowMessage(true)
            }

        } catch (err) {
            console.log(`An error occurred while fetching data.`)
        }
    }

    async function GetAllJobs() {
        try {
            const GetAllJobs = await fetch(`http://localhost:4500/getAllData`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            if (!GetAllJobs) {
                throw new Error("Server Can't response");
            }
            const jobsData = await GetAllJobs.json()
            const allDatas = jobsData.jobsData
            setGetAllJobs(allDatas)
        } catch (err) {
            console.log('An error occurred while fetching data.')
        }
    }

    console.log(getAllJobs)


    const customStyles = {

        option: (provided, state) => ({
            ...provided,
            border: state.isFocused ? 'none' : 'none',
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
            // width: '330%',
            minHeight: '45px',
            width: "100%",
            // border: '1px',
            // This line disable the blue border
            boxShadow: 'green'
            // outline:'none'
        }),

        indicatorSeparator: () => ({ display: "none" }),

    };

    const handlelistLocation = (selectedOption, { action }) => {
        if (action === "clear") {
            setListLocation("");
        }
        else {
            setListLocation(selectedOption.value);
        }

    }

    let [listLocation, setListLocation] = useState("")
    let removeDuplicateLocation = [... new Set(getAllJobs.map(data => data.location))]

    const listLocationOption = removeDuplicateLocation.map(data => ({
        value: data,
        label: data,
    }));

    const handleCategory = (selectedOption, { action }) => {
        if (action === "clear") {
            setCategory("");
        }
        else {
            setCategory(selectedOption.value);
        }
    }


    let [category, setCategory] = useState("")
    let removeDuplicateCategory = [... new Set(getAllJobs.map(data => data.category))]

    const categoryOption = removeDuplicateCategory.map(data => ({
        value: data,
        label: data,
    }));

    const handlejobTypes = (selectedOption, { action }) => {
        if (action === "clear") {
            setjobTypes("");
        }
        else {
            setjobTypes(selectedOption.value);
        }
    }

    let [jobTypes, setjobTypes] = useState("")
    let removeDuplicateJobTypes = [... new Set(getAllJobs.map(data => data.type))]

    const jobTypesOption = removeDuplicateJobTypes.map(data => ({
        value: data,
        label: data,
    }));

    const handleIndustry = (selectedOption, { action }) => {
        if (action === "clear") {
            setIndustry("");
        }
        else {
            setIndustry(selectedOption.value);
        }
    }

    let [industry, setIndustry] = useState("")
    let removeDuplicateIndustry = [... new Set(getAllJobs.map(data => data.industry))]

    const industryOption = removeDuplicateIndustry.map(data => ({
        value: data,
        label: data,
    }));

    const handleCareerLevel = (selectedOption, { action }) => {
        if (action === "clear") {
            setCareerLevel("");
        }
        else {
            setCareerLevel(selectedOption.value);
        }
    }

    let [careerLevel, setCareerLevel] = useState("")
    let removeDuplicateCareerLevel = [... new Set(getAllJobs.map(data => data.careerLevel))]

    const careerLevelOption = removeDuplicateCareerLevel.map(data => ({
        value: data,
        label: data,
    }));

    const handleExperience = (selectedOption, { action }) => {
        if (action === "clear") {
            setExperience("");
        }
        else {
            setExperience(selectedOption.value);
        }
    }
    let [experience, setExperience] = useState("")
    let removeDuplicateExperience = [... new Set(getAllJobs.map(data => data.experience))]

    const experienceOption = removeDuplicateExperience.map(data => ({
        value: data,
        label: data,
    }));


    useEffect(() => {
        GetFilterData()
    }, [jobTitle, listLocation, careerLevel, experience, category, jobTypes, industry, value[0], value[1]])

    useEffect(() => {
        GetAllJobs()
    }, [])

    const title = "Salary"

    return (

        <div className='overflow-hidden'>
            <Navbar />
            <div className='flex gap-10 py-10 flex-wrap justify-center '>
                {/* <div className=''> */}
                <div className='w-[25%] rounded bg-[#e3e0e0] px-5 py-6 flex flex-col gap-2'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Job Title</p>
                            <div className='relative w-full h-16 border-b-2 border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>
                                <SearchIcon className='absolute left-2' />
                                <input placeholder='Job title, keywords or Company' className='h-12 px-9 rounded-md border-[1px] border-gray-200 w-full outline-[#14A077] outline-[1px] '
                                    onChange={(e) => { setJobTitle(e.target.value) }}
                                ></input>
                            </div>

                        </div>

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>List Location</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handlelistLocation}
                                        options={listLocationOption}
                                        styles={customStyles}
                                        isClearable
                                        placeholder='All Location'
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

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Categories</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handleCategory}
                                        options={categoryOption}
                                        styles={customStyles}

                                        isClearable
                                        placeholder='All Category'
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

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Job Types</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handlejobTypes}
                                        options={jobTypesOption}
                                        isClearable
                                        styles={customStyles}
                                        placeholder='All Category'
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


                        <div className="group-form">
                            <div className="group-range-title">
                                <label>
                                    {title}
                                    <span>{value[0]}$ &nbsp;-</span>
                                    <span>{value[1]}$</span>
                                </label>
                            </div>
                            <ReactSlider
                                ariaLabelledby="slider-label"
                                className="horizontal-slider st2"
                                min={0}
                                max={300}
                                defaultValue={[10, 300]}
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                onChange={(value) => setValue(value)}
                            />
                        </div>

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Industry</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handleIndustry}
                                        options={industryOption}
                                        isClearable
                                        styles={customStyles}
                                        placeholder='Industry'
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

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Career Level</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handleCareerLevel}
                                        options={careerLevelOption}
                                        isClearable
                                        styles={customStyles}
                                        placeholder='Career Level'
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

                        <div className='flex flex-col '>
                            <p className='font-semibold text-lg'>Experience</p>
                            <div className='relative w-full h-16 border-b-2  border-gray-300 flex flex-row items-center gap-2 
                                    md:border-none'>

                                <div className='w-full'>
                                    <Select
                                        onChange={handleExperience}
                                        options={experienceOption}
                                        styles={customStyles}

                                        isClearable
                                        placeholder='All Category'
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

                        <button className='w-full bg-green-700 h-10'
                            onClick={GetFilterData}
                        >GetJob</button>

                    </div>

                </div>
                {/* </div> */}

                {/* {
                    showMessage ? */}

                {
                    showData ?
                        <div className=' h-full gap-6  grid grid-cols-2'>
                            {filtersData.map((data) => {
                                return (

                                    <div key={data._id} className='w-96 border border-solid hover:shadow-xl hover:border-[#61CE70] border-gray-300 p-4 flex flex-col gap-4'>
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
                                                {data.type}
                                            </button>
                                        </div>

                                        <div className='flex items-center justify-between border-t-2 border-gray-200 py-4'>
                                            <div className='flex gap-3 items-center'>
                                                <img src={DollarIcon} className='w-6 h-6'></img>
                                                <p className='text-black font-plus-jakarta-sans text-lg font-semibold'>${data.minSalary} - ${data.maxSalary}<span className='text-[#64666C]'>/ month</span></p>
                                            </div>
                                            <p className='text-[#64666C]'>{data.date}</p>
                                        </div>

                                    </div>
                                )
                            })}

                        </div> :
                        <div className='w-full'>
                            <h1>No Jobs Found</h1>
                        </div>
                }


                {/* {
                    showMessage &&
                    <div className=''>
                        <h1>No Jobs Found</h1>
                    </div>
                } */}





                {/* <div className='col-span-2 bg-yellow-300 gap-4 grid grid-cols-2'>
                  
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
                </div> */}


            </div>

            <Footer />
        </div>

    )
}

export default JobForms