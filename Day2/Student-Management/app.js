const {addStudent,deleteStudent,displayStudents}= require('./controllers/studentController');

//Adding Students
addStudent(1,"Ankita", 19);
addStudent(2,"Ram", 21);
addStudent(3,"Sita",5);

//Display all students
displayStudents();

//Delete a student
deleteStudent(2);

//display after deletion
displayStudents();
