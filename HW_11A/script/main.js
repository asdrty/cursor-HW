const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function color() {
    return Math.floor(Math.random() * 255);
}

function blocks(block) {
    let divs;
    for (let index = 0; index < 25; index++) {
        divs = document.createElement('div');
        divs.classList.add('kvadrat')
        block.prepend(divs);
        divs.style.backgroundColor = `rgb(${color()}, ${color()}, ${color(0, 255)})`;
    }
}

function generateBlock() {
    let divMain;
    divMain = document.createElement('div');
    divMain.classList.add('main_kvadrat');
    btn1.after(divMain);
    blocks(divMain);
    setTimeout(() => divMain.remove(), 1000);
}

function generateBlocks() {
    let divMain;
    divMain = document.createElement('div');
    divMain.classList.add('main_kvadrat');
    btn2.after(divMain);
    let divs;
    let obj = {};
    for (let index = 0; index < 25; index++) {
        divs = document.createElement('div');
        divs.classList.add('kvadrat')
        divMain.prepend(divs); 
        obj[index] = divs;
    }
    setInterval(() => {
        for (const property in obj) {
            obj[property].style.backgroundColor = `rgb(${color()}, ${color()}, ${color(0, 255)})`;;
          }
    }, 500);
    setTimeout(() => divMain.remove(), 3000);
}

btn1.onclick = generateBlock;
btn2.onclick = generateBlocks;