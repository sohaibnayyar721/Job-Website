import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(props) {

    let [candidateEmail, setCandidateEmail] = useState('')
    let [candidatePassword, setCandidatePassword] = useState('')
    let [userData, setUserData] = useState('')


    let [employeerEmail, setEmployeerEmail] = useState('')
    let [employeerPassword, setEmployeerPassword] = useState('')

    let navigate = useNavigate()

    async function CandidateLogin() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkEmail = emailPattern.test(candidateEmail)

        if (!candidateEmail || !candidatePassword) {
            alert("Please fill all input fields")
        }

        else if (!checkEmail) {
            alert("Invalid Email")
        }

        else {
            try {
                const postData = await fetch('http://localhost:4500/api/candidate/login', {

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: candidateEmail, password: candidatePassword })
                })

                const response = await postData.json()
                setUserData(response.findEmail)
                if (response.message === 'Login Successfull') {
                    props.SendUserData(response.findEmail)
                    navigate('/candidateDetails', { replace: true })

                }
                else {
                    alert(response.message)
                }

                // const response = await getFeaturedJob.json()
                // setGetFeaturedJobData(response.jobsData)
            } catch (err) {
                console.log("Server Can't respond")
            }
        }


    }

    async function EmployeerLogin() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const checkEmail = emailPattern.test(employeerEmail)

        if (!employeerEmail || !employeerPassword) {
            alert("Please fill all input fields")
        }

        else if (!checkEmail) {
            alert("Invalid Email")
        }

        else {
            try {
                const postData = await fetch('http://localhost:4500/api/employeer/login', {

                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email: employeerEmail, password: employeerPassword })
                })

                const response = await postData.json()
                // setUserData(response.findEmail)
                if (response.message === 'Login Successfull') {
                    // props.SendUserData(response.findEmail)
                    alert(response.message)
                    localStorage.setItem("token", response.token)
                    console.log("this is token",response.token)
                    navigate('/CandidateDashboard', { replace: true })
                   
                    // navigate('/candidateDetails', { replace: true })

                }
                else {
                    alert(response.message)
                }
            } catch (err) {
                console.log("Server Can't respond")
            }
        }


    }

    let [candidate, setCandidate] = useState(true)
    let [employeer, setEmployeer] = useState(false)

    function Candidate() {
        setCandidate(true)
        setEmployeer(false)
    }

    function Employeer() {
        setCandidate(false)
        setEmployeer(true)
    }

    return (
        <>
            <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign In to your account
                    </h2>


                </div>

                <div className="px-3 py-2 flex items-center justify-between  mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <button
                        className="h-12 px-5 rounded-md bg-gray-300"
                        onClick={Candidate}
                    >
                        Candidate
                    </button>

                    <button
                        className="h-12 px-5 rounded-md bg-gray-300"
                        onClick={Employeer}
                    >
                        Employeer
                    </button>
                </div>


                {candidate ?
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
                        <div className="space-y-6">
                            <p className="font-semibold text-lg">Candidate Sign In</p>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => { setCandidateEmail(e.target.value) }}
                                    />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password*
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={(e) => { setCandidatePassword(e.target.value) }}
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    className="flex w-full justify-center rounded-md bg-[#14A077] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={CandidateLogin}
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Do you have an account?{' '}
                            <a href="/candidate/signUp" className="font-semibold leading-6 text-[#14A077] hover:text-indigo-500">
                                Register
                            </a>
                        </p>
                    </div>
                    : ""
                }

                {
                    employeer ?
                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
                            <div className="space-y-6">
                                <p className="font-semibold text-lg">Employeer Sign In</p>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email*
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => { setEmployeerEmail(e.target.value) }}
                                        />
                                    </div>
                                </div>


                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password*
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            onChange={(e) => { setEmployeerPassword(e.target.value) }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        className="flex w-full justify-center rounded-md bg-[#14A077] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        onClick={EmployeerLogin}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Do you have an account?{' '}
                                <a href="/employeer/signUp" className="font-semibold leading-6 text-[#14A077] hover:text-indigo-500">
                                    Register
                                </a>
                            </p>
                        </div>
                        : ""
                }



            </div>
        </>
    )
}
