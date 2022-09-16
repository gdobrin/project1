const firstForm = document.getElementById('firstForm');

firstForm.addEventListener('submit', (e) => {
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const address = document.getElementById('address').value;
    const zipCode = document.getElementById('zip').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const age = document.getElementById('age').value;

    const sports = [];
    const checkAdd = document.querySelectorAll('.checkAdd');
    e.preventDefault();

    if (testValidateSave()) {
        toastRed.setAttribute('id', 'toast-red');
        const finalToastRed = document.getElementById('toast-red');
        finalToastRed.style.display = 'flex';
        setTimeout(function () {
            finalToastRed.removeAttribute('id')
        }, 7000);

    } else {
        toastGreen.setAttribute('id', 'toast-green');
        const finalToastGreen = document.getElementById('toast-green');
        finalToastGreen.style.display = 'flex';
        setTimeout(function () {
            finalToastGreen.removeAttribute('id')
        }, 6000);

        setInterval(function () {
            sec.innerHTML = counter;
            counter--;
        }, 1000);

        checkAdd.forEach(check => {
            if (check.checked === true) {
                sports.push(check.value);
            }
        })

        let gender;

        function getGender() {
            const select = document.getElementById('gender');
            gender = select.options[select.selectedIndex].text;
        }
        getGender();

        let activity = '';
        const activityAdd = document.querySelectorAll('.activityAdd');
        activityAdd.forEach(check => {
            if (check.checked === true) {
                activity = check.value;
            }
        })



        fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    address: {
                        streetAndNumber: address,
                        postalCode: zipCode,
                        city: city,
                        country: country
                    },
                    sports: sports,
                    gender: gender,
                    age: age,
                    activity_class: activity
                })
            })
            .then(function (response) {
                return response.json();
            }).catch(error => console.log(error))

        setTimeout(function () {
            window.location.reload();
        }, 5000);

    }
});