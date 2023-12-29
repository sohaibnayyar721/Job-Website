import React, { useEffect, useState } from 'react'
import './content.css'
function Employer() {
    let [jobDomain, setDjobDomain] = useState('')
    let [jobName, setDjobName] = useState('')
    let [location, setLocation] = useState('')
    let [salary, setSalary] = useState('')

    async function addJob() {
        try{
            const getjobData = await fetch('http://localhost:4500/addJob', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    jobName:jobName,
                    location:location,
                    salary:salary,
                    jobDomain:jobDomain,
                })
            })
            alert('Job Post Successfully')
            setDjobDomain("")
            setDjobName("")
            setLocation("")
            setSalary("")
        }
        catch{
           
        }

    }


    return (
        <div className='w-[100%] h-[100vh] flex items-center justify-center bg-black'>
            <div className='bg-black flex flex-col gap-4 w-[50%]'>
            <input className='px-2 h-[8vh]' placeholder='Enter Job Domain' onChange={(e) => { setDjobDomain(e.target.value) }}></input>
                <input className='px-2 h-[8vh]' placeholder='Enter Job Name' onChange={(e) => { setDjobName(e.target.value) }}></input>
                <input className='px-2 h-[8vh]' placeholder='Enter Location' onChange={(e) => { setLocation(e.target.value) }}></input>
                <input className='px-2 h-[8vh]' placeholder='Enter Salary' onChange={(e) => { setSalary(e.target.value) }}></input>
                <button className='bg-red-400 text-white font-bold rounded h-[8vh]'
                onClick={addJob} >Add Post</button>
            </div>

        </div>
    )
}

export default Employer