
import logo from '../Assets/logo.png'
import CategoryLogo from '../Assets/categoryLogo.png'
import ArrowDown from '../Assets/ArrowDown.png'
function navbar() {

    return (
        <div className='flex flex-wrap overflow-hidden'>
            <div className="w-full flex flex-row bg-[#F4EFE7] items-center px-16 justify-between flex-wrap">
                <div className='w-44 h-24'>
                    <img src={logo} className='w-full h-full object-contain'></img>
                </div>

                <div className='hidden flex-row items-center gap-1
                lg:flex '>
                    <img src={CategoryLogo} className='w-5 h-5'></img>
                    <p className='text-gray-700 font-helvetica text-base font-normal leading-6'>Categories</p>
                </div>

                <div className="hidden flex-row items-center gap-12 justify-center
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

                    <div>
                        <p>Login</p>
                    </div>

                </div>

                <button className='w-32 h-10  bg-[#F4EFE7] border-[#1DBF73] rounded border-2'>Register</button>

            </div>
        </div>
    )

}

export default navbar