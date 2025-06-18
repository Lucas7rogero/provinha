const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const reportController = require('../controllers/reportController');

router.get('/', (req, res) => {
  res.redirect('/insert');
});

router.get('/insert', studentController.showInsertForm);
router.post('/insert', studentController.createStudent);

router.get('/report', reportController.showReport);

module.exports;