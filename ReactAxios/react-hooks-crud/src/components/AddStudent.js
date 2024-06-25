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
    axios.post('https://localhost:7096/api/Home/CreateStudent', student)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error creating the student!', error.response || error.message || error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={student.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname:</label>
          <input type="text" className="form-control" id="surname" name="surname" value={student.surname} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age:</label>
          <input type="number" className="form-control" id="age" name="age" value={student.age} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default AddStudent;
