import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { RiAdminLine ,RiLogoutBoxRLine  } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar1" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <RiAdminLine   className='icon_header'/> Admin
            </div>
            <span className='iconadmin close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-listadmin'>
            <li className='sidebar-list-itemadmin'>
                <Link to="/">
                    <BsGrid1X2Fill className='iconadmin'/> Dashboard
                </Link>
            </li>
            {/* <li className='sidebar-list-itemadmin'>
                <a href="">
                    <BsFillArchiveFill className='iconadmin'/> Products
                </a>
            </li> */}
            {/* <li className='sidebar-list-itemadmin'>
                <a href="">
                    <BsFillGrid3X3GapFill className='iconadmin'/> Categories
                </a>
            </li> */}
            <li className='sidebar-list-itemadmin'>
                <Link to="/Admin">
                    <BsPeopleFill className='iconadmin'/> Users
                </Link>
            </li>
            <li className='sidebar-list-itemadmin'>
                <a href="">
                    <BsMenuButtonWideFill className='iconadmin'/> Reports
                </a>
            </li>
            <li className='sidebar-list-itemadmin'>
                <a href="">
                    <CgProfile  className='iconadmin'/> Profile
                </a>
            </li>
           
            <li className='sidebar-list-itemadmin'>
                <a href="">
                    <BsFillGearFill className='iconadmin'/> Setting
                </a>
            </li>
            <li className='sidebar-list-itemadmin'>
                <a href="">
                    <RiLogoutBoxRLine  className='iconadmin'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar