const keys = document.querySelector('.keys');

window.addEventListener('keypress', (e) => {
    
    const arrKeys = [...keys.children]
    
    arrKeys.forEach(key => {
        setTimeout( () => key.classList.remove('playing'), 100);
        e.key === key.innerText[0].toLowerCase() && key.classList.add('playing');
    });

    let audio = new Audio();

    switch (e.key) {
        case 'a':
            audio.src = 'sounds/clap.wav';
            audio.play();
            break;
        case 's':
            audio.src = 'sounds/hihat.wav';
            audio.play();
            break;
        case 'd':
            audio.src = 'sounds/kick.wav';
            audio.play();
            break;
        case 'f':
            audio.src = 'sounds/openhat.wav';
            audio.play();
            break;
        case 'g':
            audio.src = 'sounds/boom.wav';
            audio.play();
            break;
        case 'h':
            audio.src = 'sounds/ride.wav';
            audio.play();
            break;
        case 'j':
            audio.src = 'sounds/snare.wav';
            audio.play();
            break;
        case 'k':
            audio.src = 'sounds/tom.wav';
            audio.play();
            break;
    };
})