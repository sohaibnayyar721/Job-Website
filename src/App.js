import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import Content from './Component/content';
import Footer from './Component/footer';
import Scrollable from './Component/Scrollable';
import CandidateDashboard from './Component/CandidateDashboard';
import Practice from './Component/practice';
import JobDescription from './Component/jobDescription';
import EmployeerSignUp from './Component/EmployeerSignUp';
import CandidateSignUp from './Component/CandidateSignUp';
import Login from './Component/Login'
import FormJobs from './Component/JobsForm'
import { BrowserRouter, Routes, Route, Switch, useRoutes, } from "react-router-dom";
import Employeer from './Component/Employeer';
import CandidateDetails from './Component/CandidateDetails';
import { useState } from 'react';
function App() {

  // Get Single Job Id from "Content.js" to and send it to "job description.js"
  let [getSingleJObId, setGetSingleJObId] = useState('')
  function singleJobId(data) {
    setGetSingleJObId(data)
    console.log(data)
  }

  // Get Data From "Login.js" and send data to "CandidateDetails.js" After Successfull Login to 
  // Show Candidate data to "CandidateDetails.js"

  let [candidateData, setCandidateData] = useState('')
  function userData(data) {
    setCandidateData(data)
    console.log(data)
  }
  
    // Get Employer Id From "jobDescription.js" and send it to "CandidateDetails.js"
    // to send Employer ID to api
  let [employerId, setEmployerId] = useState('')
  function employerID(data) {
    setEmployerId(data)
    // console.log("EmployerId",data)
  }

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content singleJobId={singleJobId} />} />


          <Route exact path="/jobDescription" element={<JobDescription getSingleJObId={getSingleJObId}
            getEmployerID={employerID}
          />} />


          <Route exact path="/candidateDashboard" element={<CandidateDashboard />} />

          <Route exact path="/candidate/signUp" element={<CandidateSignUp />} />
          <Route exact path="/employeer/signUp" element={<EmployeerSignUp />} />
          
          <Route exact path="/forms" element={<FormJobs />} />
          <Route exact path="/practice" element={<Practice />} />
          <Route exact path="/employeer" element={<Employeer />} />
          <Route exact path="/login" element={<Login SendUserData={userData} />} />
          <Route exact path="/candidateDetails" element={<CandidateDetails
          employerId={employerId}
          candidateData={candidateData} />} />

        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Content />
      <CandidateDashboard />
      <JobDescription /> */}
      {/* <CandidateDashboard /> */}

    </div>
  );
}

export default App;
