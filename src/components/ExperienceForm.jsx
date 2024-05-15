/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput, FormTextArea } from '../tools/FormInput';
import DateToData from '../tools/DateToData';
// import './ExperienceForm.css'

function ExperienceForm({updateInfo}) {
  const [showForm, setShowForm] = useState(false);
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

  function updateExperiences() {
    console.log("Company: " + companyName);
    console.log("City: " + city);
    console.log("State: " + state.toUpperCase());
    console.log("Start Month: " + startMonth);
    console.log("Start Year: " + startYear);
    console.log("End Month: " + endMonth);
    console.log("End Year: " + endYear);
    console.log("Job Title: " + jobTitle);
    console.log("Description: " + description);
    updateInfo(companyName, city, state.toUpperCase(), startMonth, startYear, endMonth, endYear, jobTitle, description);
    setCompanyName('');
    setCity('');
    setState('');
    setStartDate('');
    setEndDate('');
    setJobTitle('');
    setDescription('');
  }

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm)}}>Experience</button>

      {showForm && (
        <form onSubmit={(e) => {
          e.preventDefault(),
          updateExperiences(),
          setShowForm(false)
        }}>
          <FormInput labelTitle="Company Name" value={companyName} setValue={setCompanyName} isRequired={true}/>
          <FormInput labelTitle="City" value={city} setValue={setCity} maxLength={undefined} isRequired={true}/>
          <FormInput labelTitle="State" value={state.toUpperCase()} setValue={setState} maxLength={2} isRequired={true}/>
          <FormInput labelTitle="Start Date" type="date" value={startDate} setValue={setStartDate} isRequired={true}/>
          <FormInput labelTitle="End Date (not required)" type="date" value={endDate} setValue={setEndDate} isRequired={false}/>
          <FormInput labelTitle="Job Title" value={jobTitle} setValue={setJobTitle} isRequired={true}/>
          <FormTextArea labelTitle="Description" value={description} setValue={setDescription} isRequired={true}/>
          
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
}

export default ExperienceForm