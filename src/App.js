import logo from './logo.svg';
import './App.css';
import Navbar from './Component/navbar';
import Content from './Component/content';
import Footer from './Component/footer';
import Scrollable from './Component/Scrollable';
import CandidateDashboard from './Component/CandidateDashboard';
import Practice from './Component/practice';
import JobDescription from './Component/jobDescription';
function App() {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Content/>
      <Footer/>
      {/* <Scrollable/> */}
      {/* <CandidateDashboard/> */}
      {/* <Practice /> */}
      {/* <JobDescription/> */}

    </div>
  );
}

export default App;
