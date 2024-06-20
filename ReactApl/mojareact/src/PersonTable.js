import React, { useState, useEffect } from 'react';

function PersonTable() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
    setPeople(storedPeople);
  }, []);

  const addPerson = () => {
    const newPerson = { name, surname, email, age };
    const updatedPeople = [...people, newPerson];
    localStorage.setItem('people', JSON.stringify(updatedPeople));
    setPeople(updatedPeople);
    setName('');
    setSurname('');
    setEmail('');
    setAge('');
  };

  return (
    <section id="about">
      <h2>People</h2>
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

      <h3>Add a new person</h3>
      <form onSubmit={(e) => { e.preventDefault(); addPerson(); }}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default PersonTable;
