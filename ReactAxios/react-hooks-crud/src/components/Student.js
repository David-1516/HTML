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
    <div className="container mt-4">
      <h2 className="mb-4">Edit Student</h2>
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

export default Student;
