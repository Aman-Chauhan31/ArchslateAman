import React from 'react'
import './morecard.css'
import { MdStarBorder, MdOutlineEmail } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import photo from '../../Images/photo.png'

const Morecard = () => {
  return (
    <div className='morecard'>
        <div className="detailcard">
        <ul>
            <p>About this role</p>
            <li>Short overview about job and the way that the candidate would fit into the company.</li> 
            <li>Can also include extra instructions for the application process if any exist</li>
            
        </ul>

        <ul className='start'>
            <p>Responsibilities</p>
            <li >specific day to day task</li>
            <li >deliverables</li>
            <li >work enviroment requirements</li>
            <li >role within the current team</li>
            <li >etc.</li>
        </ul>

        <ul className='start'>
            <p>Skills</p>
            <li >software skills</li>
            <li >technical skills</li>
            <li >soft skills</li>
            <li >other</li>
        </ul>

        <ul className='start'>
            <p>Qualification</p>
            <li className='self'>Required</li>
            <li>education</li>
            <li >licenses and certification</li>
            <li >experience needed</li>
            <br/>
            <li className='self'>Bonus</li>
            <li>education</li>
            <li >licenses and certification</li>
            <li >experience needed</li>
        </ul>

        <ul className='start'>
            <p>Rate</p>
            <li>if available</li>
        </ul>

        <ul className='start'>
            <p>Time Estimate</p>
            <li>if applicable</li>
        </ul>

        <ul className='start'>
            <p>Work Autoriation</p>
            <li>tbd</li>
        </ul>

        <ul className='start'>
            <p>About Company</p>
            <li>Description of company with any uniform info or disclaimers - equal hiring<br/> oppportunity, etc.</li>
        </ul>

        <div className="low-detail">
            <button className='orange'>Apply on Archslate</button>
            <button className='blacks'><MdStarBorder style={{width: '22px', height: '22px'}}/><span>Save</span></button>
            <button className='blacks-1'><BsShare/><span>Share & Refer</span></button>
        </div>
        </div>
        <div className="infocard">
            <div className="infocard-mini">
            <p>Job Poster</p>
            <div className="infocard-row">
                <img src={photo} alt=''/>John Carlos<br/>Project Manager
            </div>
            <button><MdOutlineEmail style={{width: '22px', height: '22px'}}/><span>Message</span></button>
            </div>
        </div>
    </div>
  )
}

export default Morecard
