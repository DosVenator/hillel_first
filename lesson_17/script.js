function Student(firstName, lastName, birthYear, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);

    this.getAge = function () {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthYear;
        return age;
    };

    this.getGrade = function () {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        const result = sum / this.grades.length;
        return result;
    };

    this.present = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function () {
        const index = this.attendance.indexOf(null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    this.summary = function () {
        const presentLesson = this.attendance.filter(a => a === true).length;
        const totalLesson = this.attendance.filter(a => a !== null).length;

        const attendanceGrade = presentLesson > 0 ? presentLesson / totalLesson : 0;
        const averageGrade = this.getGrade();

        if (averageGrade > 90 && attendanceGrade > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceGrade > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student ("Іван", "Попов", 1999, [95,90,94,100,90]);
student1.present();
student1.present();
student1.present();
console.log(`Вік студента: ${student1.getAge()}`);
console.log(`Середній бал: ${student1.getGrade().toFixed(2)}`);
console.log("Відвідуваність:", student1.attendance);
console.log("Підсумок:", student1.summary());

const student2 = new Student("Марія", "Іваненко", 2003, [85, 88, 80, 82]);
student2.present();
student2.present(); 
student2.present();
console.log(`Вік студента: ${student2.getAge()}`);
console.log(`Середній бал: ${student2.getGrade().toFixed(2)}`);
console.log("Відвідуваність:", student2.attendance);
console.log("Підсумок:", student2.summary());

const student3 = new Student("Олександр", "Сидоренко", 2001, [60, 65, 70, 55]);
student3.absent(); 
student3.absent(); 
student3.absent();
console.log(`Вік студента: ${student3.getAge()}`);
console.log(`Середній бал: ${student3.getGrade().toFixed(2)}`);
console.log("Відвідуваність:", student3.attendance);
console.log("Підсумок:", student3.summary());