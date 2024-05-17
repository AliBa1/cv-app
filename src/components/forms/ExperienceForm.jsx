/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput, FormTextArea } from '../tools/FormInput';
import DateToData from '../tools/DateToData';
// import './ExperienceForm.css'

function ExperienceForm({updateData, editData, data}) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const newIndex = data.length;
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [startDate, setStartDate] = useState('');
  const startMonth = DateToData(startDate).month;
  const startYear = DateToData(startDate).year;
  const [endDate, setEndDate] = useState('');
  const endMonth = DateToData(endDate).month;
  const endYear = DateToData(endDate).year;
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');

  function emptyForm() {
    setCompanyName('');
    setCity('');
    setState('');
    setStartDate('');
    setEndDate('');
    setJobTitle('');
    setDescription('');
  }

  function updateExperiences() {
    // console.log("Company: " + companyName);
    // console.log("City: " + city);
    // console.log("State: " + state.toUpperCase());
    // console.log("Start Month: " + startMonth);
    // console.log("Start Year: " + startYear);
    // console.log("End Month: " + endMonth);
    // console.log("End Year: " + endYear);
    // console.log("Job Title: " + jobTitle);
    // console.log("Description: " + description);
    updateData(newIndex, companyName, city, state.toUpperCase(), startDate, startMonth, startYear, endDate, endMonth, endYear, jobTitle, description);
    emptyForm();
  }

  function setToEdit(experience) {
    setShowForm(true);
    setEditing(true);
    setEditIndex(experience.index);
    setCompanyName(experience.companyName);
    setCity(experience.city);
    setState(experience.state);
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
    setJobTitle(experience.jobTitle);
    setDescription(experience.description);
  }

  function editExperiences() {
    editData(editIndex, companyName, city, state.toUpperCase(), startDate, startMonth, startYear, endDate, endMonth, endYear, jobTitle, description);
    setEditing(false);
  }

  const experienceEntries = data.map(experience => 
    <li key={experience.id} style={{all: 'unset'}}>
      <button style={{width: '100%', padding: '1rem'}} onClick={() => {setToEdit(experience)}}>{experience.companyName}, {experience.startMonth} {experience.startYear}</button>
    </li>
  );

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm); setEditing(false); emptyForm();}}>Add Experience</button>

      {showForm && (
        <form onSubmit={(e) => { e.preventDefault(), (editing ? editExperiences() : updateExperiences()), setShowForm(false) }}>
          <FormInput labelTitle="Company Name" value={companyName} setValue={setCompanyName} isRequired={true}/>
          <FormInput labelTitle="City" value={city} setValue={setCity} maxLength={undefined} isRequired={true}/>
          <FormInput labelTitle="State" value={state.toUpperCase()} setValue={setState} maxLength={2} isRequired={true}/>
          <FormInput labelTitle="Start Date" type="date" value={startDate} setValue={setStartDate} isRequired={true}/>
          <FormInput labelTitle="End Date (not required)" type="date" value={endDate} setValue={setEndDate} isRequired={false}/>
          <FormInput labelTitle="Job Title" value={jobTitle} setValue={setJobTitle} isRequired={true}/>
          <FormTextArea labelTitle="Description" value={description} setValue={setDescription} isRequired={true}/>

          <button type="submit">{editing ? "Update":"Enter"}</button>
        </form>
      )}

      <ul style={{all: "unset"}}>
        {experienceEntries}
      </ul>
    </div>
  );
}

export default ExperienceForm