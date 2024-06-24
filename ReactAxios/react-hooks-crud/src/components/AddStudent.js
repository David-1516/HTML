import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', surname: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://localhost:7096/swagger/index.html/CreateStudent', student)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the student!', error);
      });
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} />
        </div>
        <div>
          <label>Surname:</label>
          <input type="text" name="surname" value={student.surname} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={student.age} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddStudent;
