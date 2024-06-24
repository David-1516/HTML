import React from 'react';
import { Link } from 'react-router-dom';
import StudentsList from './StudentsList';

function Home() {
  return (
    <div>
      <h2>Students</h2>
      <Link to="/add-student">Add Student</Link>
      <StudentsList />
    </div>
  );
}

export default Home;
