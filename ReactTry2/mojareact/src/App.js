import React from 'react';
import './App.css';
import PeopleTable from './PeopleTabel';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="Main.html">Home</a></li>
            <li><a href="About.html">About</a></li>
            <li><a href="Contact.html">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" >
          <img src="/Images/a726c4ff-af54-415a-9049-5004c6c7ae33.jfif" alt="Placeholder slika" className="responsive-img" />
        </section>

        <PeopleTable />

        <section id="contact">
          <h2>Contact</h2>
          <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 David Bolić</p>
      </footer>
    </div>
  );
}

export default App;
