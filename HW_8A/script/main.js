const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


// Робить першу велику літеру

function firstLetterBig(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// Функція запитує, якого саме учня ти хочеш дослідити;

function nameStudent() {
    let nameStudent ;
    while (nameStudent !== 'tanya' && nameStudent !== 'victor' && nameStudent !== 'anton') {
        nameStudent = prompt("Введіть ім'я студента", "Tanya, Victor, Anton").toLocaleLowerCase();
    }
    return firstLetterBig(nameStudent);
}

// Виводить предмети;

function getSubjects() {
    let nameStud = nameStudent();
    const obj = students.find((item) => item.name == nameStud);
    let sub = "";
    let arrSub = [];
    for (let i in obj.subjects) {
      if (i.includes('_')) {
        i = i.replace("_", " ");
      }
      i = firstLetterBig(i);
      sub =  sub + " " + i + ";";
      arrSub.push(i);
    }
    alert(`Твої предмети ${nameStud}: ${sub}`)
    console.log(arrSub);
    return arrSub;
}

btn1.onclick = getSubjects;

// Рахує середню оцінку студента 

function avarageMark(newObj) {
  let sum = 0;
  let countMarks = 0;
  for (let i in newObj) {
    countMarks = countMarks + newObj[i].length;
    for (const j of newObj[i]) {
      sum = sum + j;
    } 
  }
  const average = (sum/countMarks).toFixed(2);
  return average; 
}

function getAverageMark() {
  let nameStud = nameStudent();
  const obj = students.find((item) => item.name == nameStud);
  const newObj = obj.subjects;
  let sum = 0;
  let countMarks = 0;
  for (let i in newObj) {
    countMarks = countMarks + newObj[i].length;
    for (const j of newObj[i]) {
      sum = sum + j;
    } 
  }
  const average = (sum/countMarks).toFixed(2);
  alert(`Середній бал для ${nameStud}: ${average}`)
  return average; 
}



btn2.onclick = getAverageMark;

// Інфа про студента

function getStudentInfo() {
  let nameStud = nameStudent();
  const obj = students.find((item) => item.name == nameStud);
  const newOb = obj.subjects;
  const infoStudents = {
    course : obj.course,
    name : obj.name ,
    avarageMark : +avarageMark(newOb),
  }
  alert("Дивись консоль");
  console.log(infoStudents);
  return infoStudents;
}

btn3.onclick = getStudentInfo;

// Виводимо імена всіх студентів

function getStudentsNames(){
  let array = [];
  for (let i of students) {
    array.push(i.name)
  }
  array = array.sort();
  console.log(array);
  alert(array);
  return array;
}

btn4.onclick = getStudentsNames;

// Функція вибирає найкращого студента

function getBestStudent() {
  let marks = [];
  for (const i of students) {
    let nameStud = i.name;
    const obj = students.find((item) => item.name == nameStud);
    const newObj = obj.subjects;
    i.avarageMark = avarageMark(newObj);
    marks.push(i);
  }
  let max = 0;
  let nameBest ='';
  for (const i of marks) {
    if(i.avarageMark > max) {
      nameBest = i.name;
    }
  }
  alert(`Найкращий студент: ${nameBest}`)
}

btn5.onclick = getBestStudent;

// Рахуємо букви в слові

function calculateWordLetters() {
  let words = prompt('Введіть ваше слово', "текст").split('');
  let test = words.slice();
  let obj = {};
  for (let i of words) {
    test = words.filter((item) => item!= i);
    let letter = i;
    let count = words.length - test.length;
    if (count>=1) {
      words = test;
      obj[i] = count;
    }
  }
  console.log(obj)
}

btn6.onclick = calculateWordLetters;