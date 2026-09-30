const router = require("express").Router();

const courseController = require("../controllers/courseController");
const { validateCourse } = require("../middleware/validation");

router.post("/", validateCourse, courseController.create);
router.get("/", courseController.getAll);
router.get("/:code", courseController.getOne);
router.put("/:code", validateCourse, courseController.update);
router.delete("/:code", courseController.remove);

module.exports = router;