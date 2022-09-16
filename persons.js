let persons = [];

fetch('http://localhost:3000/users')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            persons.push(data[i]);
        }

        createAside()
    })

function createAside() {
    persons.forEach((person) => {
        createFinalAside(person, 'aside');
    })
}

function createFinalAside(person, queryName) {
    const container = document.querySelector(queryName);
    const info = document.createElement('section');
    info.classList.add('info-card');
    const child = container.appendChild(info);
    child.innerHTML = `
        <div class="card-top">
        <div class="initial">${person.firstName.charAt(0)}</div>
        <div class="person-info">
            <p class='.first-name-update'>${person.firstName} ${person.lastName}</p>
            <p>ID: ${person.id}</p>
            <p>${person.firstName}.${person.lastName}@gmail.com</p>
        </div>
    </div>
    <div class="card-bottom">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
        `
    child.setAttribute("personId", person.id);
    child.addEventListener('click', handleClickDelete);
    child.addEventListener('click', handleClickEdit);
}