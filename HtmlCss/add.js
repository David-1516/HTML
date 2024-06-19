document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;

    let people = JSON.parse(localStorage.getItem('people')) || [];
    people.push({ name, surname, email, age });
    localStorage.setItem('people', JSON.stringify(people));
    
    window.location.href = 'Main.html';
});
