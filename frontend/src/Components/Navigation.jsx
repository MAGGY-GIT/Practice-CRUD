import React from "react"
import '../App.css'
// this file adds any styling from the css file
import { FaGraduationCap } from "react-icons/fa"
import { GoHomeFill } from "react-icons/go"
import { FaList } from "react-icons/fa"
import { ImProfile } from "react-icons/im";




const Navigation = () => {
    return (
        <div className="overflow-hidden">
            <nav className="py-5 pl-7 bg-slate-400">

                <div className="flex text-2xl font-bold font-serif">
                    <FaGraduationCap className=" w-10 h-10 mr-3"/>
                    <a href="#">Student Management System</a>
                </div>
                
            </nav>

            {/* creating the side-navbar */}
            <aside id="default-sidebar" class=" top-0 left-0 w-60 h-screen font-serif float-left" aria-label="Sidebar">
                <div class=" h-full px-3 py-4 bg-slate-400 ">
                    <ul class="font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-base group">
                             <span><GoHomeFill className="w-6 h-6"/></span>
                             <span class="ms-3">Home</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-base group">
                                <span><FaList className="w-6 h-6"/></span>
                                <span class="flex-1 ms-3 whitespace-nowrap">List</span>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-base group">
                                <span><ImProfile className="w-6 h-6"/></span>
                                <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            
                            </a>
                        </li>

                        {/* <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 font-bold text-base group">
                            
                                <span class="flex-1 ms-3 whitespace-nowrap">Users</span>
                            </a>
                        </li> */}


                        
                    </ul>
                </div>
            </aside>


        </div>
    )
        

}

export default Navigation