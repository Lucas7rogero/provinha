const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Database = require('../models/database');
// acrescentei o const database

function createStudent(req, res) {
  res.send('Estudante criado!');
}
// criei a função para criar um estudante

module.exports = {
  createStudent,
};
// exportei a função createStudent para ser usada em outros arquivos