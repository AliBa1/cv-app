/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput } from '../tools/FormInput';
import DateToData from '../tools/DateToData';
// import './EducationForm.css'

function EducationForm({updateInfo}) {
  const [showForm, setShowForm] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [startDate, setStartDate] = useState('');
  const startMonth = DateToData(startDate).month;
  const startYear = DateToData(startDate).year;
  const [endDate, setEndDate] = useState('');
  const endMonth = DateToData(endDate).month;
  const endYear = DateToData(endDate).year;
  const [degreeType, setDegreeType] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGPA] = useState('');

  function updateEducation() {
    console.log("School: " + schoolName);
    console.log("City: " + city);
    console.log("State: " + state.toUpperCase());
    console.log("Start Month: " + startMonth);
    console.log("Start Year: " + startYear);
    console.log("End Month: " + endMonth);
    console.log("End Year: " + endYear);
    console.log("Degree: " + degreeType);
    console.log("Major: " + major);
    updateInfo(schoolName, city, state.toUpperCase(), startMonth, startYear, endMonth, endYear, degreeType, major, gpa);
    setSchoolName('');
    setCity('');
    setState('');
    setStartDate('');
    setEndDate('');
    setDegreeType('');
    setMajor('');
    setGPA('');
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
          <FormInput labelTitle="School Name" value={schoolName} setValue={setSchoolName} isRequired={true}/>
          <FormInput labelTitle="City" value={city} setValue={setCity} isRequired={true}/>
          <FormInput labelTitle="State" value={state.toUpperCase()} setValue={setState} maxLength={2} isRequired={true}/>
          <FormInput labelTitle="Start Date" type="date" value={startDate} setValue={setStartDate} isRequired={true}/>
          <FormInput labelTitle="End Date (not required)" type="date" value={endDate} setValue={setEndDate} isRequired={false}/>

          <label htmlFor="degree">Degree</label>
          <select value={degreeType} id="degree" name="degree" onChange={e => setDegreeType(e.target.value)} required>
            <option value="Associates">Associates</option>
            <option value="Bachelors">Bachelors</option>
            <option value="Masters">Masters</option>
            <option value="Doctoral">Doctoral</option>
          </select>

          <FormInput labelTitle="Major" value={major} setValue={setMajor} isRequired={true}/>
          <FormInput labelTitle="GPA (not required)" value={gpa} type="number" setValue={setGPA} isRequired={false}/>

          <button type="submit" >Enter</button>
        </form>
        )}
    </div>
  );
}

export default EducationForm