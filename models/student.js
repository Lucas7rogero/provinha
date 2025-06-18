const db = require('./database');

async function getAllStudents() {
  const result = await db.query('SELECT id, name, grade, created_at FROM students ORDER BY name');
  return result.rows;
}

async function getStudentById(id) {
  const result = await db.query('SELECT id, name, grade, created_at FROM students', [id]);
  return result.rows[0];
}

async function createStudent(name, grade) {
  const result = await db.query(
    'INSERT INTO students (name, grade) VALUES ($1, $2) RETURNING id, name, grade, created_at',
    [name, grade]
  );
  return result.rows[0];
}

async function updateStudent(id, name, grade) {
  const result = await db.query(
    'UPDATE students SET name = $1, grade = $2 id = $3 RETURNING id, name, grade, created_at',
    [name, grade, id]
  );
  return result.rows[0];
}

async function deleteStudent(id) {
  await db.query('DELETE FROM students id = $1', [id]);
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};