
function loadData() {
    let people = JSON.parse(localStorage.getItem('people')) || [];
    return people;
}

function saveData(people) {
    localStorage.setItem('people', JSON.stringify(people));
}

function renderTable() {
    let people = loadData();
    let tbody = document.querySelector('#peopleTable tbody');
    tbody.innerHTML = ''; 

    people.forEach((person, index) => {
        let row = tbody.insertRow();

        row.insertCell(0).textContent = person.name;
        row.insertCell(1).textContent = person.surname;
        row.insertCell(2).textContent = person.email;
        row.insertCell(3).textContent = person.age;
        let actionCell = row.insertCell(4);

        let updateButton = document.createElement('button');
        updateButton.textContent = 'Edit';
        updateButton.onclick = () => openEditPage(index);
        actionCell.appendChild(updateButton);

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deletePerson(index);
        actionCell.appendChild(deleteButton);
    });
}

document.getElementById('addUserButton').addEventListener('click', function() {
    window.location.href = 'add.html';
});

function openEditPage(index) {
    localStorage.setItem('editIndex', index);
    window.location.href = 'edit.html';
}

function deletePerson(index) {
    let people = loadData();
    people.splice(index, 1);
    saveData(people);
    renderTable();
}

if (!localStorage.getItem('people')) {
    saveData([
        { name: 'John', surname: 'Doe', email: 'john@example.com', age: 30 },
        { name: 'Jane', surname: 'Smith', email: 'jane@example.com', age: 25 }
    ]);
}

renderTable();
