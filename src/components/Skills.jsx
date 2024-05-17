/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './Skills.css'

function Skills({data}) {
  const skillsList = data.map((skill, index) => 
  <span key={index}>
    {skill}
    {index != data.length - 1 && ', '}
  </span>
  );
  return (
    <>
      {/* <h2>Projects</h2>
      <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>{skillsList}</ul> */}

      {/* <li style={{fontWeight: 'bold', listStyleType: 'none'}}>Skills: <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>{skillsList}</ul></li> */}

      <p style={{paddingTop: '1rem'}}><span style={{fontWeight: 'bold', textDecoration: "underline"}}>Skills:</span> {skillsList}</p>
    </>
  )
}
  
  export default Skills