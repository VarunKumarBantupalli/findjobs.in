import React from "react"
import {Route , Routes} from 'react-router-dom'
import Home from "./pages/Home"
import ApplyJobs from './pages/ApplyJobs'
import Applications from './pages/Applications'

function App() {

  return (
    <>
        <Routes>
             <Route path="/"  element={<Home/>}/>
             <Route path="/apply-job/:id"  element={<ApplyJobs/>}/>
             <Route path="/applications"  element={<Applications/>}/>
        </Routes>
    </>
  )
}

export default App
