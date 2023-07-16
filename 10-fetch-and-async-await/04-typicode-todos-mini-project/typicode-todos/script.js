const API = 'https://jsonplaceholder.typicode.com/todos';

const todos = document.querySelector('#todo-list');
const form = document.querySelector('#todo-form');
const list = document.querySelector('#todo-list');
const input = form.querySelector('input');

function getTodos() {
    fetch(API + '?_limit=10')
        .then(res => res.json())
        .then(data => {
            data.forEach(todo => addTodoToDOM(todo));
        });
}

function addTodoToDOM(todo) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));

    div.setAttribute('data-id', todo.id);

    todo.completed && div.classList.add('done');

    todos.appendChild(div);
}

function addTodo(e) {
    e.preventDefault();

    const newTodo = {
        title: input.value,
        completed: false,
    }

    fetch(API, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => addTodoToDOM(data));
}

function toggleCompleted(e) {
    if (e.target !== e.currentTarget) {

        e.target.classList.toggle('done');
        update(e.target.dataset.id, e.target.classList.contains('done'));
    }
}

function update(id, completed) {
    fetch(`${API}/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

function deleteTodo(e) {
    if (e.target !== e.currentTarget) {
        id = e.target.dataset.id;

        fetch(`${API}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => e.target.remove())
    }
}

getTodos();
form.addEventListener('submit', addTodo);
list.addEventListener('click', toggleCompleted);
list.addEventListener('dblclick', deleteTodo);