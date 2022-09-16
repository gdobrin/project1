const regex = /^[a-zA-Z\s]+$/;
let reasons = document.querySelector('.reasons');

function testValidateUpdate() {
    let arr = [];
    let x = 0
    if (regex.test(firstNameEdit.value) === false || firstNameEdit.value.length <= 2) {
        const message1 = "First name";
        arr.push(message1);
        x++
    }

    if (regex.test(lastNameEdit.value) === false || lastNameEdit.value.length <= 2) {
        const message2 = " Last name";
        arr.push(message2);
        x++
    }

    if (addressEdit.value.length < 5) {
        const message3 = " Address";
        arr.push(message3);
        x++
    }

    if (zipCodeEdit.value.length <= 3) {
        const message4 = " Zip";
        arr.push(message4);
        x++
    }

    if ((cityEdit.value) === false || cityEdit.value.length < 2) {
        const message5 = " City";
        arr.push(message5);
        x++
    }

    if ((countryEdit.value) === false || countryEdit.value.length < 3) {
        const message6 = " Country";
        arr.push(message6);
        x++
    }

    if (ageEdit.value.length >= 3) {
        const message7 = " Age";
        arr.push(message7);
        x++
    }

    if (x > 6) {
        toastRed.style.height = "100px";
        let finishMessage1 = " are not valid";
        arr.push(finishMessage1);
        reasons.textContent = arr;
        return true;
    } else if (x > 1 && x <= 6) {
        toastRed.style.height = "70px";
        let finishMessage2 = " are not valid";
        arr.push(finishMessage2);
        reasons.textContent = arr;
        return true;
    } else if (x == 1) {
        toastRed.style.height = "70px";
        let finishMessage3 = " is not valid";
        arr.push(finishMessage3);
        reasons.textContent = arr;
        return true;
    } else if (x == 0) {
        return false;
    }
}


function testValidateSave() {
    let arr = [];
    let x = 0

    const firstNamee = document.getElementById('fname').value;
    const lastNamee = document.getElementById('lname').value;
    const addresss = document.getElementById('address').value;
    const zipCodee = document.getElementById('zip').value;
    const cityy = document.getElementById('city').value;
    const countryy = document.getElementById('country').value;
    const agee = document.getElementById('age').value;

    if (regex.test(firstNamee) === false || firstNamee.length <= 2) {
        const message1 = "First name";
        arr.push(message1);
        x++
    }

    if (regex.test(lastNamee) === false || lastNamee.length <= 2) {
        const message2 = " Last name";
        arr.push(message2);
        x++
    }

    if (addresss.length < 5) {
        const message3 = " Address";
        arr.push(message3);
        x++
    }

    if (zipCodee.length <= 3) {
        const message4 = " Zip";
        arr.push(message4);
        x++
    }

    if ((city) === false || cityy.length < 2) {
        const message5 = " City";
        arr.push(message5);
        x++
    }

    if ((countryy.value) === false || countryy.length < 3) {
        const message6 = " Country";
        arr.push(message6);
        x++
    }

    if (agee.length >= 3) {
        const message7 = " Age";
        arr.push(message7);
        x++
    }

    if (x > 6) {
        toastRed.style.height = "100px";
        let finishMessage1 = " are not valid";
        arr.push(finishMessage1);
        reasons.textContent = arr;
        return true;
    } else if (x > 1 && x <= 6) {
        toastRed.style.height = "70px";
        let finishMessage2 = " are not valid";
        arr.push(finishMessage2);
        reasons.textContent = arr;
        return true;
    } else if (x == 1) {
        toastRed.style.height = "70px";
        let finishMessage3 = " is not valid";
        arr.push(finishMessage3);
        reasons.textContent = arr;
        return true;
    } else if (x == 0) {
        return false;
    }
}