/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput } from '../tools/FormInput';
import DateToData from '../tools/DateToData';
// import './EducationForm.css'

function EducationForm({updateData, editData, data}) {
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const newIndex = data.length;
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
  const [minors, setMinors] = useState('');
  const [gpa, setGPA] = useState('');

  function emptyForm() {
    setSchoolName('');
    setCity('');
    setState('');
    setStartDate('');
    setEndDate('');
    setDegreeType('');
    setMajor('');
    setMinors('');
    setGPA('');
  }

  function updateEducation() {
    // console.log("School: " + schoolName);
    // console.log("City: " + city);
    // console.log("State: " + state.toUpperCase());
    // console.log("Start Date: " + startDate);
    // console.log("Start Month: " + startMonth);
    // console.log("Start Year: " + startYear);
    // console.log("End Month: " + endMonth);
    // console.log("End Year: " + endYear);
    // console.log("Degree: " + degreeType);
    // console.log("Major: " + major);
    // console.log("Minors: " + minors);
    updateData(newIndex, schoolName, city, state.toUpperCase(), startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, minors, gpa);
    emptyForm();
  }

  function setToEdit(session) {
    setShowForm(true);
    setEditing(true);
    setEditIndex(session.index);
    setSchoolName(session.schoolName);
    setCity(session.city);
    setState(session.state);
    setStartDate(session.startDate);
    setEndDate(session.endDate);
    setDegreeType(session.degreeType);
    setMajor(session.major);
    setMinors(session.minors);
    setGPA(session.gpa);
  }

  function editEducation() {
    editData(editIndex, schoolName, city, state.toUpperCase(), startDate, startMonth, startYear, endDate, endMonth, endYear, degreeType, major, minors, gpa);
    setEditing(false);
  }

  const educationEntries = data.map(session => 
    <li key={session.id} style={{all: 'unset'}}>
      <button style={{width: '100%', padding: '1rem'}} onClick={() => {setToEdit(session)}}>{session.schoolName}, {session.startMonth} {session.startYear}</button>
    </li>
  );

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm); setEditing(false); emptyForm();}}>Add Education</button>

      {showForm && (
        <form onSubmit={(e) => { e.preventDefault(), (editing ? editEducation() : updateEducation()), setShowForm(false) }}>
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
          <FormInput labelTitle="Minors" value={minors} setValue={setMinors} isRequired={true}/>
          <FormInput labelTitle="GPA (not required)" value={gpa} type="number" setValue={setGPA} isRequired={false}/>

          {/* <button type="submit">Enter</button> */}
          <button type="submit">{editing ? "Update":"Enter"}</button>
        </form>
        )}

      <ul style={{all: "unset"}}>
        {educationEntries}
      </ul>
    </div>
  );
}

export default EducationForm