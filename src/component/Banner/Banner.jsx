import React from 'react'
import './banner.css'
import profile from '../../Images/profile.png'
import { BsShare, BsBookmark  } from "react-icons/bs";

const Banner = () => {
  return (
    <div className='banner'>
        <div className="container">
      <div className="banner-left">
        <div className="left-part">
       <img src={profile} classname="imag" alt="" />
       <div className="arch">
        <h1>Architectural Designer</h1>
        <p>Black Mountain Architecture</p>
        <p>Posted 07/27/2022</p>
       </div>
       </div>
       <div className="lower-left">
        <button className='black'>Architecture</button>
        <button className='green'>Freelance</button>
        <button className='blue'>Long-Term</button>
       </div>
      </div>
      <div className="banner-right">
        <div className='right'>
        <div className="upper-part">
            <BsShare style={{width: '22px', height: '22px'}}/>
            <BsBookmark style={{width: '22px', height: '22px'}}/>
        </div>

        <button className='green-1'>Status: Accepting Applications</button>
        <button className='orange'>Apply on Archslate</button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
