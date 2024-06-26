import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-sm-4 '>
            <h1>Manage students</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
