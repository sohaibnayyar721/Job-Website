import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import Content from './Component/content';
import Footer from './Component/footer';
import Scrollable from './Component/Scrollable';
import CandidateDashboard from './Component/CandidateDashboard';
import Practice from './Component/practice';
import JobDescription from './Component/jobDescription';
import { BrowserRouter, Routes, Route, Switch, useRoutes, } from "react-router-dom";
import { useState } from 'react';
function App() {

  let [getSingleJObId, setGetSingleJObId] = useState('')
  function singleJobId(data) {
    setGetSingleJObId(data)
  }

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Content singleJobId={singleJobId} />} />
          <Route exact path="/jobDescription" element={<JobDescription getSingleJObId={getSingleJObId}/>} />
          <Route exact path="/candidateDashboard" element={<CandidateDashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Content />
      <CandidateDashboard />
      <JobDescription /> */}
      {/* <CandidateDashboard /> */}

    </div>
  );
}

export default App;
