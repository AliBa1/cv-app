/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput, FormTextArea } from '../tools/FormInput';
import DateToData from '../tools/DateToData';
// import './ExperienceForm.css'

function ProjectsForm({updateData, editData, data}) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const startMonth = DateToData(startDate).month;
  const startYear = DateToData(startDate).year;
  const [endDate, setEndDate] = useState('');
  const endMonth = DateToData(endDate).month;
  const endYear = DateToData(endDate).year;
  const [linkName, setLinkName] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  function emptyForm() {
    setProjectName('');
    setStartDate('');
    setEndDate('');
    setLinkName('');
    setLink('');
    setDescription('');
    setSkills('');
  }

  function updateProjects() {
    updateData(projectName, startDate, startMonth, startYear, endDate, endMonth, endYear, linkName, link, description, skills);
    emptyForm();
  }

  function setToEdit(experience) {
    setShowForm(true);
    setEditing(true);
    setEditIndex(experience.index);
    setProjectName(experience.projectName);
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
    setLinkName(experience.linkName);
    setLink(experience.link);
    setDescription(experience.description);
    setSkills(experience.skills)
  }

  function editProjects() {
    editData(editIndex, projectName, startDate, startMonth, startYear, endDate, endMonth, endYear, linkName, link, description, skills);
    setEditing(false);
  }

  const projectEntries = data.map(project => 
    <li key={project.id} style={{all: 'unset'}}>
      <button style={{width: '100%', padding: '1rem'}} onClick={() => {setToEdit(project)}}>{project.projectName}, {project.startMonth} {project.startYear}</button>
    </li>
  );

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm); setEditing(false); emptyForm();}}>Add Project</button>

      {showForm && (
        <form onSubmit={(e) => { e.preventDefault(), (editing ? editProjects() : updateProjects()), setShowForm(false) }}>
          <FormInput labelTitle="Project Name" value={projectName} setValue={setProjectName} isRequired={true}/>
          <FormInput labelTitle="Start Date" type="date" value={startDate} setValue={setStartDate} isRequired={true}/>
          <FormInput labelTitle="End Date (not required)" type="date" value={endDate} setValue={setEndDate} isRequired={false}/>
          {/* <FormInput labelTitle="Link" value={links} setValue={setLinks} isRequired={true}/> */}
          <FormInput labelTitle="Link Name" value={linkName} setValue={setLinkName} isRequired={false}/>
          <FormInput labelTitle="Link" value={link} setValue={setLink} isRequired={false}/>
          <FormTextArea labelTitle="Description" value={description} setValue={setDescription} isRequired={true}/>
          <FormInput labelTitle="Skills" value={skills} setValue={setSkills} isRequired={false}/>

          <button type="submit">{editing ? "Update":"Enter"}</button>
        </form>
      )}

      <ul style={{all: "unset"}}>
        {projectEntries}
      </ul>
    </div>
  );
}

export default ProjectsForm