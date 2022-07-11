const textFormat = document.getElementById("textFormat");
const btnSmall = document.getElementById("btnSmall")
const btnLarge = document.getElementById("btnLarge")
const text = document.getElementById("text")

function* createIdGenerator() {
    for(let i = 1; i<Infinity; i++) {
        yield i;
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);

function* newFontGenerato(size){
    let current = size
    while (true){
        let reset = yield current;
        if (reset === "down"){
          current -= 2;
      } else if (reset === 'up') {
        current += 2;
      } 
      if (current>0) {
        text.style.fontSize = `${current}px`
      }  else {current = 0}
      
    }
  }

const newFontGenerator = newFontGenerato(14)

btnLarge.addEventListener("click", () => newFontGenerator.next("up"))
btnSmall.addEventListener("click", () => newFontGenerator.next("down"))


