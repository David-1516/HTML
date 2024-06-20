import React from 'react';
import './Main.css';


const Main = ({ people }) => (
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
          {people.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.surname}</td>
                            <td>{person.email}</td>
                            <td>{person.age}</td>
                        </tr>
                    ))}
          </tbody>
        </table>
      </section>
    </main>
  );

export default Main;