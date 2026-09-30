const { courses, registrations } = require("../data/store");

exports.create = (req, res) => {
  const { studentId, courseCode } = req.body;

  if (!courses.has(courseCode)) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  const id = `${studentId}-${courseCode}`;

  if (registrations.has(id)) {
    return res.status(409).json({
      message: "Already registered"
    });
  }

  const registration = {
    id,
    studentId,
    courseCode
  };

  registrations.set(id, registration);

  res.status(201).json(registration);
};

exports.getAll = (req, res) => {
  res.json([...registrations.values()]);
};

exports.getOne = (req, res) => {
  const registration = registrations.get(req.params.id);

  if (!registration) {
    return res.status(404).json({
      message: "Registration not found"
    });
  }

  res.json(registration);
};

exports.update = (req, res) => {
  const id = req.params.id;

  if (!registrations.has(id)) {
    return res.status(404).json({
      message: "Registration not found"
    });
  }

  const registration = {
    id,
    ...req.body
  };

  registrations.set(id, registration);

  res.json(registration);
};

exports.remove = (req, res) => {
  if (!registrations.delete(req.params.id)) {
    return res.status(404).json({
      message: "Registration not found"
    });
  }

  res.json({
    message: "Registration deleted successfully"
  });
};