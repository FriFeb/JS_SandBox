const musicContainer = document.querySelector('#music-container');
const audio = document.querySelector('#audio');
const title = document.querySelector('#title');
const progress = document.querySelector('#progress');
const progressContainer = document.getElementById('progress-container');
const prevBtn = document.querySelector('#prev');
const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const cover = document.querySelector('#cover');

// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// Track a song 
let songIndex = 2;

function loadSong(song) {
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// Play Song
function playSong() {
    audio.play();
    musicContainer.classList.add('play')
    playBtn.firstElementChild.classList.add('fa-pause');
    playBtn.firstElementChild.classList.remove('fa-play');
}

// Pause Song
function pauseSong() {
    audio.pause();
    musicContainer.classList.remove('play');
    playBtn.firstElementChild.classList.add('fa-play');
    playBtn.firstElementChild.classList.remove('fa-pause');
}

function songEvent() {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
}

function goPrev() {
    songIndex === 0 ? (songIndex = songs.length - 1) : songIndex--;

    // Load song
    loadSong(songs[songIndex]);
    playSong();
}

function goNext() {
    (songIndex === songs.length - 1) ? songIndex = 0 : songIndex++;

    // Load song
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const songProgressPercentage = currentTime / duration * 100;
    progress.style.width = `${songProgressPercentage}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

loadSong(songs[2]);

playBtn.addEventListener('click', songEvent);
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goPrev);
progressContainer.addEventListener('click', setProgress);
audio.addEventListener('timeupdate', updateProgress);