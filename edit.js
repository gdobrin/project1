const addNew = document.querySelector(".add-member");
const editNew = document.querySelector(".edit-member");
const back = document.querySelector('#back');
let width;

setInterval(function widthCheck() {
    width = window.innerWidth;

    if (width > 1443) {
        addNew.style.display = "block";
    }
}, 1000);


back.addEventListener('click', (e) => {
    window.location.href = window.location.href;
})


const uploadButton = document.querySelector('.uploadButton');
const firstNameEdit = document.getElementById('fnameEdit');
const lastNameEdit = document.getElementById('lnameEdit');
const addressEdit = document.getElementById('addressEdit');
const zipCodeEdit = document.getElementById('zipEdit');
const cityEdit = document.getElementById('cityEdit');
const countryEdit = document.getElementById('countryEdit');
const ageEdit = document.getElementById('ageEdit');
const selectEdit = document.getElementById('genderEdit').options;
const activityEdit = document.querySelectorAll('.activityEdit');
const checkEdit = document.querySelectorAll('.checkEdit');
const hiddenInput = document.querySelector(".hidden");

function handleClickEdit(event) {
    let personId;
    event.path.forEach(element => {
        if (element.classList) {
            element.classList.forEach(cls => {
                if (cls === 'info-card') {
                    personId = element.getAttribute('personId');
                }
            })
        }
    })

    if (event.target.localName === "button" && event.target.className === "edit") {
        uploadButton.disabled = false;

        if (width < 1443) {
            editNew.style.display = 'block';
            addNew.style.display = 'none';
        }

        checkEdit.forEach(check => {
            check.checked = false;
        })

        persons.forEach(person => {
            if (personId === person.id) {
                hiddenInput.value = person.id;
                firstNameEdit.value = person.firstName;
                lastNameEdit.value = person.lastName;
                addressEdit.value = person.address.streetAndNumber;
                zipCodeEdit.value = person.address.postalCode;
                cityEdit.value = person.address.city;
                countryEdit.value = person.address.country;
                ageEdit.value = person.age;

                for (let i = 0; i < selectEdit.length; i++) {
                    if (selectEdit[i].text == person.gender) {
                        selectEdit[i].selected = true;
                    }
                }

                activityEdit.forEach(activity => {
                    if (activity.value === person.activity_class) {
                        activity.checked = true;
                    }
                })

                checkEdit.forEach(check => {
                    if (person.sports.includes(check.value)) {
                        check.checked = true;
                    }
                })
            }

        })
    }
}