const form = document.querySelector('#item-form');
const inputForm = document.querySelector('#item-input');
const filter = document.querySelector('#filter');
const list = document.querySelector('#item-list');
const clearButton = document.querySelector('#clear');

//      //      //      Adding product      \\      \\      \\
function addItem(e) {
    e.preventDefault();

    if (inputForm.value.trim() === '') {
        alert('Please enter a product name!');
        return;
    }

    const listElement = document.createElement('li');
    listElement.appendChild(document.createTextNode(inputForm.value));

    btn = createButton('remove-item btn-link text-red');

    listElement.appendChild(btn);
    list.appendChild(listElement);

    inputForm.value = '';

    checkUI();
}

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

//      //      //      Deleting product(s)      \\      \\      \\
function deleteItem(e) {
    const icons = list.querySelectorAll('i');

    icons.forEach(icon => {
        if (e.target === icon) {
            e.target.parentElement.parentElement.remove();
        };
    });

    checkUI();
}

function clearItems() {
    //list.innerHTML = '';
    if (confirm('Are you sure you want to clear all items from the list?')) {
        while (list.firstChild) {
            list.firstChild.remove();
        }
    }

    checkUI();
}

//      //      //      Clear UI      \\      \\      \\
function checkUI() {
    const items = list.querySelectorAll('li');

    if (items.length === 0) {
        filter.style.display = 'none';
        clearButton.style.display = 'none';
    } else {
        filter.style.display = 'block';
        clearButton.style.display = 'block';
    }
}

//      //      //      Event listeners      \\      \\      \\
checkUI();
form.addEventListener('submit', addItem);
list.addEventListener('click', deleteItem);
clearButton.addEventListener('click', clearItems);