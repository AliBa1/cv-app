/* eslint-disable react/prop-types */
import { useState } from 'react'
// import './GeneralForm.css'

function GeneralForm({updateInfo}) {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function updateGeneral() {
    console.log("Full Name: " + firstName + ' ' + lastName);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
    updateInfo(firstName, lastName, phone, email);
  }
  
  return (
    <div style={{marginBottom: '2rem', backgroundColor: '#1a1a1a', padding: '1rem'}}>
      <button style={{width: '100%'}} onClick={() => {setShowForm(!showForm)}}>General Information</button>
      {showForm && (
        <form onSubmit={(e) => {
          e.preventDefault(),
          updateGeneral(),
          setShowForm(false)
        }}>
          <FormInput labelTitle="First Name" isRequired={true} value={firstName} setValue={setFirstName}/>
          <FormInput labelTitle="Last Name" isRequired={true} value={lastName} setValue={setLastName}/>
          <FormInput labelTitle="Phone" isRequired={true} value={phone} setValue={setPhone}/>
          <FormInput labelTitle="Email" isRequired={true} value={email} setValue={setEmail}/>

          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
}

function FormInput(props) {
  return (
    <>
      <label>{props.labelTitle}</label>
      <input value={props.value} onChange={e => props.setValue(e.target.value)} required={props.isRequired}/>
    </>
  )
}

export default GeneralForm