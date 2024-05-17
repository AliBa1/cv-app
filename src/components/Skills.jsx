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
      <p style={{paddingTop: '1rem'}}><span style={{fontWeight: 'bold', textDecoration: "underline"}}>Skills:</span> {skillsList}</p>
    </>
  )
}
  
export default Skills