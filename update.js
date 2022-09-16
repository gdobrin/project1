  const secForm = document.getElementById('secForm');
  const updateMyName = document.querySelector(".first-name-update");
  const toastRed = document.querySelector('.toast-red');
  const toastGreen = document.querySelector('.toast-green');
  const sec = document.querySelector('.sec');
  let counter = 5;

  secForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (testValidateUpdate()) {
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

          persons.forEach(person => {
              if (hiddenInput.value == person.id) {
                  const sportsEditUload = [];
                  const checkEdit = document.querySelectorAll('.checkEdit');
                  checkEdit.forEach(check => {
                      if (check.checked === true) {
                          sportsEditUload.push(check.value);
                      }
                  })

                  let genderEditUpload;

                  function getGender() {
                      const selectGenderEdit = document.getElementById('genderEdit');
                      genderEditUpload = selectGenderEdit.options[selectGenderEdit.selectedIndex].text;
                  }
                  getGender();

                  let activityUpdate = '';
                  const activityEdit = document.querySelectorAll('.activityEdit');
                  activityEdit.forEach(check => {
                      if (check.checked === true) {
                          activityUpdate = check.value;
                      }
                  })



                  fetch(`http://localhost:3000/users/${person.id}`, {
                          method: 'PUT',
                          headers: {
                              'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                              id: person.id,
                              firstName: firstNameEdit.value,
                              lastName: lastNameEdit.value,
                              address: {
                                  streetAndNumber: addressEdit.value,
                                  postalCode: zipCodeEdit.value,
                                  city: cityEdit.value,
                                  country: countryEdit.value
                              },
                              sports: sportsEditUload,
                              gender: genderEditUpload,
                              age: ageEdit.value,
                              activity_class: activityUpdate
                          })
                      })
                      .then(function (response) {
                          return response.json();
                      }).catch(error => console.log(error))
              }

              setTimeout(function () {
                  window.location.reload();
              }, 5000);

          });
      }

  });