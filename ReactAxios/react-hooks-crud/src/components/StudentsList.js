import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import StudentService from '../services/StudentService';

function StudentsList() {
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    StudentService.getStudents()
      .then(data => setStudents(data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = () => {
    if (searchName.trim() !== '') {
      StudentService.getStudentsByName(searchName)
        .then(data => setStudents(data))
        .catch(error => console.error(error));
    } else {
      // Fetch all students if search input is empty
      StudentService.getStudents()
        .then(data => setStudents(data))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Students List</h3>
      
      <div className="mb-4">
        <input 
          type="text" 
          value={searchName} 
          onChange={(e) => setSearchName(e.target.value)} 
          placeholder="Enter student name" 
          className="form-control d-inline-block w-auto mr-2" 
        />
        <button onClick={handleSearch} className="btn btn-primary">Search</button>
      </div>
      
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.age}</td>
              <td>
                <Link to={`/student/${student.id}`} className="btn btn-primary btn-sm">Edit</Link>
                <button onClick={() => navigate(`/delete-student/${student.id}`)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
