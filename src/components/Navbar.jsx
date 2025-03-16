import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from '../context/DoctorConext'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const { aToken, setaToken } = useContext(AdminContext);
  const { dToken, setdToken } = useContext(DoctorContext);
  const navigate = useNavigate()
  const logouthandler=()=>{
    navigate('/')
    aToken && setaToken("");
    aToken && localStorage.removeItem("aToken");
     dToken && setdToken("");
     dToken && localStorage.removeItem("dToken");
  }
  return (
    <div
      className="flex justify-between items-center px-4 sm:px-10 py-3 border-b
      border-gray-100 bg-white"
    >
      <div className="flex items-center gap-2 text-xs">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button
        onClick={logouthandler}
        className="bg-primary text-white text-sm px-8 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar
