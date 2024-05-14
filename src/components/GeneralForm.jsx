import { useState } from 'react'
// import './GeneralForm.css'

function GeneralForm() {
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function updateGeneral() {
    console.log("Full Name: " + firstName + lastName);
    console.log("Phone: " + phone);
    console.log("Email: " + email);
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
          <label>First Name</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} required/>
          
          <label>Last Name</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} required/>

          <label>Phone</label>
          <input value={phone} onChange={e => setPhone(e.target.value)} type="number" required/>
          
          <label>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" required/>

          <button type="submit" onClick={() => {setShowForm(false)}}>Enter</button>
        </form>
      )}
    </div>
  );
}

export default GeneralForm