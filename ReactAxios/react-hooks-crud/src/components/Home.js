import React from 'react';
import { Link } from 'react-router-dom';
import StudentsList from './StudentsList';

function Home() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Students</h2>
      <Link to="/add-student" className="btn btn-primary mb-4">Add Student</Link>
      <StudentsList />
    </div>
  );
}

export default Home;
