class Student {
    constructor(fullName, university, course) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
    }

    markss = [];

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return this.markss;
    }

    set marks(val) {
        if (this.markss === null) {
            return null;
        } else {
       return this.markss.push(val); }
    }

    getAverageMark() {
        return this.marks.reduce((value, item) => value += item, 0) / this.marks.length;
    }

    dismiss() {
        return this.markss = null;
    }

    recover() {
        return this.markss = [];
    }

  /*  get marks() {
        let mark = [5,4,4,5];
        return mark;
    }

    set marks(val) {
        return this.mark.push(val);
    } */
}

class BudgetStudent extends Student {
    constructor(fullName, university, course) {
        super(fullName, university, course);
        setInterval(() => {this.getScholarship()}, 30000) 
    }
    
    getScholarship() {
      if ((this.getAverageMark()>=4.0)&&(this.markss!==null)) {
        return console.log('Ви ' + this.fullName + ' отримали 1400 грн. стипендії');
      }  
    }
}

const std1 = new Student('Nba Blabla', 'imagine university', 3);
console.log('Виводимо інформацію про першого студента')
console.log(std1.getInfo());
[std1.marks, std1.marks, std1.marks, std1.marks] = [5,4,4,5];
console.log("Виводимо його оцінки, перед тим як додати ще одну, щоб побачити чи працює")
console.log(std1.marks);
std1.marks = 5;
console.log('Виводимо масив оцінок після того як додали ще одну');
console.log(std1.marks);
console.log('Виводимо середню оцінку студента:')
console.log(std1.getAverageMark());
std1.dismiss();
console.log('Видалили студента і перевіряємо його оцінки, має бути Null якщо його видалили')
console.log(std1.marks);
std1.marks = 5;
console.log('Спробували додати оцінку видаленому студенту, але бачимо, що результат залишився Null')
console.log(std1.marks);
std1.recover();
std1.marks = 5;
console.log('Відновили студента, і поставили відразу йому 5, знову метод додавання оцінок працює')
console.log(std1.marks);

const str = new BudgetStudent('Maria hi', 'University Bla', '4');
[str.marks, str.marks, str.marks, str.marks] = [5,4,4,5];
console.log('Створили інший клас і вивели інфу про першого студента:')
console.log(str.getInfo())
const str1 = new BudgetStudent('Maria ha', 'University Bla', '4');
[str1.marks, str1.marks, str1.marks, str1.marks] = [3,4,4,3];
console.log('Створили другого студента, щоб перевірити чи буде зявлятись повідомлення про стипендію, якщо в нього середній бал <4')
console.log(str1.getInfo());