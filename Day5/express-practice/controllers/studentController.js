let students =[
    {
        id:1,
        name:"Ankita",
        department: "CSIT",
        semester:5
    },
    {
        id:2,
        name:"Anup",
        department: "BCA",
        semester:6
    },
    {
        id:1,
        name:"Ayush",
        department: "BBS",
        semester:5
    }
];

function getStudents(req,res){
    res.status(400).json({
        success: true,
        count: students.length,
        data:students
    })
}

function getStudentById(req,res){
    const id= Number(res.params.id);

    const student= students.find(s=> s.id === id);

    if(!student){
        return res.status(404).json({
            success: false,
            message: "Student not found"
        })
    }
    res.status(200).json({
        success: true,
        data: student
    })
}

function createStudent(req, res) {
    const { name, department, semester } = req.body;

    const newId = students.length
        ? Math.max(...students.map(s => s.id)) + 1
        : 1;

    const newStudent = {
        id: newId,
        name: name.trim(),
        department: department.trim(),
        semester
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: newStudent
    });
}

// PUT - Replace all editable student details
function updateStudent(req, res) {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    const { name, department, semester } = req.body;

    student.name = name.trim();
    student.department = department.trim();
    student.semester = semester;

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        data: student
    });
}

// PATCH - Update selected student details
function patchStudent(req, res) {
    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    Object.assign(student, req.body);

    res.status(200).json({
        success: true,
        message: "Student partially updated",
        data: student
    });
}

// DELETE - Delete a student
function deleteStudent(req, res) {
    const id = Number(req.params.id);

    const studentIndex = students.findIndex(s => s.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Student not found"
        });
    }

    students.splice(studentIndex, 1);

    res.status(204).send();
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    patchStudent,
    deleteStudent
};