import { useState } from 'react'
// import './ExperienceForm.css'

function ExperienceForm() {
  const [showForm, setShowForm] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [startDate, setStartDate] = useState('');
  const startMonth = startDate.length > 0 ? startDate.slice(5, 7): "";
  const startYear = startDate.length > 0 ? startDate.slice(0, 4) : "";
  const [endDate, setEndDate] = useState('');
  const endMonth = endDate.length > 0 ? endDate.slice(5, 7): "";
  const endYear = endDate.length > 0 ? endDate.slice(0, 4) : "";
  const [jobTitle, setJobTitle] = useState('');
  const [descriptions, setDescriptions] = useState([]);

  function updateExperiences() {
    console.log("Company: " + companyName);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Start Month: " + startMonth);
    console.log("Start Year: " + startYear);
    console.log("End Month: " + endMonth);
    console.log("End Year: " + endYear);
    console.log("Job Title: " + jobTitle);
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
          <label>Company Name</label>
          <input value={companyName} onChange={e => setCompanyName(e.target.value)} required/>
          
          <label>City</label>
          <input value={city} onChange={e => setCity(e.target.value)} required/>

          <label>State</label>
          <input value={state} onChange={e => setState(e.target.value)} maxLength={2}  required/>
          
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}/>

          <label>End Date</label>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}/>

          <label>Job Title</label>
          <input value={jobTitle} onChange={e => setJobTitle(e.target.value)} required/>

          {/* <label>Description</label>
          <input value={descriptions} onChange={e => setDescriptions(e.target.value)} required/> */}

          {/* <button type="submit" onClick={() => {
            setShowForm(false);
          }}>Enter</button> */}
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
}

export default ExperienceForm