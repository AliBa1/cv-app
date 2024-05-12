import { useState } from 'react'
// import './GeneralForm.css'

function GeneralForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setFirstName(firstName);
      setLastName();
      setPhone();
      setEmail();
      console.log(firstName);
    }}>
      <label>First Name</label>
      <input value={firstName} onChange={e => setFirstName(e.target.value)} required/>
      <label>Last Name</label>
      <input value={lastName} onChange={e => setLastName(e.target.value)} required/>
      <label>Phone</label>
      <input value={phone} onChange={e => setPhone(e.target.value)} required/>
      <label>Email</label>
      <input value={email} onChange={e => setEmail(e.target.value)} required/>

      <button type="submit">Enter</button>
    </form>

  // <form action="#" method="get" class="new-list-form hide">
  //   <label for="new_list">List Name</label>
  //   <input type="text" name="new_list" id="new_list" required>

  //   <button class="submit-list-btn" type="submit">Add List</button>
  // </form>
  );
}

export default GeneralForm