import { useState } from 'react'
import General from './components/General.jsx'
import GeneralForm from './components/GeneralForm.jsx'
import Education from './components/Education.jsx'
import EducationForm from './components/EducationForm.jsx'
import Experience from './components/Experience.jsx'
import ExperienceForm from './components/ExperienceForm.jsx'
import './App.css'

function App(){
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "Jake",
    lastName: "Rondo",
    phone: 1234567890,
    email: "why@lie.com",
  })

  const updateInfo = (firstName, lastName, phone, email) => {
    setGeneralInfo({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email
    });
  };

  return (
    <>
      <div className="forms">
        {/* <GeneralForm/> */}
        <GeneralForm updateInfo={updateInfo}/>
        <EducationForm/>
        <ExperienceForm/>
      </div>

      <div className="cv">
        <General data={generalInfo}/>
        <Education/>
        <Experience/>
      </div>
    </>
  )
}

export default App
