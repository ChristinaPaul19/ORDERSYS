const { courses } = require("../data/store");

exports.create = (req, res) => {
  const { code, name, credits } = req.body;

  if (courses.has(code)) {
    return res.status(409).json({
      message: "Course already exists"
    });
  }

  const course = {
    code,
    name,
    credits
  };

  courses.set(code, course);

  res.status(201).json(course);
};

exports.getAll = (req, res) => {
  res.json([...courses.values()]);
};

exports.getOne = (req, res) => {
  const course = courses.get(req.params.code);

  if (!course) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  res.json(course);
};

exports.update = (req, res) => {
  const code = req.params.code;

  if (!courses.has(code)) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  const course = {
    code,
    ...req.body
  };

  courses.set(code, course);

  res.json(course);
};

exports.remove = (req, res) => {
  if (!courses.delete(req.params.code)) {
    return res.status(404).json({
      message: "Course not found"
    });
  }

  res.json({
    message: "Course deleted successfully"
  });
};