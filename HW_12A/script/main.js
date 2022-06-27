let mainDivAudio = document.querySelectorAll('.audio');
let arrId =[];
for (let index = 0; index < mainDivAudio.length; index++) {
    arrId.push(+mainDivAudio[index].id)
}
const divClick = document.querySelector('.mainDiv');
const divAudio = document.querySelectorAll(".blockLetter");
let arrIdDiv = [];
for (let index = 0; index < divAudio.length; index++) {
    arrIdDiv.push(+divAudio[index].id)
}

function removePlay() {
    divAudio.forEach((el) => el.classList.remove("playing"))
    mainDivAudio.forEach((el) => el.pause())
}

function playAudio (key) {
    let audio = document.getElementById(key);
    let divAudioLetter = document.getElementById(key+10);
    divAudioLetter.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', () => {
        divAudioLetter.classList.remove('playing');
     })
}

function divClicks(elem) {
    removePlay()
    if (!elem.id) return
    const divClickLetter = elem.id-10;
    playAudio(divClickLetter);
}

divClick.addEventListener("click", (el) => divClicks(el.target))

window.addEventListener("keydown", function(event) {
    removePlay() 
    const key = event.keyCode;
    let keyCh = arrId.find((elem) => elem === key);
    if(!keyCh) return;
    playAudio(keyCh);
  }, true);