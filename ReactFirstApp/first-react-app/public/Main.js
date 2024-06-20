document.addEventListener('DOMContentLoaded', () => {
    const peopleTable = document.getElementById('peopleTable').getElementsByTagName('tbody')[0];

    const people = [
        { name: 'Petra', surname: 'Perovic', email: 'petra@gmail.com', age: 23 },
        { name: 'Marko', surname: 'Markovic', email: 'marko@gmail.com', age: 22 },
        { name: 'Karlo', surname: 'Karlovic', email: 'karlo@gmail.com', age: 21}
    ];

    people.forEach(person => {
        const row = peopleTable.insertRow();
        row.insertCell(0).innerText = person.name;
        row.insertCell(1).innerText = person.surname;
        row.insertCell(2).innerText = person.email;
        row.insertCell(3).innerText = person.age;
    });
});
