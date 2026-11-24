function findStudent(students, id){
    return students.find(student => student.id === id);
}

function isDuplicate(students,id){
    return students.some(student => student.id === id);
}

function validateStudent(id,name,age){
    if(!Number.isInteger(id) || id<=0){
        return false;
    }

    if(!name || name.trim() === ''){
        return false;
    }

    if(!Number.isInteger(age) || age<=0){
        return false;
    }

    return true;
}


module.exports ={ findStudent,validateStudent,isDuplicate};