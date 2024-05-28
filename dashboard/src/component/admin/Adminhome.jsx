
import { useState } from 'react'

import Header from '../Header'
import {Routes , Route ,BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import Sidebar from '../Sidebar'
import "./admin.css"


function AdminHome() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
  
    <div className='grid-containeradmin adminbody'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       <Home /> 
      
    </div>
    
  )
}

export default AdminHome