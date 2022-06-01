function getMaxDigit () {
    let a;
    while (!Number.isInteger(a) || !a)  {
        a =  Number( prompt("Function 1. Send number", "1000") );
    }
    a = String(a);

    let max = 0;
    for (const i of a) {
       if (i > max) {
           max = i;  }
    }
   return max;
}

function podatok () {
    let a;
    while (!Number.isInteger(a) || !a || a < 0)  {
        a = Number ( prompt("Function 4. Your salary", "1000") );
    }
    let s = a - a * 19.5 / 100;
    return s;
}

function getRandomNumber () {
    let min, max, number;
    while (!Number.isInteger(min) || !min )  {
        min = Number ( prompt("Function 5. Min number", "10") );
    }
    while (!Number.isInteger(max) || !max || max < min)  {
        max = Number ( prompt("Function 5. Max number", "1000") );
    }
    number = Math.floor( Math.random() * (max - min) + min );
    return number; 
}

function powNumber () {
    let a, b, c;
    while (!Number.isInteger(a) || !a )  {
        a =  Number( prompt("Function 2. What degree of number?/Введи степінь числа", "3") );
    }

    while (!Number.isInteger(b) || !b)  {
        b =  Number( prompt("Function 2. What number?/Введи саме число", "2") );
    }

        c = 1; 
        for (let i = 0; i < a; i++) {
            c = c * b;
        }

    return c;
}

function countLetter () {
    let a, b;
    let c = 0;
    a = prompt("Function 6. What is your word?", "BlaBlaBla");
    b = prompt("Function 6. What letters to count?", "a");

    for (const i of a) {
        if (i == b) {
            c++
        }
    }

    return c;
}

function getRandomPassword () {

let a, b, password = "";

a = confirm("Function 9. Do you want tell me have mane digits should be in the password?")

let digit;

if (a) {
    while (!Number.isInteger(digit) || !digit || digit < 0)  {
        digit =  Number( prompt("Function 9. Have mane digits should be in the password?", "2") );
    }
} else {
        digit = 8;
}

for (let i = 0; i < digit; i++) {
    b = String ( Math.floor( Math.random() * 10 ) );
    password = password + b;
}
    return password;
}

function deleteLetters () {
    let a, b;
    a = prompt("Function 11. What is your word?", "BlaBlaBla");
    b = prompt("Function 11. What letters to delete?", "a");
    let c = "";

    for (const i of a) {
        if (i != b) {
            c += i;
        }
    }
   return c;
}

function formatWord () {
    let a, b, c, d;
    a = prompt("Function 3. What is your word?", "BlaBlaBla");
    b = a.toLowerCase();
    d = b.slice(1, b.length);
    c = a[0].toUpperCase();
    a = c + d;
    return a;
}

 document.writeln(`
    Функція №1: Max number - ${getMaxDigit()}; <br>
    Функція №2: Your number - ${powNumber()}; <br>
    Функція №3: Your word - ${formatWord()};    <br>
    Функція №4: Yout podatok - ${podatok()};  <br>
    Функція №5: Your random number - ${getRandomNumber()}; <br>
    Функція №6: ${countLetter()}; <br>
    Функція №9: Your password - ${getRandomPassword()}; <br>
    Функція №11: Your word - ${deleteLetters()};`) 