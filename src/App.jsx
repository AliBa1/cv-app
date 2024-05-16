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

  // const [educationInfo, setEducationInfo] = useState([]);
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      index: 0,
      schoolName: "University of Washington", 
      city: "Seattle", 
      state: "WA", 
      startDate: "2020-08-16",
      startMonth: "August", 
      startYear: "2020", 
      endDate: "2024-05-16",
      endMonth: "May", 
      endYear: "2024",
      degreeType: "Bachelors",
      major: "Biochemistry",
      gpa: 4.1
    }
  ]);
  const updateEducation = (schoolName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, gpa) => {
    setEducationInfo([...educationInfo, {
      id: educationInfo.length, 
      index: educationInfo.length, 
      schoolName: schoolName, 
      city: city, 
      state: state, 
      startDate: startDate,
      startMonth: startMonth, 
      startYear: startYear, 
      endDate: endDate,
      endMonth: endMonth, 
      endYear: endYear,
      degreeType: degreeType,
      major: major,
      gpa: gpa
    }]);
  };
  // const [educationEditID, setEducationEditID] = useState(null);
  const editEducation = (index, schoolName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, gpa) => {
    // setEducationInfo([educationInfo[index], {
    //   id: educationInfo.length, 
    //   schoolName: schoolName, 
    //   city: city, 
    //   state: state, 
    //   startMonth: startMonth, 
    //   startYear: startYear, 
    //   endMonth: endMonth, 
    //   endYear: endYear,
    //   degreeType: degreeType,
    //   major: major,
    //   gpa: gpa
    // }]);



    // setEducationInfo(educationInfo[index] = {
    //   id: educationInfo[index].id,
    //   index: index,
    //   schoolName: schoolName, 
    //   city: city, 
    //   state: state, 
    //   startDate: startDate, 
    //   startMonth: startMonth, 
    //   startYear: startYear, 
    //   endDate: endDate, 
    //   endMonth: endMonth, 
    //   endYear: endYear,
    //   degreeType: degreeType,
    //   major: major,
    //   gpa: gpa
    // });

    // setEducationInfo(educationInfo.map(session => {
    //   if (session.index == index) {
    //     session.id = educationInfo[index].id;
    //     session.index = index;
    //     session.schoolName = schoolName;
    //     session.city = city; 
    //     session.state = state;
    //     session.startDate = startDate; 
    //     session.startMonth = startMonth;
    //     session.startYear = startYear;
    //     session.endDate = endDate;
    //     session.endMonth = endMonth;
    //     session.endYear = endYear;
    //     session.degreeType = degreeType;
    //     session.major = major;
    //     session.gpa = gpa;
    //   }
    // }));

    setEducationInfo(educationInfo.map(session => {
      if (session.index === index) {
        return {
          ...session,
          schoolName: schoolName,
          city: city,
          state: state,
          startDate: startDate,
          startMonth: startMonth,
          startYear: startYear,
          endDate: endDate,
          endMonth: endMonth,
          endYear: endYear,
          degreeType: degreeType,
          major: major,
          gpa: gpa
        };
      }
      return session;
    }));

    console.log(educationInfo);
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
        <EducationForm updateInfo={updateEducation} editInfo={editEducation} data={educationInfo}/>
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
