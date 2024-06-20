import React from 'react';
import './Main.css';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};


const Main = () => (
  <main>


    <section id="about">
      <h2>About</h2>
      <p>Mission and visions for our company</p>
      <a href="/about" className="buttonlink">Us</a>
      <table id="peopleTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {}
        </tbody>
      </table>
    </section>
  </main>
);


export default App;
