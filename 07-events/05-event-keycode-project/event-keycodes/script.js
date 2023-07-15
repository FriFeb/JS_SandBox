function createDiv(value, title) {
    const div = document.createElement('div')
    div.className = 'key';

    const valueText = createTextNode(value);
    const small = createSmall(title);

    div.appendChild(valueText);
    div.appendChild(small);

    return div;
}

function createSmall(title) {
    const small = document.createElement('small');

    const keyText = createTextNode(title);

    small.appendChild(keyText);

    return small;
}

function createTextNode(text) {
    return document.createTextNode(text)
}


function keyPress(e) {

    const insert = document.querySelector('#insert');

    //      //      Method 1        \\      \\

    //     insert.innerHTML = `
    //         <div class="key">
    //             ${e.key}
    //             <small>e.key</small>
    //         </div>

    //         <div class="key">
    //             ${e.keyCode}
    //             <small>e.keyCode</small>
    //         </div>

    //         <div class="key">
    //             ${e.code}
    //             <small>event.code</small>
    //         </div>
    //   `

    const key = insert.firstElementChild;
    const keyCode = key.nextElementSibling;
    const eventCode = keyCode.nextElementSibling;

    //      //      Method 2        \\      \\

    // key.innerHTML = `
    // ${e.key}
    // <small>e.key</small>
    // `

    // keyCode.innerHTML = `
    // ${e.keyCode}
    // <small>e.keyCode</small>
    // `

    // eventCode.innerHTML = `
    // ${e.code}
    // <small>event.code</small>
    // `

    //      //      Method 3        \\      \\

    // const newKey = createDiv(e.key, 'e.key');
    // const newkeyCode = createDiv(e.keyCode, 'e.keyCode');
    // const neweventCode = createDiv(e.code, 'event.code');

    // key.replaceWith(newKey);
    // keyCode.replaceWith(newkeyCode);
    // eventCode.replaceWith(neweventCode);

    //      //      Method 4        \\      \\

    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'event.code': e.code,
    };

    for (const key in keyCodes) {

        const div = document.createElement('div');
        div.className = 'key';

        const small = document.createElement('small');

        const titleText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(titleText);

        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
}

document.addEventListener('keypress', keyPress);