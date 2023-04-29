import React from 'react'
import footer from './Images/CT_SkillTest_v3-3.png'
import icon from './Images/CT_SkillTest_v3-5.png'
import laicon from './Images/CT_SkillTest_v3-42.png'
function Footer() {
  return (
    <div className="footer">
         <div className="img">
          <img src={icon} alt="" className="icon" />
          <img src={laicon} alt="" className="laicon" />
           </div>
    <img src={footer} alt="" className="footer-img" />
</div>
  )
}

export default Footer