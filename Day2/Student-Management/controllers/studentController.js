const {findStudent, isDuplicate, validateStudent}= require('../utils/studentUtils');

let students=[];

//Add Student
function addStudent(id,name,age){
    if(!validateStudent(id,name,age)){
        console.log("Invalid student information!");
        return;
    }
    if(isDuplicate(students,id)){
        console.log("Student Id already exists!");
        return;
    }
    const student={
        id,
        name,
        age
    }
    students.push(student);
    console.log(`${name} added successfully!`);
}

//Delete Student
function deleteStudent(id){

    const student = findStudent(students,id);

    if(!student){
        console.log("Student not found!");
        return;
    }
    students=students.filter(student=>student.id!==id);

    console.log("student deleted successfully!");
}

//Display Student

function displayStudents(){
    if(students.length === 0){
        console.log("No students found!");
        return;
    }

    console.log("\n -----Student List-----");

    students.forEach(student=>{
        console.log(`ID: ${student.id}`);
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        
    })
}

module.exports ={ addStudent,deleteStudent,displayStudents}
