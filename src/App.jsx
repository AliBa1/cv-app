import { useState } from 'react'
import Personal from './components/Personal.jsx'
import PersonalForm from './components/PersonalForm.jsx'
import Education from './components/Education.jsx'
import EducationForm from './components/EducationForm.jsx'
import Experience from './components/Experience.jsx'
import ExperienceForm from './components/ExperienceForm.jsx'
import './App.css'

function App(){
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Full",
    lastName: "Name",
    phone: "(123) 456-7890",
    email: "email@email.com",
  })
  const updatePersonal = (firstName, lastName, phone, email) => {
    setPersonalInfo({
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
        <PersonalForm updateInfo={updatePersonal}/>
        <EducationForm updateInfo={updateEducation}/>
        <ExperienceForm updateInfo={updateExperience}/>
      </div>

      <div className="cv">
        <Personal data={personalInfo}/>
        <Education data={educationInfo}/>
        <Experience data={experienceInfo}/>
      </div>
    </>
  )
}

export default App
