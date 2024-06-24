import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

function Student() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', surname: '', age: '' });

  useEffect(() => {
    StudentService.getStudentById(id)
      .then(data => setStudent(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    StudentService.updateStudent(student)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
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
