import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete ,MdOutlineAddBox} from 'react-icons/md';
import './usertable.css'
import Header from './Header';
import Sidebar from './Sidebar';
import { Link ,Outlet} from 'react-router-dom';
import Spinner from './admin/Spinner';
import Modalpopup from './modalpopup';
import Modal from './modal/usercard';

function Usertable({user}) {


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  return (


    <div className='grid-containeradmin adminbody'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       
    

      <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative  z-index-2">
              <div className="bg-gradient-primary title shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize title2 ">Users table</h6>
              </div>
            </div>
            
            <div className="card-body px-0 pb-2">

              
                
              <div className="table-responsive p-0">
              <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8"></h1>
          <Link to="create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
                <table className="table align-items-center mb-0">
                    
                  <thead>
                    <tr>
                    
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">FullName / Specality</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder ps-2 opacity-7">Email</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder ps-2 opacity-7">Status</th>

                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder ps-2 opacity-7">Phone</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder ps-2 opacity-7">Birthdate</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder ps-2 opacity-7">Actions</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                     {user.map((user ) => (
                      <tr >
                        <td>
                          <div className="d-flex px-2 py-1">
                            <div>
                              <img src={user.url} className="avatar avatar-sm me-3 border-radius-lg" alt={user.name} />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">{user.name} {user.lastname}</h6>
                              <p className="text-xs text-secondary mb-0">{user.speciality}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-xs font-weight-bold mb-0">{user.email}</p>
                        </td>
                        <td className="align-middle text-center text-sm">
                          <span className={`badge badge-sm ${user.status === 'admin' ? 'bg-gradient-success' : user.status === 'teacher' ? 'bg-gradient-primary' : 'bg-gradient-secondary'}`}>{user.status}</span>

                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">{user.tel}</span>
                        </td>
                        <td className="align-middle text-center">
                          <span className="text-secondary text-xs font-weight-bold">{user.birthDate ? user.birthDate.split('T')[0] : ""}</span>
                        </td>
                        
                        <td className="align-middle">
                        <div className='flex justify-center gap-x-4'>

                
                        <Link to={`/Admin/details/${user._id}`}
                            >
                        <BsInfoCircle className='text-2xl text-green-800' />
                        </Link>

                        <Link to={`/Admin/edit/${user._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                        </Link>
                            <Link to={`/Admin/delete/${user._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600' />
                        </Link>
                            </div>

                            
                         </td>
                      </tr>
                    ))} 
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export default Usertable;


// import React,{useState} from 'react'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import './usertable.css'

// const Usertable = () => {
//     const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//     return (


//         <div className='grid-containeradmin adminbody'>

//             <Header OpenSidebar={OpenSidebar} />
//             <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />




//             <div className="container-fluid py-4">
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card my-4">
//                             <div className="card-header p-0 position-relative  z-index-2">
//                                 <div className="bg-gradient-primary title shadow-primary border-radius-lg pt-4 pb-3">
//                                     <h6 className="text-white text-capitalize title2 ">Users table</h6>
//                                 </div>
//                             </div>
//                             <div className="card-body px-0 pb-2">
//                                 <div className="table-responsive p-0">
//                                     <table className="table align-items-center mb-0">
//                                         <thead>
//                                             <tr>
//                                                 <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">name</th>
//                                                 <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">lastname</th>
//                                                 <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email</th>
//                                                 <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
//                                                 <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Birthdate</th>
//                                                 <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
//                                                 <th className="text-secondary opacity-7"></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user1" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">John Michael</h6>
//                                                             <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                   
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-success">Online</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle ">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user2" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">Alexa Liras</h6>
//                                                             <p className="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-xs font-weight-bold mb-0">Programator</p>
                                                    
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-secondary">Offline</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs action" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs action2" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Delete
//                                                     </a>
                                                    
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user3" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">Laurent Perrier</h6>
//                                                             <p className="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-xs font-weight-bold mb-0">Expert</p>
                                                    
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-success">Online</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">19/09/17</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user4" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">Michael Levi</h6>
//                                                             <p className="text-xs text-secondary mb-0">michael@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-xs font-weight-bold mb-0">Developer</p>
                                                    
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-success">Online</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">24/12/08</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user5" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">Richard Gran</h6>
//                                                             <p className="text-xs text-secondary mb-0">richard@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
                                                    
//                                                     <p className="text-xs font-weight-bold mb-0">Developer</p>
                                                    
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-secondary">Offline</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">04/10/21</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                             <tr>
//                                                 <td>
//                                                     <div className="d-flex px-2 py-1">
//                                                         <div>
//                                                             <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6" />
//                                                         </div>
//                                                         <div className="d-flex flex-column justify-content-center">
//                                                             <h6 className="mb-0 text-sm">Miriam Eric</h6>
//                                                             <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
//                                                         </div>
//                                                     </div>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-xs font-weight-bold mb-0">Programator</p>
//                                                 </td>
//                                                 <td className="align-middle text-center text-sm">
//                                                     <span className="badge badge-sm bg-gradient-secondary">Offline</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
//                                                 </td>
//                                                 <td className="align-middle text-center">
//                                                     <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
//                                                 </td>
//                                                 <td className="align-middle">
//                                                     <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
//                                                         Edit
//                                                     </a>
//                                                 </td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
              

//             </div>

//         </div>
//     )
// }

// export default Usertable
