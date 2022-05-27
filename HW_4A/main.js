const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pair = pairStudents(students);

/* Функція перша */

function pairStudents(student) {
    const resultPair = [];
    const studentsTest = student.slice();
    const deleteElement = studentsTest.splice(1,1);
    const addName = deleteElement.toString();
      studentsTest.splice(2, 0, addName);

    while (studentsTest.length) {
      resultPair.push(studentsTest.splice(0, 2));
    }
  
    return resultPair;
}
console.log(pair);

const pairThemes = pairStudentsThemes();
/* Функція друга */
function pairStudentsThemes () {
const pair2 = pair.slice();
const pair2Res = [];
for (const item of pair2) {
  let newELement = item.join(' i ');
  pair2Res.push(newELement);
}

const resultTeamArray = [];

for (let i=0; i<3; i++) {
  let valueResultTeamArray = [];
     valueResultTeamArray = pair2Res[i].concat('-' + themes[i]);
     valueResultTeamArray = valueResultTeamArray.split('-');
  resultTeamArray.push(valueResultTeamArray);
}
  return resultTeamArray;
}

console.log(pairThemes);

/* Функція 3 */

const studentPlusMarks = StudentsMarks (students);

function StudentsMarks (student) {

const resultStudentsMarks = [];
const studentsMarks = student.slice();
for (let i=0; i<students.length; i++) {
  let valueResultTeamMarksArray = [];
     valueResultTeamMarksArray = studentsMarks[i].concat('-' + marks[i]);
     valueResultTeamMarksArray = valueResultTeamMarksArray.split('-');
  resultStudentsMarks.push(valueResultTeamMarksArray);
}
return resultStudentsMarks;
}

console.log(studentPlusMarks);

/* Функція рандомної оцінки */

function getRandom () {
  let randomMarks = Math.random() * (5 - 1) + 1;
  randomMarks = Math.round(randomMarks);
  return randomMarks;
}

/* Функція 4 */

const studentsPairThemesMarks = StudentsPairMarks();

function StudentsPairMarks () {
  const resultStudentsPairMarks = [];
  const studentAndThemes = pairThemes.slice();

  for (let i=0; i<3; i++) {
    let valueResultTeamArrayMarks = [];
    let randomMark = getRandom();
       valueResultTeamArrayMarks = studentAndThemes[i].concat( randomMark);
       resultStudentsPairMarks.push(valueResultTeamArrayMarks);
  }
    return resultStudentsPairMarks;
  }

console.log(studentsPairThemesMarks);

console.log ("Початкові масиви лишились без змін:")

console.log(students);
console.log(themes);
console.log(marks);