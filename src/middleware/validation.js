function validateCourse(req, res, next) {
  const { code, name, credits } = req.body;

  if (!code || !name || credits === undefined) {
    return res.status(400).json({
      message: "Course code, name and credits are required"
    });
  }

  next();
}

function validateRegistration(req, res, next) {
  const { studentId, courseCode } = req.body;

  if (!studentId || !courseCode) {
    return res.status(400).json({
      message: "Student ID and course code are required"
    });
  }

  next();
}

module.exports = {
  validateCourse,
  validateRegistration
};