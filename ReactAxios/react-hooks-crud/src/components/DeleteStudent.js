import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({ name: '', surname: '', age: '' });

  useEffect(() => {
    axios.get(`https://localhost:7096/api/Home/GetStudent?studentId=${id}`)
      .then(response => {
        const { name, surname, age } = response.data;
        setStudent({ name, surname, age });
      })
      .catch(error => console.error('Error fetching student:', error.response || error.message || error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`https://localhost:7096/api/Home/DeleteStudent?studentId=${id}`)
      .then(() => {
        console.log(`Student with ID ${id} deleted successfully.`);
        navigate('/');
      })
      .catch(error => console.error('Error deleting student:', error.response || error.message || error));
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
