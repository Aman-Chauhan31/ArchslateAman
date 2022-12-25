import React from 'react'
import Navbar from './component/Navbar/Navbar'
import './home.css'
import { BsArrowLeft } from "react-icons/bs";
import Banner from './component/Banner/Banner';
import Card from './component/Card/Card';
import Morecard from './component/Morecard/Morecard';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='homes'>
      <p><BsArrowLeft/>Back to jobs</p>
      <Banner/>
      <Card/>
      <Morecard/>
      </div>
      
      
    </div>
  )
}

export default Home
