const db = require('./models/database');

async function createTables() {
  try {
    await db.query(`
      CREATE TABLE students (
        id INT,
        name VARCHAR(255) NOT NULL,
        grade DECIMAL(4,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE teachers (
        id INT,
        name VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE student_teacher (
        id INT,
        student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
        teacher_id INTEGER REFERENCES teachers(id) ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(student_id, teacher_id)
      );
    `);

    console.log('Tables created successfully!');
  } catch (err) {
    console.error('Error creating tables:', err);
  } finally {
    await db.pool.end();
  }
}

module.exports = { createTables };

if (require.main === module) {
  createTables();
}