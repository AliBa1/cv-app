import { useState } from 'react'
// import './Experience.css'

function Experience() {
//   const [count, setCount] = useState(0)
  const experiences = [
    { id: 0,
      companyName: "Google", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      jobTitle: "Software Dev",
      descriptions: [
        { id: 0, description: "Worked in HTML"}, 
        { id: 1, description: "Developed systems"} ] 
      },
    { id: 1,
      companyName: "Google", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      jobTitle: "Software Dev",
      descriptions: [
        { id: 0, description: "Worked in HTML"}, 
        { id: 1, description: "Developed systems"} ] 
      },
  ];

  const experiencesList = experiences.map(experience => 
    <li key={experience.id}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p><span style={{fontWeight: 'bold'}}>{experience.companyName}</span> - {experience.city}, {experience.state}</p>
        <p>{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</p>
      </div>

      <p style={{ color: 'dimgray' }}>{experience.jobTitle}</p>

      <ul>
        {experience.descriptions.map(description => 
          <li key={description.id}>{description.description}</li>
        )}
      </ul>
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