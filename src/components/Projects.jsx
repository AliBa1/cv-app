/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './Projects.css'

function Projects({data}) {
  const projectsList = data.map(project => 
    <li key={project.id}> 
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p>
          <span style={{fontWeight: 'bold'}}>{project.projectName}</span>
        </p>
        <p>{project.startMonth} {project.startYear} {project.endMonth && (<span>- {project.endMonth} {project.endYear}</span>)}</p>
      </div>
        
      {project.linkName && project.link && (<a href={project.link} target="_blank" style={{textDecoration: "underline"}}>{project.linkName}</a>)}
      {/* <ul>
        {experience.descriptions.map(description => 
          // <li key={description.id}>{description.description}</li>
        )}
      </ul> */}
      <p>
        {project.description} 
        {project.skills && (<span style={{fontWeight: "bold"}}> ({project.skills})</span>)}
      </p>
    </li>
  );

  return (
    <>
      <h2>Projects</h2>
      <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>{projectsList}</ul>
    </>
  )
}
  
  export default Projects