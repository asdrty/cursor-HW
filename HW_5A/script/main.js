// Функція 1 через цикл фор;

function  getRandomArray(lenght, minx, maxx) {
    let arr = [];
        for (let i=0; i<lenght; i++) {
            let number = Math.floor( Math.random() * (maxx - minx) + minx);
            arr.push(number);
        }
        alert(arr)
    return arr;
}

function func1() {
    let len, mi, ma;
    while (!Number.isInteger(len) || !len)  {
        len =  +prompt("Введи довжину масиву", "6");
    }
    while (!Number.isInteger(mi) || !mi)  {
        mi =  +prompt("Введи мінімальне число в масиві", "2");
    }
    while (!Number.isInteger(ma) || !ma || ma < mi)  {
        ma =  +prompt("Введи максимальне число в масиві", "8");
    }
    getRandomArray(len, mi, ma)
}

fun1.onclick = func1;

// Функція 2


function nArray() {
    let array = prompt('Введіть масив цілих чисел, через кому', '34,4,24,54,6');
    array = array.split(",");
    let arrayNumber = array.map(element => Number(element)); 
    return arrayNumber;
}

function getModa () {
    const arrr2 = nArray(); 
    let array = arrr2.filter((item) => Number.isInteger(item));
    let count = 0;
    let moda = count;
    let index = 0;
    for (let i=0; i<array.length; i++) {   
        const newAr = array.slice();
        count = newAr.filter((item) => item == array[i]).length;
        if (count>moda) {
            index = i;
        }
    }
    moda = array[index];
    alert(moda);
    return moda;

}

fun2.onclick = getModa;

// Функція 3 

function func3(arr) {
    let arrr2 = arr.filter((item) => Number.isInteger(item));
    let arrEnd = arrr2.reduce((sum, item) => sum+item , 0)/arrr2.length;
    alert('Середнє значення цілих чисел масиву = ' + arrEnd)
    return arrEnd;
}

function getAverage() {
    let array = prompt('Введіть масив цілих чисел, через кому', '34,4,24,54,6');
    array = array.split(",");
    let arrayNumber = array.map(element => Number(element));
    func3(arrayNumber);
}

fun3.onclick = getAverage;

// Функція 4 

function getMedian() {
    let arrr2 = nArray();
    let arrayMedian = arrr2.filter((item) => Number.isInteger(item));
    arrayMedian = arrayMedian.sort((a,b) => a-b);
    let len = arrayMedian.length;
    let median = null;
    if (len % 2 == 0) {
        len = len/2;
        median = (arrayMedian[len-1]+arrayMedian[len])/2
    } else {
        len = Math.ceil(len/2);
        median = arrayMedian[len-1];
    }
    alert(median)
return median;
}

fun4.onclick = getMedian;

// Функція 5

function filterEvenNumbers() {
    let arrayFilter = nArray();
    let arrayfilterEvenNumbers = arrayFilter.filter((item) => item%2 !== 0);
    alert(arrayfilterEvenNumbers);
    return arrayfilterEvenNumbers;
}

fun5.onclick = filterEvenNumbers;

// Функція 6

function countPositiveNumbers () {
    let arrayNumber = nArray();
    let arrayCountPositiveNumbers = arrayNumber.filter((item) => item>0);
    alert(arrayCountPositiveNumbers.length);
    return arrayCountPositiveNumbers;
}

fun6.onclick = countPositiveNumbers;

// Функція 7

function getDividedByFive() {
    let arrayNumber = nArray();
    let arrayGetDividedByFive = arrayNumber.filter((item) => item%5==0);
    alert(arrayGetDividedByFive);
    return arrayGetDividedByFive;
}

fun7.onclick = getDividedByFive;

// Функція 8 / через replace

function replaceBadWords() {
    let arrayText = prompt('Введіть свій рядок', "Holy shit!");
    let arrayTextSh = arrayText.replace(/shit/gi, '****');
    let arrayTextFu = arrayTextSh.replace(/fuck/gi, '****');
    alert(arrayTextFu);
    return arrayTextFu;
}

fun8.onclick = replaceBadWords;

// Функція 8 / через масиви

function replaceBad() {
    let arrayText = prompt('Введіть свій рядок', "Holy shit! Are you fucking kidding? It's bullshit!");
    let arrayBad = ["shit", "fuck",]
        for (let j of arrayBad) {
            arrayText = arrayText.split(j).join("****");
            }
    alert(arrayText);
    return arrayText;
}
fun8_2.onclick = replaceBad;
// Функція 9 

function divideByThree() {
    let text = prompt('Введіть свій рядок', "Commander");
    let array = [];
    for (let i=0; i<text.length; i += 3) {
        array.push(text.substring(i, i + 3))
    }
    alert(array);
    return array;
}

fun9.onclick = divideByThree;

