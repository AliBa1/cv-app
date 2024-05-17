/* eslint-disable react/prop-types */
import { useState } from 'react'
// import './SkillsForm.css'

function SkillsForm({updateData, data}) {
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [skills, setSkills] = useState(data);
  const [newSkill, setNewSkill] = useState('');

  function updateSkills(skills) {
    setSkills(skills);
    updateData(skills);
  }

  function submitSkill() {
    if (editIndex !== null) {
      let updatedSkills = [...skills];
      updatedSkills[editIndex] = newSkill;
      updateSkills(updatedSkills);
      setEditIndex(null);
    } else {
      updateSkills(skills => [...skills, newSkill]);
    }

    setNewSkill('');
  }

  function editSkills(index) {
    setNewSkill(skills[index]);
    setEditIndex(index);
  }

  function deleteSkill(index) {
    const updatedItems = skills.filter((_, i) => i != index);
    updateSkills(updatedItems);
  }

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm)}}>Skills</button>

      {showForm && (
        <>
          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={(e) => { e.preventDefault(), submitSkill()}}>
            <input type="text" value={newSkill} onChange={e => setNewSkill(e.target.value)} required/>
            <button type="submit">{editIndex != null ? 'Edit' : 'Add'}</button>
          </form>

          <ul style={{ listStyleType: 'none' }}>
            {skills.map((skill, index) => (
              <li key={index} style={{ display: 'flex', alignItems: "center", justifyContent: 'space-evenly', marginBottom: "1rem" }}>
                {skill}
                <button style={{backgroundColor: "goldenrod"}} onClick={() => editSkills(index)}>Edit</button>
                <button style={{backgroundColor: "darkred"}} onClick={() => deleteSkill(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default SkillsForm