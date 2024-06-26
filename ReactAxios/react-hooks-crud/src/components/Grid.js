import React from 'react';
import { Link } from 'react-router-dom';
import StudentsList from './StudentsList';

function Grid() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className='col-sm-5'></div>
        <div className='col-sm-4'><h1 className="mb-5 ">Students</h1></div>
        <div className='col-sm-4'></div>
      </div>
      <StudentsList />
      <Link to="/add-student" className="btn btn-primary mb-4">Add Student</Link>
    </div>
  );
}

export default Grid;
