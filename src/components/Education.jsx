import { useState } from 'react'
// import './Education.css'

function Education() {
  // const [count, setCount] = useState(0)
  const education = [
    { id: 0, 
      schoolName: "University of Genius", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      degreeType: "Bachelors",
      major: "Comptuer Science",
      gpa: 3.1 }
  ];

  const educationList = education.map(session => 
    <li key={session.id}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p><span style={{fontWeight: 'bold'}}>{session.schoolName}</span> - {session.city}, {session.state}</p>
        <p>{session.startMonth} {session.startYear} - {session.endMonth} {session.endYear}</p>
      </div>

      <p style={{ color: 'dimgray' }}>{session.degreeType} in {session.major}</p>
      {session.gpa && (
        <p style={{ color: 'dimgray' }}>GPA: {session.gpa}</p>
      )}
      
    </li>
  );

  return (
    <>
      <h2>Education</h2>
      <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>{educationList}</ul>
    </>
  )
}

export default Education