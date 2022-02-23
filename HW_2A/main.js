let N = Number ( prompt("Будь ласка введіть 1 ціле число", "10") );


 while (!Number.isInteger(N) || !N)  {
    N = Number ( prompt("Будь ласка введіть 1 ціле число", "10") );
}

let M = Number(prompt("Будь ласка введіть 2 ціле число", "100"));

while (!Number.isInteger(M) || !M || M<N)  {
    M = Number ( prompt("Будь ласка введіть 2 ціле число", "10") );
}

let a = null;
let even = confirm("Пропускати парні числа?");

if (even) {
    for (let i=N; i<=M; i++) {
        if (i % 2 != 0) {
            a +=i;
        }
    } 
} else {
    for (let i=N; i<=M; i++) {
        a +=i;      
    }
}

document.writeln (
    `
    Ваше 1 число: ${N}  <br>  <br>
    Ваше 2 число: ${M}  <br>  <br>
    Пропускати парні числа? ${even} <br>  <br>
    Ваша сума: ${a}
    `
)