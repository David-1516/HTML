import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StudentService from '../services/StudentService';

function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ id: '', name: '', surname: '', age: '' });

  useEffect(() => {
    StudentService.getStudentById(id)
      .then(data => setStudent(data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    StudentService.deleteStudent(id)
      .then(() => {
        console.log(`Student with ID ${id} deleted successfully.`);
        // Optionally navigate to another page or update state after deletion
        navigate('/students'); // Example navigation to students list page
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="container">
      <h2>Delete Student</h2>
      <p>Are you sure you want to delete {student.name}?</p>
      <button onClick={handleDelete} className="btn btn-danger">Delete</button>
    </div>
  );
}

export default DeleteStudent;
