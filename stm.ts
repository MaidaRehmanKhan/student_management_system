class school {
    name: string;

    students: Student[] = [];
    teachers:  Teacher[] = [];

    addStudent(stdObj : Student){

        this.students.push(stdObj)
    }

    addTeacher(tedObj : Teacher){

        this.teachers.push(tedObj)
    }

    constructor(name : string){
        this.name = name;
    }
}

class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name: string, age: number, schoolName: string){
    this.name = name;
    this.age = age
    this.schoolName = schoolName;
    }
}

class Teacher extends Student{} 

//school
let school1 = new school("National Grammer")
let school2 = new school("Happy Palace")
let school3 = new school("pakland")

//student
let s1 = new Student("Ahsen", 10, school1.name)
let s2 = new Student("Ali", 15, school2.name)
let s3 = new Student("Ahsen", 18, school3.name)

//Teacher
let t1 = new Teacher("Tayyaba", 38, school1.name);
let t2 = new Teacher("Kanwal", 28, school2.name);
let t3 = new Teacher("Kamran", 55, school3.name);


school1.addStudent(s1);
school1.addStudent(s2);
school1.addStudent(s3);

//Teacher
school1.addTeacher(s1);
school1.addTeacher(s2);
school1.addTeacher(s3);

console.log(t1)
console.log(t2)
console.log(t3)

//School
console.log(school1)
console.log(school2)
console.log(school3)