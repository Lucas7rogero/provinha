// criei o controller do "teacher"
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Database = require('../models/database');
// acrescentei o const database

function createTeacher(req, res) {
  res.send('Professor criado!');
}
// criei a função para criar um professor

module.exports = {
  createTeacher,
};
// exportei a função createTeacher para ser usada em outros arquivos