import React from "react"
import '../App.css'
import { FaGraduationCap } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
import { FaList } from "react-icons/fa"
import { ImProfile } from "react-icons/im"

const Navigation = () => {
  return (
    <div className="flex justify-between bg-slate-600 text-white ">
      <div className="logo inline-block py-5 mx-10 ">
        <a href="#" className="font-bold flex items-center p-3">
          <FaGraduationCap className=" w-10 h-10 mr-2"/>
          <span className="text-2xl">Student Management System</span>
        </a>
      </div>

      <div className="links mr-12 mt-7">
        <ul className="flex">
          <li className=" hover:text-black  hover:bg-white rounded mr-3 p-2">
            <a href="#" className="flex items-center">
              <GoHomeFill className="mr-1 w-5 h-6 "/>
              <span className="text-xl">Home</span>
            </a>
          </li>

          <li className=" hover:text-black  hover:bg-white rounded mr-3 p-2">
            <a href="#" className="flex items-center">
              <FaList className="mr-1 w-5 h-6 "/>
              <span className="text-xl">Students List</span>
            </a>
          </li>

          <li className=" hover:text-black  hover:bg-white rounded mr-3 p-2">
            <a href="#" className="flex items-center">
              <ImProfile className="mr-1 w-5 h-6 "/>
              <span className="text-xl">Student Profiles</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation