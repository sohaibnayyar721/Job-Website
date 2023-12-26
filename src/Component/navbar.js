
import logo from '../Assets/logo.png'
import CategoryLogo from '../Assets/categoryLogo.png'
import ArrowDown from '../Assets/ArrowDown.png'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentitySharpIcon from '@mui/icons-material/PermIdentitySharp';
import GridViewIcon from '@mui/icons-material/GridView';
import { useEffect } from 'react';
import './navbar.css'

function Navbar() {
    const [menuButton, setMenuButton] = useState(false)
    const style = {
        fontFamily: '"Plus Jakarta Sans", sans-serif',
    };

    useEffect(() => {
        const WOW = require("wow.js");
        window.wow = new WOW({
            live: false,
        });
        window.wow.init();
    }, [])

    return (
        <div className=' flex flex-wrap overflow-hidden bg-white ' >
            <div className="navbar w-full flex flex-row px-5 items-center  justify-between flex-wrap">

                <div className='logo flex gap-12 '>
                    <img src={logo} className='w-full h-full object-contain'></img>

                    <div className=' showCategory hidden flex-row items-center gap-1 justify-center
                        lg:flex-row '>
                        <GridViewIcon />
                        <p className='text-gray-700 font-helvetica text-md font-normal leading-6'>Categories</p>
                    </div>
                </div>

                <div className='showMiddlePortion hidden'>

                    <div className="hidden flex-row items-center gap-5 justify-center
                        lg:flex ">

                        <div className='flex flex-row items-center'>

                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md  bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                            >
                                <option>Home</option>

                            </select>

                        </div>

                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md  bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                            >
                                <option>Find Jobs</option>

                            </select>
                        </div>

                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md  bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                            >
                                <option>Employers</option>
                            </select>
                        </div>

                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md  bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                            >
                                <option>Candidates</option>

                            </select>
                        </div>

                        <div>
                            <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md  bg-transparent pr-1 font-helvetica text-base font-normal leading-6"
                            >
                                <option>Pages</option>

                            </select>
                        </div>

                    </div>
                </div>
                {/* </div> */}

                {
                    menuButton ?
                        <div className='wow wow-exclude w-[85%] h-[100vh] bg-white fixed z-10 top-0 left-0 px-5
                            md:hidden'>
                            <div className='flex items-center justify-between py-4  border-b-2 border-gray-300'>
                                <img className='w-25 h-10' src={logo}></img>
                                <CloseIcon onClick={() => { setMenuButton(false) }} />
                            </div>

                            <div className='flex flex-col items-center justify-between h-[90vh]  py-10'>
                                <div className='w-full flex flex-col gap-2  '>
                                    <div className='flex items-center justify-between border-b-[1px] border-gray-300  py-4'>
                                        <label>Home</label>
                                        <ArrowForwardIosIcon className='text-gray-700' />
                                    </div>
                                    <div className='flex items-center justify-between border-b-[1px] border-gray-300  py-4'>
                                        <h1>Home</h1>
                                        <ArrowForwardIosIcon className='text-gray-700' />
                                    </div>
                                    <div className='flex items-center justify-between border-b-[1px] border-gray-300  py-4'>
                                        <h1>Home</h1>
                                        <ArrowForwardIosIcon className='text-gray-700' />
                                    </div>
                                    <div className='flex items-center justify-between border-b-[1px] border-gray-300  py-4'>
                                        <h1>Home</h1>
                                        <ArrowForwardIosIcon className='text-gray-700' />
                                    </div>
                                </div>

                                <button className='w-full h-14 px-2 bg-[#14A077] rounded text-white font-bold text-lg'>Post a Job</button>

                            </div>

                        </div>
                        : ""
                }

                <div className='hidden showMenuIcons gap-3
                md:gap-5'>
                    <PermIdentitySharpIcon className=' ' />
                    <NotificationsNoneIcon className='  ' />
                    <MenuIcon className='  ' onClick={() => { setMenuButton(true) }} />
                </div>

                <div>

                </div>

                <div className=' hidden showPostAJobButton flex-col gap-1'>
                    <div className='flex gap-6'>
                        <NotificationsNoneIcon className='transform scale-125' />
                        <div className='flex gap-1'>
                            <PermIdentitySharpIcon  className='transform scale-125' />
                            <p>Login/Register</p>
                        </div>
                    </div>
                    <button className=' showPostAJobButton px-9 py-4 rounded text-medium font-sans font-semibold font-jakarta border-[1px] border-[#14A077]'>Post a Job</button>
                </div>


            </div>
        </div>
    )

}

export default Navbar