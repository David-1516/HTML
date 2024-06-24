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

  return (
    <div>
      <h3>Students List</h3>
      <table>
        <thead>
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
                <Link to={`/student/${student.id}`}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
