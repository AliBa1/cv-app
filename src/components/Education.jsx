import { useState } from 'react'
// import './Education.css'

function Education() {
  // const [count, setCount] = useState(0)
  const education = [
    { schoolName: "University of Genius", 
      city: "Sacramento", 
      state:"CA", 
      startMonth:"March", 
      startYear: "2099", 
      endMonth:"April", 
      endYear: "2110",
      degreeTitle: "Bachelors in Comptuer Science",
      gpa: '' }
  ];

  const educationList = education.map(session => 
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <p><span style={{fontWeight: 'bold'}}>{session.schoolName}</span> - {session.city}, {session.state}</p>
        <p>{session.startMonth} {session.startYear} - {session.endMonth} {session.endYear}</p>
      </div>

      <p style={{ color: 'dimgray' }}>{session.degreeTitle}</p>
      {session.gpa && (
        <p style={{ color: 'dimgray' }}>GPA: {session.gpa}</p>
      )}
      
    </>
  );

  return (
    <>
      <h2>Education</h2>
      {educationList}
    </>
  )
}

export default Education