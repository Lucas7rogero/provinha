const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const reportController = require('../controllers/reportController');
const teacherController = require('../controllers/teacherController');
// cria o const teacher 

router.get('/', (req, res) => {
  res.redirect('/insert');
});

router.get('/insert', studentController.showInsertForm);
router.post('/insert', studentController.createStudent);

router.get('/report', reportController.showReport);

module.exports;