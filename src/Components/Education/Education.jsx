import React from 'react'
import './Education.css'
import Edu_data from '../../assets/Edu_data'
const Education = () => {
  return (
    <div id='education' className='edu'>
        <div className="edu-titl">
            <h1>Education</h1>
        </div> 
        <div className="edu-content">
            {Edu_data.map((Education,index)=>{
                return <div key={index} className="edu-format">
                    <h2>{Education.school}</h2>
                    <h3>{Education.name}</h3>
                    <h4>{Education.percent}</h4>
                </div>
            })}
        </div>
    </div>
  )
}

export default Education
