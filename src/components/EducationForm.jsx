import { useState } from 'react'
// import './EducationForm.css'

function EducationForm() {
  const [showForm, setShowForm] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [startDate, setStartDate] = useState('');
  const startMonth = startDate.length > 0 ? startDate.slice(5, 7): "";
  const startYear = startDate.length > 0 ? startDate.slice(0, 4) : "";
  const [endDate, setEndDate] = useState('');
  const endMonth = endDate.length > 0 ? endDate.slice(5, 7): "";
  const endYear = endDate.length > 0 ? endDate.slice(0, 4) : "";
  const [degreeType, setDegreeType] = useState('');
  const [major, setMajor] = useState('');

  function updateEducation() {
    console.log("School: " + schoolName);
    console.log("City: " + city);
    console.log("State: " + state);
    console.log("Start Month: " + startMonth);
    console.log("Start Year: " + startYear);
    console.log("End Month: " + endMonth);
    console.log("End Year: " + endYear);
    console.log("Degree: " + degreeType);
    console.log("Major: " + major);
  }

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm)}}>Education</button>

      {showForm && (
        <form onSubmit={(e) => {
          e.preventDefault(),
          updateEducation(),
          setShowForm(false)
        }}>
          <label>School Name</label>
          <input value={schoolName} onChange={e => setSchoolName(e.target.value)} required/>
          
          <label>City</label>
          <input value={city} onChange={e => setCity(e.target.value)} required/>

          <label>State</label>
          <input value={state} onChange={e => setState(e.target.value)} maxLength={2}  required/>
          
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)}/>

          <label>End Date</label>
          <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)}/>

          <label htmlFor="degree">Degree</label>
          <select id="degree" name="degree" onChange={e => setDegreeType(e.target.value)} required>
            <option value="Associates">Associates</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Doctoral">Doctoral</option>
          </select>

          <label>Major</label>
          <input value={major} onChange={e => setMajor(e.target.value)} required/>

          <button type="submit" onClick={() => {
            setShowForm(false);
            console.log("School: " + schoolName);
            console.log("City: " + city);
            console.log("State: " + state);
            console.log("Start Month: " + startMonth);
            console.log("Start Year: " + startYear);
            console.log("End Month: " + endMonth);
            console.log("End Year: " + endYear);
            console.log("Degree: " + degreeType);
            console.log("Major: " + major);
            }}>Enter</button>
        </form>
        )}
    </div>
  );
}

export default EducationForm