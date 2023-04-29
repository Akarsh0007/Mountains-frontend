import React from 'react'
import icon1 from './Images/CT_SkillTest_v3-38.png'
import historytext from './Images/CT_SkillTest_v3-37.png'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Carousel from './Carousel';
function History() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  return (
    <div className='history' id='hist'>
      <div>
       <img src={icon1} alt="" className="icon1" />
        <img src={historytext} alt="" className="history-text" />
        <div className='text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia ipsum earum praesentium alias recusandae, similique aperiam repudiandae voluptatem, et accusantium quidem aliquam porro quae optio doloremque! Fuga, odit nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </div>
        </div>
        <Carousel/>
    </div>
  )
}

export default History