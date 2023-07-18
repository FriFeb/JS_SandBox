const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

function playVideo() {
    video.play();
    play.firstElementChild.classList.remove('fa-play');
    play.firstElementChild.classList.add('fa-pause');
}

function pauseVideo() {
    video.pause();
    play.firstElementChild.classList.add('fa-play');
    play.firstElementChild.classList.remove('fa-pause');
}

function stopVideo() {
    pauseVideo();
    video.currentTime = 0;
}

function playEvent() {
    video.paused ? playVideo() : pauseVideo();
}

function getTimestamp() {
    getProgress();

    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes)
    };

    let seconds = Math.floor(video.currentTime);
    if (seconds < 10) {
        seconds = '0' + String(seconds)
    };
    
    timestamp.innerText = `${minutes}:${seconds}`;
}

function getProgress() {
    progress.value = video.currentTime / video.duration * 100;
}

function setProgress(e) {
    video.currentTime = progress.value * video.duration / 100;
}

progress.addEventListener('click', setProgress);
play.addEventListener('click', playEvent);
stop.addEventListener('click', stopVideo);
video.addEventListener('timeupdate', getTimestamp);
