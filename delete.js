const confirmBackground = document.querySelector('.confirm-background');
const confirmMessage = document.querySelector('.confirm-message');
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const hero = document.querySelector('.hero');

let personId;

function handleClickDelete(event) {


    event.path.forEach(element => {
        if (element.classList) {
            element.classList.forEach(cls => {
                if (cls === 'info-card') {
                    personId = element.getAttribute('personId');
                }
            })
        }
    })


    if (event.target.localName === "button" && event.target.className === "delete") {
        persons.forEach(person => {
            if (personId === person.id) {
                confirmBackground.style.display = 'flex';
                confirmMessage.innerText = `Are you sure you want to delete member: ${person.firstName} ${person.lastName}?`;

                buttonNo.addEventListener('click', (e) => {
                    e.stopPropagation();
                    confirmBackground.style.display = 'none';
                })

                buttonYes.addEventListener('click', (e) => {
                    confirmBackground.style.display = 'none';
                    e.stopPropagation();
                    refreshAside();
                })
            }
        })
    }
}

function refreshAside() {
    const currentPerson = document.querySelectorAll('.info-card');
    currentPerson.forEach(person => {
        if (personId === person.getAttribute('personid')) {
            person.remove(person);

            fetch('http://localhost:3000/users/' + personId, {
                method: 'DELETE'
            })
        }
    })
}