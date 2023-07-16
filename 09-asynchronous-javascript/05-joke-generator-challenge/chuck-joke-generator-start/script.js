const divJoke = document.querySelector('#joke')
const buttonJoke = document.querySelector('#joke-btn');

function makeRequest() {
    const xml = new XMLHttpRequest();

    xml.open('GET', 'https://api.chucknorris.io/jokes/random');
    
    xml.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const joke = JSON.parse(this.responseText);
            divJoke.innerHTML = joke.value;
        };
    }

    xml.send();
}

buttonJoke.addEventListener('click', makeRequest);
document.addEventListener('DOMContentLoaded', makeRequest);
