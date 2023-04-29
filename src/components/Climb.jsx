import React from 'react'
import icon2 from './Images/CT_SkillTest_v3-21.png'
import climb from './Images/CT_SkillTest_v3-20.png'
function Climb() {
  return (
    <div className='climb'>
        <div className="climb-img">
            <img src={icon2} alt="" className="icon2" />
           <img src={climb} alt="" className="climb-text" />
        </div>
        <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae, delectus laudantium modi eius debitis labore ab repellat dignissimos corporis, similique .</div>
    </div>
  )
}

export default Climb