import React, { useContext } from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import ApplyJobs from './pages/ApplyJobs'
import Applications from './pages/Applications'
import Recruiterlogin from "./components/Recruiterlogin"
import { AppContext } from "./context/AppContext"

function App() {

  const {showRecruiterLogin} = useContext(AppContext)

  return (
    <>
      <div>
        {
           showRecruiterLogin
           &&
           <Recruiterlogin/>

        }
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJobs />} />
          <Route path="/applications" element={<Applications />} />
        </Routes>
      </div>
    </>
  )
}

export default App
