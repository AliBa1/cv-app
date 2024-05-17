/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FormInput } from '../tools/FormInput';
// import './PersonalForm.css'

function PersonalForm({updateData}) {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function updatePersonal() {
    console.log("Full Name: " + firstName + ' ' + lastName);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    updateData(firstName, lastName, phone, email);
  }
  
  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm)}}>Personal Information</button>
      {showForm && (
        <form onSubmit={(e) => { e.preventDefault(), updatePersonal(), setShowForm(false)}}>
          <FormInput labelTitle="First Name" value={firstName} setValue={setFirstName} isRequired={true}/>
          <FormInput labelTitle="Last Name" value={lastName} setValue={setLastName} isRequired={true}/>
          <FormInput labelTitle="Phone" value={phone} setValue={setPhone} isRequired={true}/>
          <FormInput labelTitle="Email" value={email} setValue={setEmail} isRequired={true}/>

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}

export default PersonalForm