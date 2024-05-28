
import { useState } from 'react'
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AdminHome from './component/admin/Adminhome'
import Admin from './component/admin/Admin'
import Usertable from './component/Usertable'
import Adduser from './pages/Adduser'
import Deleteuser from './pages/Deleteuser'
import Edituser from './pages/Edituser'
import ShowUsers from './pages/ShowUsers'
import Modalpopup from './component/modalpopup'


function App() {

  return (

    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/create" element={<Adduser />} />
          {/* <Route path="/Admin/details/:id" element={<ShowUsers />} />
          <Route path="Admin/edit/:id" element={<Edituser />} />
          <Route path="Admin/delete/:id" element={<Deleteuser />} /> */}
        <Route path="/modalpopup" element={<Modalpopup />} />

        </Routes>
      </BrowserRouter>

    </div>

  )
}

export default App