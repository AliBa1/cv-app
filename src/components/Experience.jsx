/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './Experience.css'

function Experience({data}) {
  const experiencesList = data.map(experience => 
    <li key={experience.id}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p><span style={{fontWeight: 'bold'}}>{experience.companyName}</span> - {experience.city}, {experience.state}</p>
        <p>{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</p>
      </div>

      <p style={{ color: 'dimgray' }}>{experience.jobTitle}</p>
      
      {/* <ul>
        {experience.descriptions.map(description => 
          // <li key={description.id}>{description.description}</li>
        )}
      </ul> */}
      <p>{experience.description}</p>
    </li>
  );

  return (
    <>
      <h2>Experience</h2>
      <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>{experiencesList}</ul>
    </>
  )
}

export default Experience