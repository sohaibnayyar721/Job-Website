
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
import './navbar.css'
function Navbar() {
    const [menuButton, setMenuButton] = useState(false)
    const style = {
        fontFamily: '"Plus Jakarta Sans", sans-serif', 
      };
    return (
        <div className=' flex flex-wrap overflow-hidden bg-white ' >
            <div className="navbar w-full flex flex-row px-5 items-center  justify-between flex-wrap">
                <div className='logo flex gap-12'>
                    <img src={logo} className='w-full h-full object-contain'></img>

                    <div className='showCategory hidden flex-row items-center gap-1 justify-center
                        '>
                        <img src={CategoryLogo} className='w-5 h-5'></img>
                        <p  className='text-gray-700 font-helvetica text-base font-normal leading-6'>Categories</p>
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
                {
                    menuButton ?
                        <div className='active transition w-[85%] h-[93vh] bg-white fixed top-0 left-0 
                        md:hidden'>
                            <div className='flex items-center justify-between py-4 px-2 border-b-2 border-gray-300'>
                                <img className='w-25 h-10' src={logo}></img>
                                <CloseIcon onClick={() => { setMenuButton(false) }} />
                            </div>

                            <div className='flex flex-col items-center justify-between h-full bg-white py-10'>
                                <div className='w-full flex flex-col gap-2 px-8 '>
                                    <div className='flex items-center justify-between border-b-[1px] border-gray-300  py-4'>
                                        <label>Home</label>
                                        {/* <select>
                                            <option>hello</option>
                                        </select> */}
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
                                <div className='w-full flex items-center justify-center bg-white'>
                                    <button className='bg-[#14A077] py-4 px-20 rounded-xl text-white font-bold text-lg'>Post a Job</button>
                                </div>
                            </div>

                        </div>
                        : ""
                }

                <div className='hidden showMenuIcons gap-3
                md:gap-5'>
                    <PermIdentitySharpIcon className='transform scale-125 ' />
                    <NotificationsNoneIcon className=' transform scale-125 ' />
                    <MenuIcon className=' transform scale-125 ' onClick={() => { setMenuButton(true) }} />
                </div>

                <button className='hidden showPostAJobButton px-6 py-2 rounded  font-sans font-semibold font-jakarta border-2 border-green-400'>Post a Job</button>


            </div>
        </div>
    )

}

export default Navbar