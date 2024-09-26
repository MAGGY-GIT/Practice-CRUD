import React from "react"
import { FaGraduationCap } from "react-icons/fa";
import '../App.css'
// this file adds any styling from the css fileB




const Navigation = () => {
    return (
        <div>

            <Navbar className="">
                <Navbar.Brand href="#">
                    <FaGraduationCap className=" app-logo"/>
                        Student Management System
                    
                </Navbar.Brand>
            </Navbar>
        </div>
    )
        

}

export default Navigation