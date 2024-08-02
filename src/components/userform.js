import React, { useState } from 'react';

const UserForm = () => {
  const [status, setStatus] = useState('');
  const [userID, setUserID] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [collegeRollNumber, setCollegeRollNumber] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [alphabets, setAlphabets] = useState([]);

  const handleAddNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  const handleAddAlphabet = () => {
    const lastChar = alphabets[alphabets.length - 1] || 'A'.charCodeAt(0) - 1;
    setAlphabets([...alphabets, String.fromCharCode(lastChar.charCodeAt(0) + 1)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      status,
      userID,
      collegeEmail,
      collegeRollNumber,
      numbers,
      alphabets
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div>
        <label>User ID:</label>
        <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />
      </div>
      <div>
        <label>College Email ID:</label>
        <input type="email" value={collegeEmail} onChange={(e) => setCollegeEmail(e.target.value)} />
      </div>
      <div>
        <label>College Roll Number:</label>
        <input type="text" value={collegeRollNumber} onChange={(e) => setCollegeRollNumber(e.target.value)} />
      </div>
      <div>
        <label>Numbers:</label>
        <div>{numbers.join(', ')}</div>
        <button type="button" onClick={handleAddNumber}>Add Number</button>
      </div>
      <div>
        <label>Alphabets:</label>
        <div>{alphabets.join(', ')}</div>
        <button type="button" onClick={handleAddAlphabet}>Add Alphabet</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
