import React from 'react'
import ScheduleText from './Images/CT_SkillTest_v3-14.png';
import content1 from "./Images/CT_SkillTest_v3-13.png"
import content2 from "./Images/CT_SkillTest_v3-9.png"
function Box(props) {
    return (
      <div className="box">
         <img src={ScheduleText} alt="" className='schedule-text' />
         {props.val===1 ? <img src={content1} alt="" />:
         <img src={content2} alt="" />
         }
      </div>
    );
  }
  
export default Box