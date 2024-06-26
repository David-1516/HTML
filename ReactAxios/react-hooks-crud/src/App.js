import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddStudent from './components/AddStudent';
import Student from './components/Student';
import DeleteStudent from './components/DeleteStudent'; 
import Grid from './components/Grid';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grid" element={<Grid/>}/>
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/delete-student/:id" element={<DeleteStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
