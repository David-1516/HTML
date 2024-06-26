import React from 'react';
import { Link } from 'react-router-dom';
import StudentsList from './StudentsList';

function Grid() {
  return (
    
    <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Student Management</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/grid">Grid</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div  className="container mt-4">
      <div className="row">
        <div className='col-sm-5'></div>
        <div className='col-sm-4'><h1 className="mb-5 ">Students</h1></div>
        <div className='col-sm-4'></div>
      </div>
      <StudentsList />
      <Link to="/add-student" className="btn btn-primary mb-4">Add Student</Link>
      </div>
    </div>
  );
}

export default Grid;
