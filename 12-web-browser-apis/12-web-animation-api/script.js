const ball = document.querySelector('#ball');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const reverse = document.querySelector('#reverse');
const speedUp = document.querySelector('#speed-up');
const slowDown = document.querySelector('#slow-down');

const animation = [
    {
        transform: 'rotate(0) translate3D(-50%, -50%, 0)',
        color: 'white',
    },
    {
        color: 'blue',
        offset: 0.3,
    },
    {
        transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
        color: 'white',
    },
];

const animationOptions = {
    duration: 1000,
    iterations: Infinity,
};

let roll = ball.animate(animation, animationOptions);

play.addEventListener('click', () => {
    roll.playbackRate = 1;
    roll.play()
})
pause.addEventListener('click', () => roll.pause())
reverse.addEventListener('click', () => roll.reverse())
speedUp.addEventListener('click', () => roll.playbackRate *= 1.25)
slowDown.addEventListener('click', () => roll.playbackRate *= 0.8)
