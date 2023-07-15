const form = document.querySelector('#item-form');
const input = document.querySelector('#item-input');
const list = document.querySelector('#item-list');

function createButton(className) {
    const button = document.createElement('button');
    button.className = className;
    icon = createIcon('fa-solid fa-plus');
    button.appendChild(icon);
    return button;
}

function createIcon(className) {
    const icon = document.createElement('i');
    icon.className = className;
    return icon;
}

function submitForm(e) {
    e.preventDefault();

    if (input.value.trim() === '') {
        alert('Please enter a product name!');
        return;
    }

    const listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(input.value));

    btn = createButton('remove-item btn-link text-red');

    listElement.appendChild(btn);
    list.appendChild(listElement);

    input.value = '';
}

form.addEventListener('submit', submitForm);