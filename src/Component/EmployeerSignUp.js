import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

function EmployeerSignUp() {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
   
    
  let navigate = useNavigate()
    async function SignUp() {
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const checkEmail = emailPattern.test(email)
  
      if( !email || !confirmPassword  || !password ){
        alert("Please fill all input fields")
      }
  
      else if (confirmPassword !== password) {
        alert("Password not match")
      }
  
      else if(!checkEmail){
        alert("Invalid Email")
      }
  
      else if(password.length<7){
        alert("password lenght is greater than 7")
      }
  
      else {
        try {
          const postData = await fetch('http://localhost:4500/api/employeer/SignUp', {
  
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {
                email: email, 
                password: password ,
              })
          })
  
          const response = await postData.json()
          console.log(response)
          if (response.message === 'user created successfully!!!') {
            alert(response.message)
            navigate('/login')
          }
        } catch (err) {
          console.log("Server Can't respond")
        }
      }
  
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
              Sign Up to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-[30%]">
            <div className="space-y-6">
  
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email*
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="email"
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                </div>
              </div>
  
              {/*  Password*/}
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
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                </div>
              </div>
  
              {/*  Confirm Password*/}
              <div>
                <label htmlFor="Confirm Password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password*
                </label>
                <div className="mt-2">
                  <input
                    id="Confirm Password"
                    name="Confirm Password"
                    type="password"
                    required
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                  />
                </div>
              </div>
  
              <div>
                <button
                  className="flex w-full justify-center rounded-md bg-[#14A077] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={SignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
  
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
      </>
    )
}

export default EmployeerSignUp