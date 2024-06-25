import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../services/StudentService';

function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    StudentService.getStudents()
      .then(data => setStudents(data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (id) => {
    StudentService.deleteStudent(id)
      .then(() => {
        console.log(`Student with ID ${id} deleted successfully.`);
        // Optionally update state or refresh the list after deletion
        const updatedStudents = students.filter(student => student.id !== id);
        setStudents(updatedStudents);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Students List</h3>
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
                <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
