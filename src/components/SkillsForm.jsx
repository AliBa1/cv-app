/* eslint-disable react/prop-types */
import { useState } from 'react'
// import { FormInput, FormTextArea } from '../tools/FormInput';
// import DateToData from '../tools/DateToData';
// import './ExperienceForm.css'

function SkillsForm({updateData, data}) {
  const [showForm, setShowForm] = useState(false);
  // const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [skills, setSkills] = useState(data);
  const [newSkill, setNewSkill] = useState('');

  // function emptyForm() {
  //   setSkill('');
  // }

  function updateSkills() {
    updateData(skills);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newSkill.trim() === '') return;
    if (editIndex !== null) {
      const updatedSkills = [...skills];
      updatedSkills[editIndex] = newSkill;
      // setSkills(updatedSkills);
      setSkills(updatedSkills);
      // updateSkills();
      setEditIndex(null);
    } else {
      // setSkills([...skills, newSkill]);
      setSkills([...skills, newSkill]);
      // updateSkills()
    }
    updateSkills();
    setNewSkill('');
  };

  const handleEdit = (index) => {
    setNewSkill(skills[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedItems = skills.filter((_, i) => i !== index);
    setSkills(updatedItems);
  };

  // function setToEdit(skills) {
  //   setShowForm(true);
  //   setEditing(true);
  //   setSkill(skills.skill)
  // }

  // function editSkill() {
    // editData(editIndex, newSkill);
    // setEditing(false);
  // }

  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm); updateSkills();}}>Skills</button>

      {showForm && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newSkill}
              onChange={e => setNewSkill(e.target.value)}
              placeholder="Enter skill"
            />
            <button type="submit">{editIndex !== null ? 'Edit' : 'Add'}</button>
          </form>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      
    {/* <button style={{width: '100%', padding: '1rem'}} onClick={() => {setToEdit(project)}}>View Skills</button> */}
    </div>
  );
}

export default SkillsForm