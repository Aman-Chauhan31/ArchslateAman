import React from 'react'
import archslate from '../../Images/Archslate.png'
import logo from '../../Images/logo.png'
import './navbar.css'
import {BsStars, BsBag} from "react-icons/bs";
import { GrGlobe } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left-navbar">
            <img src={logo} alt=''></img>
            <img src={archslate} alt=''/>
        </div>
        <div className="right-navbar">
          <ul style={{listStyleType: 'none'}}>
            <li><BsStars style={{width: '22px', height: '22px'}}/>Candidates</li>
            <li><GrGlobe style={{width: '22px', height: '22px'}}/>Companies</li>
            <li><BsBag style={{width: '22px', height: '22px'}}/>Jobs</li>
            <li><MdOutlineEmail style={{width: '22px', height: '22px'}}/>Notification</li>
            <li><AiOutlineUser style={{width: '22px', height: '22px'}}/>User Name</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
