const express = require('express');
const router = express.Router();
const StudentController = require('../controller/student.js');

router.post('/post', StudentController.insert_student);
router.get('/get/list', StudentController.get_studentList);
router.get('/get/:studid', StudentController.get_oneStudent);
router.get('/get/list/:stud_name', StudentController.get_searchstud_name);
router.delete('/delete/:studid', StudentController.delete_student);


module.exports = router;
