
const express = require('express');
const { } = require('../controller/post');
const { createStudent, createCourse, createSC, getStudent, getCourse, deleteStudent, deleteCourse } = require('../controller/student');
const router = express.Router();

router.post('/student', createStudent);
router.post('/course', createCourse);
router.post('/create', createSC);

router.get('/getstudent/:id', getStudent);
router.get('/getcourse/:id', getCourse);

router.delete('/deletestudent', deleteStudent);
router.delete('/deletecourse', deleteCourse);


module.exports = router;