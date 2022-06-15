const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Рахує податок

function getMyTaxes(salary, country) {
    console.log()
    console.log(` Твій податок в ${country}: ${this.tax  * salary}`)
    return this.tax * salary;
}

// Видаляє пробіли

function deleteGap(str) {
    return str.replace(/\s/g, '');
}

// Мозок не додумався як то зробити, щоб прив'язувало країну яку повертає функція до назви об'єкта

/* const selC = function() {
    let country;
    while (country !== 'ukraine' && country !== 'latvia' && country !== 'litva') {
        country = prompt("Select a country", "Ukraine, Latvia, Litva").toLocaleLowerCase();
        country = deleteGap(country);
        return country;
    }
} */

// Вводимо свою заробітню плату

const selS = function(country) {
    let salary;
    while (!Number.isInteger(salary) || !salary)  {
        salary =  +prompt(`Write your salary in ${country}`, "1000");
    }
    return salary;
}

getMyTaxes.call(ukraine, selS('Ukraine'), 'Ukraine')
getMyTaxes.call(latvia, selS('Latvia'), 'Latvia')
getMyTaxes.call(litva, selS('Litva'), 'Litva')


// Функція 2 

function getMiddleTaxes(country) {
    console.log(`Середній податок в ${country} : ${this.tax * this.middleSalary}`);
    return this.tax * this.middleSalary;
}

getMiddleTaxes.call(ukraine, 'Ukraine');
getMiddleTaxes.call(latvia, 'Latvia');
getMiddleTaxes.call(litva, 'Litva');

// Функція 3

function getTotalTaxes(country) {
    const taxes = this.tax * this.middleSalary * this.vacancies;
    console.log(`Bсього податків платять IT-спеціалісти у ${country}: ${taxes}`);
    return taxes;
}

getTotalTaxes.call(ukraine, 'Ukraine');
getTotalTaxes.call(latvia, 'Latvia');
getTotalTaxes.call(litva, 'Litva');

function getMySalary(country) {
    let mySal = {};
    setInterval(() => {
        let salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
        let taxes = this.tax * salary;
        let profit = salary - taxes;
        mySal['salary'] = salary;
        mySal['taxes'] = taxes;
        mySal['profit'] = profit;
        console.log(country + ':');
        console.log(mySal)
    }, 10000)
}

getMySalary.call(ukraine, 'Ukraine');
getMySalary.call(latvia, 'Latvia');
getMySalary.call(litva, 'Litva');