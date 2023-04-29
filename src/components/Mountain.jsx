import React, { useState } from 'react'
import mountain1 from './Images/CT_SkillTest_v3-18.png'
import mountain2 from './Images/CT_SkillTest_v3-17.png'
import Schedule from './Schedule'
function Mountain() {
       const[val,setval]=useState(1);
  return (
    <div className='mountain' id='team'> 
        <div className="flexbox">
             <button className='btns'><img src={mountain1} alt="" className="mountain1" onClick={()=>(setval(1))}/></button>
             <button className='btns'><img src={mountain2} alt="" className="mountain2" onClick={()=>(setval(2))}/></button>
             {console.log(val)}
        </div>
        <Schedule val={val}/>
    </div>
  )
}

export default Mountain