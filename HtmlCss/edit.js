let editIndex = localStorage.getItem('editIndex');
let people = JSON.parse(localStorage.getItem('people'));
let person = people[editIndex];

document.getElementById('name').value = person.name;
document.getElementById('surname').value = person.surname;
document.getElementById('email').value = person.email;
document.getElementById('age').value = person.age;

document.getElementById('editUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    person.name = document.getElementById('name').value;
    person.surname = document.getElementById('surname').value;
    person.email = document.getElementById('email').value;
    person.age = document.getElementById('age').value;

    people[editIndex] = person;
    localStorage.setItem('people', JSON.stringify(people));
    
    window.location.href = 'Main.html';
});
