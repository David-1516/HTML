import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Student() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', surname: '', age: '' });

  useEffect(() => {
    axios.get(`https://localhost:7096/swagger/index.html/GetStudent?studentId=${id}`)
      .then(response => {
        setStudent(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the student!', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put('https://localhost:7096/swagger/index.html/UpdateStudent', student)
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('There was an error updating the student!', error);
      });
  };

  return (
    <div>
      <h2>Edit Student</h2>
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

export default Student;
