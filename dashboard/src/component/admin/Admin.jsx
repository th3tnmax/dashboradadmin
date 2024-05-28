import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Usertable from "../Usertable";




const Admin = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/users/getAllUsers")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (

    <>

      <section className=" adminmain-section">


      </section>
      <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
         
        </div>
        
        {loading ? <Spinner /> : <Usertable user={user} />}
        
      </div>
    </>

  );
};

export default Admin;
