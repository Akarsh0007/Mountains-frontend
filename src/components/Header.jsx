import React from "react"
import icon from './Images/CT_SkillTest_v3-5.png'
import history from './Images/history.png'
import team from './Images/team.png'
import laicon from './Images/CT_SkillTest_v3-42.png'
import { Link } from "react-router-dom"
function Header() {
  return (
    <div className='header'>
         <div className="header-img">
        <img src={icon} alt="" />
        <div className="accordian-tab">
        <Link className="tabt" to="#hist"><button className="btns" ><img src={history} alt="" /></button></Link>
        <Link className="tabt" to="#team"><button className="btns"><img src={team} alt="" /></button></Link>
        </div>
         </div>
        <img src={laicon} alt="" className="la-icon" />
    </div>
  )
}

export default Header