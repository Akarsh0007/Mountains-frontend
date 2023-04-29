import React from 'react'
import icon from './Images/CT_SkillTest_v3-5.png'
import laicon from './Images/CT_SkillTest_v3-42.png'
import history from './Images/history1.png'
import { Link } from 'react-router-dom'
import team from './Images/team1.png'
function BottomNav() {
  return (
    <div className='btm-nav'>
          <div className="img">
          <img src={icon} alt="" className="icon" />
          <img src={laicon} alt="" className="laicon" />
           </div>
           <div>
           <Link to="#hist"><button className="btns" ><img src={history} alt="" /></button></Link>
        <Link to="#team"><button className="btns"><img src={team} alt="" /></button></Link>
        </div>
    </div>
  )
}

export default BottomNav