import React from 'react'
import './card.css'
import { BsLightningCharge, BsStar, BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";

const Card = () => {
  return (
    <div className='card'>
      <div className="containermini">
        <div className="contain">
      <div className="tagname">
        <BsLightningCharge style={{width: '24px', height: '24px'}}/>
        <p>Software Skills</p>
        </div>
        <div className="detail">
        <button><BsLightningCharge/><span>Rhino</span></button>
        <button>Sketchup</button>
        <button>Vectorworks</button>
        </div>
      </div>
      </div>

      <div className="containermini">
        <div className="tagname">
           <BsStar style={{width: '24px', height: '24px'}}/><p>Experience</p>
        </div>
        <div className="light">
            <p>Associate</p>
            <p>3+Year</p>
        </div>
      </div>

      <div className="containermini">
        <div className="tagname">
           <BsCurrencyDollar style={{width: '24px', height: '24px'}}/><p>Rate</p>
        </div>
        <div className="light">
            <p>$55-$65/hour</p>
        </div>
      </div>

      <div className="containermini">
         <div className="tagname">
           <MdOutlineLocationOn style={{width: '24px', height: '24px'}}/><p>Location</p>
        </div>
        <div className="light">
            <p>Bozeman, MT</p>
            <p>USA</p>
            <button>On-site</button>
        </div>
      </div>
    </div>
  )
}

export default Card
