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
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-sm-3 '>
            <h1 className='ml-10'>Manage students</h1>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-sm-10'> <img src="IMG_2428.png" class="img-fluid h-50 w-100" alt="..."/></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
