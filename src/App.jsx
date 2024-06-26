import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Personal from './components/Personal.jsx'
import PersonalForm from './components/forms/PersonalForm.jsx'
import Education from './components/Education.jsx'
import EducationForm from './components/forms/EducationForm.jsx'
import Experience from './components/Experience.jsx'
import ExperienceForm from './components/forms/ExperienceForm.jsx'
import './App.css'
import Projects from './components/Projects.jsx'
import ProjectsForm from './components/forms/ProjectsForm.jsx'
import Skills from './components/Skills.jsx'
import SkillsForm from './components/forms/SkillsForm.jsx'
import ScreenshotPDF from './components/tools/ScreenshotPDF.jsx'
import ScreenshotDocx from './components/tools/ScreenshotDocx.jsx'

function App(){
  const [personalData, setPersonalData] = useState({
    firstName: "Full",
    lastName: "Name",
    phone: "(123) 456-7890",
    email: "email@email.com",
  })

  const updatePersonal = (firstName, lastName, phone, email) => {
    setPersonalData({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email
    });
  };


  const [educationData, setEducationData] = useState([
    {
      id: uuidv4(),
      index: 0,
      schoolName: "University of Washington", 
      city: "Seattle", 
      state: "WA", 
      startDate: "2018-08-16",
      startMonth: "August", 
      startYear: "2018", 
      endDate: "2022-05-16",
      endMonth: "May", 
      endYear: "2022",
      degreeType: "Bachelors",
      major: "Biochemistry",
      minors: "Statistics, Geography",
      gpa: 4.1
    }
  ]);

  const updateEducation = (index, schoolName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, minors, gpa) => {
    setEducationData([...educationData, {
      id: uuidv4(), 
      index: index, 
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
      minors: minors,
      gpa: gpa
    }]);
  };

  const editEducation = (index, schoolName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, minors, gpa) => {
    setEducationData(educationData.map(session => {
      if (session.index == index) {
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
          minors: minors,
          gpa: gpa
        };
      }
      return session;
    }));
  };


  const [experienceData, setExperienceData] = useState([{
    id: uuidv4(),
    index: 0,
    companyName: "Microsoft", 
    city: "Seattle", 
    state: "WA", 
    startDate: "2022-08-16",
    startMonth: "August", 
    startYear: "2022", 
    endDate: "2024-05-16",
    endMonth: "May", 
    endYear: "2024",
    jobTitle: "Biodiversity Reasearcher",
    description: "Took a detailed look at the biodiversity in the area then use data anaysis (python) to explore the data and write papers.",
  }]);

  const updateExperience = (index, companyName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, jobTitle, description) => {
    setExperienceData([...experienceData, {
      id: uuidv4(),
      index: index,
      companyName: companyName, 
      city: city, 
      state: state, 
      startDate: startDate,
      startMonth: startMonth, 
      startYear: startYear, 
      endDate: endDate,
      endMonth: endMonth, 
      endYear: endYear,
      jobTitle: jobTitle,
      description: description
    }]);
  }

  const editExperience = (index, companyName, city, state, startDate, startMonth, startYear, endDate, endMonth, endYear, jobTitle, description) => {
    setExperienceData(experienceData.map(experience => {
      if (experience.index == index) {
        return {
          ...experience,
          companyName: companyName, 
          city: city, 
          state: state, 
          startDate: startDate,
          startMonth: startMonth, 
          startYear: startYear, 
          endDate: endDate,
          endMonth: endMonth, 
          endYear: endYear,
          jobTitle: jobTitle,
          description: description
        };
      }
      return experience;
    }));
  };


  const [projectsData, setProjectsData] = useState([{
    id: uuidv4(),
    index: 0,
    projectName: "Snake Data Analysis", 
    startDate: "2024-05-16",
    startMonth: "May", 
    startYear: "2024", 
    endDate: "2024-08-16",
    endMonth: "August", 
    endYear: "2024",
    linkName: "Open AI",
    link: "https://www.openai.com",
    description: "Anylize snake data and write report.",
    skills: "Python, Lab",
  }]);

  const updateProjects = (index, projectName, startDate, startMonth, startYear, endDate, endMonth, endYear, linkName, link, description, skills) => {
    setProjectsData([...projectsData, {
      id: uuidv4(),
      index: index,
      projectName: projectName, 
      startDate: startDate,
      startMonth: startMonth, 
      startYear: startYear, 
      endDate: endDate,
      endMonth: endMonth, 
      endYear: endYear,
      linkName: linkName,
      link: link,
      description: description,
      skills: skills,
    }]);
  }

  const editProject = (index, projectName, startDate, startMonth, startYear, endDate, endMonth, endYear, linkName, link, description, skills) => {
    setProjectsData(projectsData.map(project => {
      if (project.index == index) {
        return {
          ...project,
          projectName: projectName, 
          startDate: startDate,
          startMonth: startMonth, 
          startYear: startYear, 
          endDate: endDate,
          endMonth: endMonth, 
          endYear: endYear,
          linkName: linkName,
          link: link,
          description: description,
          skills: skills
        };
      }
      return project;
    }));
  };

  const [skillsData, setSkillsData] = useState(["Python", "HTML", "CSS"]);
  const updateSkills = (skills) => {
    setSkillsData(skills);
  }

  return (
    <>
      <div className="forms">
        <PersonalForm updateData={updatePersonal}/>
        <EducationForm updateData={updateEducation} editData={editEducation} data={educationData}/>
        <ExperienceForm updateData={updateExperience} editData={editExperience} data={experienceData}/>
        <ProjectsForm updateData={updateProjects} editData={editProject} data={projectsData}/>
        <SkillsForm updateData={updateSkills} data={skillsData}/>
        <ScreenshotPDF id={"resumeFile"}/>
        <ScreenshotDocx id={"resumeFile"}/>
      </div>

      <div className="cv" id='resumeFile'>
        <Personal data={personalData}/>
        <Education data={educationData}/>
        <Experience data={experienceData}/>
        <Projects data={projectsData}/>
        <Skills data={skillsData}/>
      </div>
    </>
  )
}

export default App
