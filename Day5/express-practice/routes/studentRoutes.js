const express = require("express");

const router = express.Router();

const {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    patchStudent,
    deleteStudent
} = require("../controllers/studentController");

const checkAdmin = require("../middleware/authMiddleware");

const {
    validateStudent,
    validateStudentPatch
} = require("../middleware/validateStudent");

// Router-level middleware
router.use((req, res, next) => {
    console.log("Student router accessed");
    next();
});

// GET all students
router.get("/", getStudents);

// GET student by ID
router.get("/:id", getStudentById);

// POST create student
router.post("/", validateStudent, createStudent);

// PUT update complete student
router.put("/:id", validateStudent, updateStudent);

// PATCH update selected fields
router.patch("/:id", validateStudentPatch, patchStudent);

// DELETE student - Admin only
router.delete("/:id", checkAdmin, deleteStudent);

module.exports = router;