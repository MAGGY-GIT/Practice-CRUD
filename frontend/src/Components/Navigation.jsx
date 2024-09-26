import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../static/images/logo.png'
import '../App.css'
// this file adds any styling from the css fileB




const Navigation = () => {
    return (
        <div>

            <Navbar className="">
                <Navbar.Brand href="#">
                    <img alt="" src={logo}
                        className=" app-logo"/>
                        Student Management System
                    
                </Navbar.Brand>
            </Navbar>
        </div>
    )
        

}

export default Navigation