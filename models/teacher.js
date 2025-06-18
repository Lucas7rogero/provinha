const db = require('./database');

async function getAllTeachers() {
  const result = await db.query('SELECT id, name, created_at FROM teachers ORDER BY name');
  return result.rows;
}

async function getTeacherById(id) {
  const result = await db.query('SELECT id, name, created_at FROM teachers WHERE id = $1', [id]);
  return result.rows[0];
}

async function createTeacher(name) {
  const result = await db.query(
    'INSERT INTO teachers (name) VALUES ($1) RETURNING id, name, created_at',
    [name]
  );
  return result.rows[0];
}

async function getStudentsByTeacher(teacherId) {
  const result = await db.query('SELECT id FROM teaching', [teacherId]);
  return result.rows;
}

async function assignStudentToTeacher(studentId, teacherId) {
  await db.query(
    'INSERT INTO student_teacher (student_id, teacher_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
    [studentId, teacherId]
  );
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  getStudentsByTeacher,
  assignStudentToTeacher
};