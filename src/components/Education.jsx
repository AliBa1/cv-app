/* eslint-disable react/prop-types */
// import { useState } from 'react'
// import './Education.css'

function Education({data}) {
  const educationList = data.map(session => 
    <li key={session.id} className="info-section">
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