import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { MdPlayLesson } from "react-icons/md";
 import { PiStudentBold } from "react-icons/pi";
 import { FaChalkboardTeacher } from "react-icons/fa";


function Home() {

    const data = [
        {
          name: 'Mo',
          Student: 1,
          Teacher: 2,
          amt: 1,
        },
        {
          name: 'Tu',
          Student: 4,
          Teacher: 2,
          amt: 210,
        },
        {
          name: 'We',
          Student: 3,
          Teacher: 5,
          amt: 20,
        },
        {
          name: 'Th',
          Student: 1,
          Teacher: 8,
          amt: 10,
        },
        {
          name: 'Fr',
          Student: 7,
          Teacher: 2,
          amt: 21,
        },
        {
          name: 'Sa',
          Student: 1,
          Teacher: 4,
          amt: 20,
        },
        {
          name: 'Su',
          Student: 0,
          Teacher: 1,
          amt: 20,
        },
      ];
     

  return (
 
    <main className='main-containeradmin'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='cardadmin'>
                <div className='card-inner'>
                    <h3>COURSES</h3>
                    <MdPlayLesson className='card_iconadmin'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='cardadmin'>
                <div className='card-inner'>
                    <h3>STUDENTs</h3>
                    <PiStudentBold className='card_iconadmin'/>
                </div>
                <h1>4</h1>
            </div>
            <div className='cardadmin'>
                <div className='card-inner'>
                    <h3>TEACHERS</h3>
                    <FaChalkboardTeacher className='card_iconadmin'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='cardadmin'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_iconadmin'/>
                </div>
                <h1>1</h1>
            </div>
        </div>

        <div className='chartsadmin'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Student" fill="#8884d8" />
                <Bar dataKey="Teacher" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Student" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Teacher" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home