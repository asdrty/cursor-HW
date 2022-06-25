let mainDivAudio = document.querySelectorAll('.audio');
let arrId =[];
for (let index = 0; index < mainDivAudio.length; index++) {
    arrId.push(mainDivAudio[index].id)
}
const divAudio = document.querySelectorAll(".blockLetter");

window.addEventListener("keydown", function(event) {
    divAudio.forEach((el) => el.classList.remove("playing"))
    mainDivAudio.forEach((el) => el.pause())
    const key = event.key.toLocaleLowerCase(); 
    let keyCh = arrId.find((elem) => elem === key);
    if(!keyCh) return console.log("I don't know what are sound")
    let audio = document.getElementById(keyCh);
    let divAudioLetter = document.getElementById(keyCh.toLocaleUpperCase());
    divAudioLetter.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    audio.addEventListener('ended', () => {
        divAudioLetter.classList.remove('playing');
     })
  }, true);








