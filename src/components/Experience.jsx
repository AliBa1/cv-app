import { useState } from 'react'
// import './Experience.css'

function Experience() {
//   const [count, setCount] = useState(0)
  const experiences = [
    { companyName: "Google", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      jobTitle: "Software Dev",
      descriptions: ["Worked in HTML", "Developed systems"] },
    { companyName: "Google", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      jobTitle: "Software Dev",
      descriptions: ["Worked in HTML", "Developed systems"] }
  ];

  const experiencesList = experiences.map(experience => 
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p><span style={{fontWeight: 'bold'}}>{experience.companyName}</span> - {experience.city}, {experience.state}</p>
        <p>{experience.startMonth} {experience.startYear} - {experience.endMonth} {experience.endYear}</p>
      </div>

      <p style={{ color: 'dimgray' }}>{experience.jobTitle}</p>

      <ul>
        {experience.descriptions.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <h2>Experience</h2>
      {experiencesList}
    </>
  )
}

export default Experience