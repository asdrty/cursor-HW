/*let  divs = document.createElement('div');
divs.classList.add('kvadrat')
document.body.append(divs);*/

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

function color() {
    return Math.floor(Math.random() * 255);
}

function generateBlocks() {
    let divs;
    let br = document.createElement('br');
    btn1.after(br);
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            divs = document.createElement('div');
            divs.classList.add('kvadrat')
            btn1.after(divs);
            divs.style.backgroundColor = `rgb(${color()}, ${color()}, ${color(0, 255)})`;
        }
        br = document.createElement('br');
        divs.after(br);
    } 
}

btn1.onclick = generateBlocks;

function generateBlocksInterval() {
    let divs;
    let br = document.createElement('br');
    document.body.append(br);
    for (let i=0; i<5; i++) {
        for (let j=0; j<5; j++) {
            divs = document.createElement('div');
            divs.classList.add('kvadrat')
            btn2.append(divs);
            divs.style.backgroundColor = `rgb(${color()}, ${color()}, ${color(0, 255)})`;
        }
        br = document.createElement('br');
        document.body.append(br);
    } 
}

btn2.onclick = generateBlocksInterval;