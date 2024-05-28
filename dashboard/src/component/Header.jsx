import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <div className='headeradmin '>
        <div className='menu-icon'>
            <BsJustify className='iconadmin' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='iconadmin'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill className='iconadmin'/>
            <BsFillEnvelopeFill className='iconadmin'/>
            <BsPersonCircle className='iconadmin'/>
        </div>
    </div>
  )
}

export default Header