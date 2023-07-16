const button = document.querySelector('#generate');
const user = document.querySelector('#user');
const userPicture = user.querySelector('img');
const userFields = user.querySelectorAll('p');
const spinner = document.querySelector('.spinner');

function makeRequest() {
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then(responce => responce.json())
        .then(userData => {
            hideSpinner();
            extractUserData(userData.results[0]);
        });
}

function extractUserData(user) {
    const personInfo = {
        email: user.email,
        age: user.dob.age,
        phone: user.phone,
        gender: user.gender,
        picture: user.picture.large,
        name: user.name.first + ' ' + user.name.last,
        location: user.location.city + ', ' + user.location.country,
    }

    generateUser(personInfo);
}

function generateUser(personInfo) {
    personInfo.gender == 'male'
        ? document.body.classList.add('bg-blue-800')
        : document.body.classList.remove('bg-blue-800');

    userPicture.src = personInfo.picture;

    userFields[0].innerHTML = `<span class="font-bold">Name:</span> ${personInfo.name}`;
    userFields[1].innerHTML = `<span class="font-bold">Email:</span> ${personInfo.email}`;
    userFields[2].innerHTML = `<span class="font-bold">Phone:</span> ${personInfo.phone}`;
    userFields[3].innerHTML = `<span class="font-bold">Location:</span> ${personInfo.location}`;
    userFields[4].innerHTML = `<span class="font-bold">Age:</span> ${personInfo.age}`;
}

function showSpinner() {
    spinner.style.display = 'block';
}

function hideSpinner() {
    spinner.style.display = 'none';
}

button.addEventListener('click', makeRequest);