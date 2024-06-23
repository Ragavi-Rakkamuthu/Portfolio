import React from 'react'
import './Project.css'
import pro_data from '../../assets/pro_data'

const Project = () => {
  return (
    <div id="project" className='project'>
    <div className="prj-titl">
        <h1>Projects</h1>
    </div> 
    <div className="pro-content">
        {pro_data.map((Project,index)=>{
            return <div key={index} className="prj-format">
                <h2>{Project.projectname}</h2>
                <h3>{Project.frontend}</h3>
                <h3>{Project.framework}</h3>
                <h3>{Project.backend}</h3>
                <h3>{Project.database}</h3>
            </div>
        })}
    </div>
</div>
  )
}

export default Project
