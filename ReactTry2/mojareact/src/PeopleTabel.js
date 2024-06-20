import React, { Component } from 'react';

class PeopleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: JSON.parse(localStorage.getItem('people')) || [],
      name: '',
      surname: '',
      email: '',
      age: '',
      editingIndex: null
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addPerson = () => {
    const { name, surname, email, age, people } = this.state;
    const newPerson = { name, surname, email, age };

    this.setState({
      people: [...people, newPerson],
      name: '',
      surname: '',
      email: '',
      age: ''
    }, this.updateLocalStorage);
  }

  updateLocalStorage = () => {
    localStorage.setItem('people', JSON.stringify(this.state.people));
  }

  deletePerson = (index) => {
    const people = this.state.people.filter((_, i) => i !== index);
    this.setState({ people }, this.updateLocalStorage);
  }

  editPerson = (index) => {
    const person = this.state.people[index];
    this.setState({
      name: person.name,
      surname: person.surname,
      email: person.email,
      age: person.age,
      editingIndex: index
    });
  }

  saveEdit = () => {
    const { name, surname, email, age, people, editingIndex } = this.state;
    const updatedPerson = { name, surname, email, age };

    people[editingIndex] = updatedPerson;

    this.setState({
      people,
      name: '',
      surname: '',
      email: '',
      age: '',
      editingIndex: null
    }, this.updateLocalStorage);
  }

  render() {
    const { people, name, surname, email, age, editingIndex } = this.state;
    return (
      <section id="about">
        <h2>About</h2>
        <p>Misson and vissions for our company</p>
        <a href="About.html" className="buttonlink">Us</a>
        <table id="peopleTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.age}</td>
                <td>
                  <button onClick={() => this.editPerson(index)}>Edit</button>
                  <button onClick={() => this.deletePerson(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <input type="text" name="name" value={name} onChange={this.handleInputChange} placeholder="Name" required />
          <input type="text" name="surname" value={surname} onChange={this.handleInputChange} placeholder="Surname" required />
          <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Email" required />
          <input type="number" name="age" value={age} onChange={this.handleInputChange} placeholder="Age" required />
          {editingIndex !== null ? (
            <button onClick={this.saveEdit}>Save</button>
          ) : (
            <button onClick={this.addPerson}>Add Person</button>
          )}
        </div>
      </section>
    );
  }
}

export default PeopleTable;
