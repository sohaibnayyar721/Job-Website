import React, { useEffect, useState } from 'react'

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
    }, [getLocation,getJobTittle])

    return (
        <div className='flex flex-col gap-3'>

            <div className='flex gap-2'>
                <label>location</label>
                <select value={getLocation} onChange={(e) => (setGetLocation(e.target.value))}>
                    <option value=''>  </option>
                    <option value='Kashmir'> Kashmir </option>
                    <option value='Lahore'> Lahore </option>
                </select>
            </div>

            <div className='flex gap-2'>
                <label>Job Tittle</label>
                <select value={getJobTittle} onChange={(e) => (setJobTittle(e.target.value))}>
                    <option value=''>  </option>
                    <option value='UI/UX Designer'> UI/UX Designer </option>
                    <option value='Python Developer'> Python Developer </option>
                </select>
            </div>

            <div className='flex gap-2'>
                <label>Salary</label>
                <select>
                    <option></option>
                </select>
            </div>



        </div>
    )
}

export default Practice