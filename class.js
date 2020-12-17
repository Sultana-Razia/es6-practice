class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "High School"
    }
}


const Student1 = new Student(11, "Shovo");
const Student2 = new Student(12, "mahi");
const Student3 = new Student(13, "Bappi");

console.log(Student1.name, Student2, Student3);