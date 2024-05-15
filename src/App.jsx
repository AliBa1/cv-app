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
    firstName: "Full",
    lastName: "Name",
    phone: "(123) 456-7890",
    email: "email@email.com",
  })
  const updateGeneral = (firstName, lastName, phone, email) => {
    setGeneralInfo({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email
    });
  };

  const [educationInfo, setEducationInfo] = useState([]);
  const updateEducation = (schoolName, city, state, startMonth, startYear, endMonth, endYear, degreeType, major, gpa) => {
    setEducationInfo([...educationInfo, {
      id: educationInfo.length, 
      schoolName: schoolName, 
      city: city, 
      state: state, 
      startMonth: startMonth, 
      startYear: startYear, 
      endMonth: endMonth, 
      endYear: endYear,
      degreeType: degreeType,
      major: major,
      gpa: gpa
    }]);
  };

  const [experienceInfo, setExperienceInfo] = useState([]);
  const updateExperience = (companyName, city, state, startMonth, startYear, endMonth, endYear, jobTitle, description) => {
    setExperienceInfo([...experienceInfo, {
      id: experienceInfo.length,
      companyName: companyName, 
      city: city, 
      state: state, 
      startMonth: startMonth, 
      startYear: startYear, 
      endMonth: endMonth, 
      endYear: endYear,
      jobTitle: jobTitle,
      description: description
    }]);
  }

  return (
    <>
      <div className="forms">
        <GeneralForm updateInfo={updateGeneral}/>
        <EducationForm updateInfo={updateEducation}/>
        <ExperienceForm updateInfo={updateExperience}/>
      </div>

      <div className="cv">
        <General data={generalInfo}/>
        <Education data={educationInfo}/>
        <Experience data={experienceInfo}/>
      </div>
    </>
  )
}

export default App
