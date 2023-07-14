function insertAfter(element, child) {

    const parent = child.parentElement;
    const nextItem = child.nextSibling;

    parent.insertBefore(element, nextItem);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);